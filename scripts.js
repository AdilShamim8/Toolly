// AI Tools Data (Total: 561 verified tools)
const aiTools = window.TOOLLY_TOOLS || [];

// Non-critical diagnostics are gated behind a local debug flag.
const TOOLLY_DEBUG = window.location.hostname === 'localhost' || localStorage.getItem('toolly_debug') === '1';
const debugLog = (...args) => { if (TOOLLY_DEBUG) console.log(...args); };
const debugInfo = (...args) => { if (TOOLLY_DEBUG) console.info(...args); };
const debugWarn = (...args) => { if (TOOLLY_DEBUG) console.warn(...args); };
const DEFAULT_TOOL_ICON = 'logo/favicon.svg';
const TOOLLY_ANALYTICS_KEY = 'toollyAnalyticsEvents';
const TOOLLY_ANALYTICS_MAX_EVENTS = 200;

const toollyAnalytics = {
    key: TOOLLY_ANALYTICS_KEY,
    maxEvents: TOOLLY_ANALYTICS_MAX_EVENTS,
    sessionId: (window.crypto && typeof window.crypto.randomUUID === 'function')
        ? window.crypto.randomUUID()
        : `session-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    events: [],

    loadPersistedEvents() {
        try {
            const raw = localStorage.getItem(this.key);
            if (!raw) {
                this.events = [];
                return;
            }
            const parsed = JSON.parse(raw);
            this.events = Array.isArray(parsed) ? parsed.slice(-this.maxEvents) : [];
        } catch (error) {
            this.events = [];
            debugWarn('Could not load analytics events:', error);
        }
    },

    persistEvents() {
        try {
            localStorage.setItem(this.key, JSON.stringify(this.events.slice(-this.maxEvents)));
        } catch (error) {
            debugWarn('Could not persist analytics events:', error);
        }
    },

    track(eventName, payload = {}) {
        if (!eventName) return;

        try {
            const safePayload = payload && typeof payload === 'object' ? payload : {};
            const event = {
                event: eventName,
                payload: safePayload,
                page: window.location.pathname,
                timestamp: new Date().toISOString(),
                sessionId: this.sessionId
            };

            this.events.push(event);
            if (this.events.length > this.maxEvents) {
                this.events = this.events.slice(-this.maxEvents);
            }
            this.persistEvents();

            try {
                window.dispatchEvent(new CustomEvent('toolly:analytics', { detail: event }));
            } catch (_) {
                // Ignore dispatch failures in constrained browser contexts.
            }

            if (Array.isArray(window.dataLayer)) {
                window.dataLayer.push({
                    event: eventName,
                    ...safePayload,
                    toollyTimestamp: event.timestamp
                });
            }

            if (typeof window.gtag === 'function') {
                window.gtag('event', eventName, safePayload);
            }

            if (typeof window.plausible === 'function') {
                window.plausible(eventName, { props: safePayload });
            }

            debugInfo('[Analytics]', eventName, safePayload);
        } catch (error) {
            debugWarn('Analytics track failed:', error);
        }
    }
};

toollyAnalytics.loadPersistedEvents();
window.ToollyAnalytics = toollyAnalytics;
// Shared helpers for companion modules (tool-details.js, sponsors.js)
window.aiTools = aiTools;
window.getDomain = getDomain;
window.generateToolAvatar = generateToolAvatar;
window.categoryLabel = categoryLabel;

function openExternalLink(url, metadata = {}) {
    const destinationUrl = (url || '').trim();
    if (!destinationUrl) return;

    toollyAnalytics.track('tool_external_link_clicked', {
        source: metadata.source || 'external_link',
        toolName: metadata.toolName || '',
        category: metadata.category || '',
        destinationUrl
    });

    window.open(destinationUrl, '_blank', 'noopener,noreferrer');
}

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const backToTopButton = document.getElementById('backToTop');
const toolCount = document.getElementById('toolCount');
const totalToolCount = document.getElementById('totalToolCount');
const featuredCount = document.getElementById('featuredCount');
const categoriesCount = document.getElementById('categoriesCount');
const categoryList = document.getElementById('categoryList');
const sortSelect = document.getElementById('sortSelect');
const pricingSelect = document.getElementById('pricingSelect');
const loadingOverlay = document.getElementById('loadingOverlay');
const emptyState = document.getElementById('emptyState');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const viewButtons = document.querySelectorAll('.view-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const loadMoreInfo = document.getElementById('loadMoreInfo');

let currentCategory = 'all';
let currentCategoryGroup = null; // 'chatbots' | 'image' | 'video' | 'audio' | 'developer' | 'productivity'
let currentSearch = '';
let currentSort = 'default';
let currentPricing = 'all'; // 'all' | 'free' | 'freemium' | 'paid' | 'open source'
let currentView = 'grid';
let isAllToolsCollapsed = false;
let lastTrackedSearchQuery = '';
let modalFocusReturnEl = null;

const BROWSE_URL_KEYS = Object.freeze({
    search: 'q',
    category: 'cat',
    group: 'group',
    sort: 'sort',
    view: 'view'
});

// Pagination state
let currentPage = 1;
let itemsPerPage = 20; // Initial load: 20 tools
let filteredTools = [];
let isLoading = false;

// Top-level category grouping for quick filters
const categoryGroups = {
    chatbots: ['nlp', 'writing'],
    image: ['vision', 'design'],
    video: ['video'],
    audio: ['audio'],
    developer: ['coding', 'developer-tools'],
    productivity: ['productivity', 'automation']
};

const browseStatePreferences = {
    key: 'toollyBrowseState',

    save() {
        try {
            const payload = {
                category: currentCategory,
                categoryGroup: currentCategoryGroup,
                sort: currentSort
            };
            localStorage.setItem(this.key, JSON.stringify(payload));
        } catch (e) {
            debugWarn('Could not save browse state:', e);
        }
    },

    load() {
        try {
            const raw = localStorage.getItem(this.key);
            if (!raw) return null;
            return JSON.parse(raw);
        } catch (e) {
            debugWarn('Could not load browse state:', e);
            return null;
        }
    }
};

function applySavedBrowseState() {
    const state = browseStatePreferences.load();
    if (!state) return;

    const nextSort = typeof state.sort === 'string' ? state.sort : 'default';
    const nextCategory = typeof state.category === 'string' ? state.category : 'all';
    const nextCategoryGroup = typeof state.categoryGroup === 'string' ? state.categoryGroup : null;

    if (sortSelect && Array.from(sortSelect.options).some(opt => opt.value === nextSort)) {
        currentSort = nextSort;
        sortSelect.value = nextSort;
    }

    if (nextCategoryGroup && categoryGroups[nextCategoryGroup]) {
        currentCategoryGroup = nextCategoryGroup;
        currentCategory = 'all';
    } else if (categoryList && categoryList.querySelector(`li[data-category="${nextCategory}"]`)) {
        currentCategoryGroup = null;
        currentCategory = nextCategory;
    } else {
        currentCategoryGroup = null;
        currentCategory = 'all';
    }

    isAllToolsCollapsed = false;

    if (categoryList) {
        categoryList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
        const activeCategory = currentCategoryGroup
            ? categoryList.querySelector('li[data-category="all"]')
            : categoryList.querySelector(`li[data-category="${currentCategory}"]`);
        if (activeCategory) activeCategory.classList.add('active');
    }

    const quickCats = document.querySelectorAll('.hero-quick-categories .category-pill');
    if (quickCats && quickCats.length) {
        quickCats.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });

        const quickTarget = currentCategoryGroup || 'all';
        const activeQuick = document.querySelector(`.hero-quick-categories .category-pill[data-group="${quickTarget}"]`) ||
            document.querySelector('.hero-quick-categories .category-pill[data-group="all"]');

        if (activeQuick) {
            activeQuick.classList.add('active');
            activeQuick.setAttribute('aria-pressed', 'true');
        }
    }
}

function applyBrowseStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const availableCategories = categoryList
        ? Array.from(categoryList.querySelectorAll('li')).map(item => item.dataset.category).filter(Boolean)
        : ['all'];

    if (params.has(BROWSE_URL_KEYS.search)) {
        const urlSearchValue = (params.get(BROWSE_URL_KEYS.search) || '').trim();
        currentSearch = urlSearchValue.toLowerCase();
        if (searchInput) {
            searchInput.value = urlSearchValue;
        }
        if (clearSearchBtn) {
            clearSearchBtn.hidden = urlSearchValue.length === 0;
        }
    }

    if (params.has(BROWSE_URL_KEYS.group) || params.has(BROWSE_URL_KEYS.category)) {
        const nextGroup = (params.get(BROWSE_URL_KEYS.group) || '').trim();
        const nextCategory = (params.get(BROWSE_URL_KEYS.category) || '').trim();

        if (nextGroup && categoryGroups[nextGroup]) {
            currentCategoryGroup = nextGroup;
            currentCategory = 'all';
        } else if (nextCategory && availableCategories.includes(nextCategory)) {
            currentCategoryGroup = null;
            currentCategory = nextCategory;
        } else {
            currentCategoryGroup = null;
            currentCategory = 'all';
        }
    }

    if (params.has(BROWSE_URL_KEYS.sort) && sortSelect) {
        const nextSort = (params.get(BROWSE_URL_KEYS.sort) || '').trim();
        const isValidSort = Array.from(sortSelect.options).some(option => option.value === nextSort);
        currentSort = isValidSort ? nextSort : 'default';
        sortSelect.value = currentSort;
    }

    if (params.has(BROWSE_URL_KEYS.view)) {
        const nextView = (params.get(BROWSE_URL_KEYS.view) || '').trim();
        currentView = nextView === 'list' ? 'list' : 'grid';
    }

    if (viewButtons && viewButtons.length) {
        viewButtons.forEach(button => {
            const isActiveView = button.dataset.view === currentView;
            button.classList.toggle('active', isActiveView);
            button.setAttribute('aria-pressed', isActiveView ? 'true' : 'false');
        });
    }

    if (toolsGrid) {
        toolsGrid.classList.toggle('list-view', currentView === 'list');
    }

    if (categoryList) {
        categoryList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
        const activeCategory = currentCategoryGroup
            ? categoryList.querySelector('li[data-category="all"]')
            : categoryList.querySelector(`li[data-category="${currentCategory}"]`);
        if (activeCategory) activeCategory.classList.add('active');
    }

    const quickCats = document.querySelectorAll('.hero-quick-categories .category-pill');
    if (quickCats && quickCats.length) {
        quickCats.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-pressed', 'false');
        });

        const quickTarget = currentCategoryGroup || 'all';
        const activeQuick = document.querySelector(`.hero-quick-categories .category-pill[data-group="${quickTarget}"]`) ||
            document.querySelector('.hero-quick-categories .category-pill[data-group="all"]');

        if (activeQuick) {
            activeQuick.classList.add('active');
            activeQuick.setAttribute('aria-pressed', 'true');
        }
    }
}

function syncBrowseStateToUrl() {
    const params = new URLSearchParams(window.location.search);
    const managedKeys = Object.values(BROWSE_URL_KEYS);
    managedKeys.forEach(key => params.delete(key));

    const searchValue = searchInput ? searchInput.value.trim() : currentSearch;
    if (searchValue) {
        params.set(BROWSE_URL_KEYS.search, searchValue);
    }

    if (currentCategoryGroup) {
        params.set(BROWSE_URL_KEYS.group, currentCategoryGroup);
    } else if (currentCategory && currentCategory !== 'all') {
        params.set(BROWSE_URL_KEYS.category, currentCategory);
    }

    if (currentSort && currentSort !== 'default') {
        params.set(BROWSE_URL_KEYS.sort, currentSort);
    }

    if (currentView === 'list') {
        params.set(BROWSE_URL_KEYS.view, 'list');
    }

    const query = params.toString();
    const nextUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextUrl !== currentUrl) {
        window.history.replaceState(null, '', nextUrl);
    }
}

// Show More preferences storage
const showMorePreferences = {
    descriptions: new Map(), // Store tool name -> expanded state
    tags: new Map(), // Store tool name -> expanded state
    
    save() {
        try {
            localStorage.setItem('showMoreDescriptions', JSON.stringify(Array.from(this.descriptions.entries())));
            localStorage.setItem('showMoreTags', JSON.stringify(Array.from(this.tags.entries())));
        } catch (e) {
            debugWarn('Could not save Show More preferences:', e);
        }
    },
    
    load() {
        try {
            const descriptions = localStorage.getItem('showMoreDescriptions');
            const tags = localStorage.getItem('showMoreTags');
            
            if (descriptions) {
                this.descriptions = new Map(JSON.parse(descriptions));
            }
            if (tags) {
                this.tags = new Map(JSON.parse(tags));
            }
        } catch (e) {
            debugWarn('Could not load Show More preferences:', e);
        }
    },
    
    clear() {
        this.descriptions.clear();
        this.tags.clear();
        this.save();
    }
};

// Load preferences on startup
showMorePreferences.load();

// Initialize stats
function initializeStats() {
    if (totalToolCount) {
        totalToolCount.textContent = aiTools.length;
    }
    
    if (featuredCount) {
        const featuredTools = aiTools.filter(tool => tool.badges && tool.badges.includes('featured'));
        featuredCount.textContent = featuredTools.length;
    }
    if (categoriesCount) {
        const cats = document.querySelectorAll('#categoryList li');
        categoriesCount.textContent = cats ? cats.length - 1 : 0; // exclude "All Tools"
    }
}

// Initialize Hero Section with Featured Tools
function initializeHero() {
    const heroToolIcons = document.getElementById('heroToolIcons');
    const heroCtaBtn = document.getElementById('heroCtaBtn');
    const quickCats = document.querySelectorAll('.hero-quick-categories .category-pill');
    
    // Populate top sponsor icons (highest-paying 3 sponsors; fallback to featured tools)
    if (heroToolIcons) {
        const topSponsors = Array.isArray(window.sponsorPlacements) ? window.sponsorPlacements.slice(0, 3) : [];
        const heroTools = topSponsors.length
            ? topSponsors
            : aiTools.filter(tool => tool.badges && tool.badges.includes('featured')).slice(0, 3);

        heroTools.forEach(tool => {
            const iconWrapper = document.createElement('div');
            iconWrapper.className = 'hero-tool-icon';
            iconWrapper.title = tool.name;
            iconWrapper.setAttribute('aria-label', `View ${tool.name}`);
            
            const icon = document.createElement('img');
            icon.src = tool.logo;
            icon.alt = `${tool.name} logo`;
            icon.width = 56;
            icon.height = 56;
            icon.loading = 'eager'; // Load hero icons immediately for LCP
            icon.decoding = 'async'; // Enable async decode for smoother rendering
            icon.fetchPriority = 'high'; // Prioritize hero images for LCP
            icon.onerror = function() {
                this.onerror = null;
                const domain = getDomain(tool.url);
                const ddg = domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : '';
                if (ddg && this.src !== ddg) {
                    this.onerror = function() {
                        this.onerror = null;
                        this.src = generateToolAvatar(tool.name, Array.isArray(tool.categories) ? tool.categories[0] : '');
                    };
                    this.src = ddg;
                } else {
                    this.src = generateToolAvatar(tool.name, Array.isArray(tool.categories) ? tool.categories[0] : '');
                }
            };
            
            iconWrapper.appendChild(icon);
            
            // Make icon clickable to navigate to tool
            iconWrapper.addEventListener('click', () => {
                openExternalLink(tool.url, {
                    source: topSponsors.length ? 'hero_sponsor_icon' : 'hero_featured_icon',
                    toolName: tool.name,
                    category: Array.isArray(tool.categories) ? tool.categories.join(',') : ''
                });
            });
            
            heroToolIcons.appendChild(iconWrapper);
        });
    }
    
    // Hero CTA button functionality
    if (heroCtaBtn) {
        heroCtaBtn.addEventListener('click', () => {
            // Scroll to the tools grid section
            const toolsSection = document.querySelector('.tools-grid');
            if (toolsSection) {
                toolsSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
            
            // Optional: Add analytics tracking here
            debugLog('Hero CTA clicked - User exploring tools');
        });
    }

    // Quick Categories click handling
    if (quickCats && quickCats.length) {
        quickCats.forEach(btn => {
            btn.addEventListener('click', () => {
                // Toggle active state
                quickCats.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
                // Update filter state
                const group = btn.dataset.group;
                if (!group || group === 'all') {
                    currentCategoryGroup = null;
                    currentCategory = 'all';
                } else {
                    currentCategoryGroup = group;
                    currentCategory = 'all'; // ensure sidebar filter doesn't conflict
                }
                isAllToolsCollapsed = false;

                if (categoryList) {
                    categoryList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
                    const allToolsItem = categoryList.querySelector('li[data-category="all"]');
                    if (allToolsItem) {
                        allToolsItem.classList.add('active');
                    }
                }

                updateCategoryListVisibility();

                // Re-render
                browseStatePreferences.save();
                trackCategorySelection('hero_quick_category');
                renderTools();
                // Scroll to tools grid
                const toolsSection = document.querySelector('.tools-grid');
                if (toolsSection) toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
}

// --- Sponsored Placements (pay more, rank higher) ---
const SPONSORED_COLLAPSED_COUNT = 3;

function createSponsorCard(sponsor, rank) {
    const card = document.createElement('div');
    card.className = 'tool-card sponsor-card';

    // Rank badge (position by monthly bid, highest first)
    const rankBadge = document.createElement('span');
    rankBadge.className = `sponsor-rank sponsor-rank-${rank}`;
    rankBadge.textContent = `#${rank}`;
    rankBadge.title = `Sponsor rank ${rank}`;
    card.appendChild(rankBadge);

    // Create header with logo and name
    const header = document.createElement('div');
    header.className = 'tool-header';

    const logo = document.createElement('img');
    logo.className = 'tool-logo';
    const primaryCat = Array.isArray(sponsor.categories) && sponsor.categories.length ? sponsor.categories[0] : '';
    logo.src = sponsor.logo || generateToolAvatar(sponsor.name, primaryCat);
    logo.alt = `${sponsor.name} logo`;
    logo.loading = 'lazy';
    logo.width = 48;
    logo.height = 48;
    logo.decoding = 'async';
    logo.onerror = function() {
        this.onerror = null;
        const domain = getDomain(sponsor.url);
        const ddg = domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : '';
        if (ddg && this.src !== ddg) {
            this.onerror = function() {
                this.onerror = null;
                this.src = generateToolAvatar(sponsor.name, primaryCat);
            };
            this.src = ddg;
        } else {
            this.src = generateToolAvatar(sponsor.name, primaryCat);
        }
    };
    header.appendChild(logo);

    const name = document.createElement('h3');
    name.className = 'tool-name';
    name.textContent = sponsor.name;
    header.appendChild(name);
    card.appendChild(header);

    // Badges: Sponsored label + tier derived from rank
    const badges = document.createElement('div');
    badges.className = 'tool-badges';

    const sponsoredBadge = document.createElement('span');
    sponsoredBadge.className = 'badge sponsored';
    sponsoredBadge.textContent = 'Sponsored';
    badges.appendChild(sponsoredBadge);

    const tier = (typeof window.sponsorTierForRank === 'function') ? window.sponsorTierForRank(rank) : 'Sponsor';
    const tierBadge = document.createElement('span');
    tierBadge.className = `badge sponsor-tier sponsor-tier-${tier.toLowerCase()}`;
    tierBadge.textContent = tier;
    badges.appendChild(tierBadge);
    card.appendChild(badges);

    // Description
    const desc = document.createElement('p');
    desc.className = 'tool-description';
    desc.textContent = sponsor.description || '';
    card.appendChild(desc);

    // Tags
    if (Array.isArray(sponsor.tags) && sponsor.tags.length) {
        const tags = document.createElement('div');
        tags.className = 'tool-tags';
        sponsor.tags.slice(0, 3).forEach(t => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = t;
            tags.appendChild(tag);
        });
        card.appendChild(tags);
    }

    // Footer with link
    const footer = document.createElement('div');
    footer.className = 'tool-footer';

    const link = document.createElement('a');
    link.className = 'tool-link';
    link.href = sponsor.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Visit Site';
    link.addEventListener('click', () => {
        toollyAnalytics.track('sponsor_link_clicked', {
            source: 'sponsored_section',
            sponsorRank: rank,
            sponsorTier: tier,
            toolName: sponsor.name,
            destinationUrl: sponsor.url
        });
    });
    footer.appendChild(link);
    card.appendChild(footer);

    return card;
}

function initializeSponsoredSection() {
    const sponsoredGrid = document.getElementById('sponsoredGrid');
    if (!sponsoredGrid) return;

    const sponsors = Array.isArray(window.sponsorPlacements) ? window.sponsorPlacements : [];
    const section = document.getElementById('sponsored-section');

    if (!sponsors.length) {
        // No active sponsor placements: hide the section entirely
        if (section) section.style.display = 'none';
        return;
    }

    const loadMoreWrap = document.getElementById('sponsoredLoadMore');
    const seeMoreBtn = document.getElementById('sponsoredSeeMoreBtn');
    let expanded = false;

    const render = () => {
        sponsoredGrid.innerHTML = '';
        const count = expanded ? sponsors.length : Math.min(SPONSORED_COLLAPSED_COUNT, sponsors.length);
        for (let i = 0; i < count; i++) {
            sponsoredGrid.appendChild(createSponsorCard(sponsors[i], i + 1));
        }

        if (loadMoreWrap) {
            const hasMore = sponsors.length > SPONSORED_COLLAPSED_COUNT;
            loadMoreWrap.style.display = hasMore ? 'flex' : 'none';
            if (seeMoreBtn && hasMore) {
                const textEl = seeMoreBtn.querySelector('.load-more-text');
                if (textEl) {
                    textEl.textContent = expanded
                        ? 'Show Less'
                        : `See More Sponsored Tools (${sponsors.length - SPONSORED_COLLAPSED_COUNT} more)`;
                }
                seeMoreBtn.setAttribute('aria-expanded', String(expanded));
            }
        }
    };

    if (seeMoreBtn) {
        seeMoreBtn.addEventListener('click', () => {
            expanded = !expanded;
            render();
            toollyAnalytics.track('sponsored_section_toggle', {
                expanded,
                totalSponsors: sponsors.length
            });
        });
    }

    render();
}

// --- Discovery strip: Trending / Hot Today / Newly Added ---
const DISCOVERY_CHIP_COUNT = 10;

function discoveryList(kind) {
    if (kind === 'new') {
        // Newly added tools live at the end of the data array (append order)
        return aiTools.slice().reverse().filter(t => t && t.name).slice(0, DISCOVERY_CHIP_COUNT);
    }
    if (kind === 'hot') {
        // Hot Today: popular + trending + featured mix, seeded shuffle per day
        const pool = aiTools.filter(t => t && Array.isArray(t.badges) && (
            t.badges.includes('trending') || t.badges.includes('popular') || t.badges.includes('featured')
        ));
        const daySeed = Math.floor(Date.now() / 86400000); // changes daily
        const seeded = pool.map((t, i) => ({ t, k: ((daySeed * 9301 + i * 49297) % 233280) / 233280 }))
            .sort((a, b) => a.k - b.k)
            .map(x => x.t);
        return seeded.slice(0, DISCOVERY_CHIP_COUNT);
    }
    // Trending (default): trending badge first, then popular
    return aiTools.filter(t => t && Array.isArray(t.badges) && (
        t.badges.includes('trending') || t.badges.includes('popular')
    )).slice(0, DISCOVERY_CHIP_COUNT);
}

function initializeDiscoverySection() {
    const grid = document.getElementById('discoveryGrid');
    if (!grid) return;

    const tabs = document.querySelectorAll('.discovery-tab');
    let activeKind = 'trending';

    const render = () => {
        grid.innerHTML = '';
        const tools = discoveryList(activeKind);
        tools.forEach((tool, idx) => {
            const chip = document.createElement('button');
            chip.type = 'button';
            chip.className = 'discovery-chip';
            chip.setAttribute('aria-label', `View details and similar tools for ${tool.name}`);

            const rank = document.createElement('span');
            rank.className = 'discovery-rank';
            rank.textContent = idx + 1;
            chip.appendChild(rank);

            const primaryCat = Array.isArray(tool.categories) && tool.categories.length ? tool.categories[0] : '';
            const img = document.createElement('img');
            img.className = 'discovery-logo';
            img.src = tool.logo || generateToolAvatar(tool.name, primaryCat);
            img.alt = '';
            img.loading = 'lazy';
            img.width = 28;
            img.height = 28;
            img.decoding = 'async';
            img.onerror = function () {
                this.onerror = null;
                const domain = getDomain(tool.url);
                const ddg = domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : '';
                if (ddg && this.src !== ddg) {
                    this.onerror = function() {
                        this.onerror = null;
                        this.src = generateToolAvatar(tool.name, primaryCat);
                    };
                    this.src = ddg;
                } else {
                    this.src = generateToolAvatar(tool.name, primaryCat);
                }
            };
            chip.appendChild(img);

            const label = document.createElement('span');
            label.className = 'discovery-name';
            label.textContent = tool.name;
            chip.appendChild(label);

            chip.addEventListener('click', () => {
                if (window.ToollyToolDetails) window.ToollyToolDetails.open(tool);
                toollyAnalytics.track('discovery_chip_clicked', { list: activeKind, toolName: tool.name });
            });

            grid.appendChild(chip);
        });
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            activeKind = tab.dataset.discovery || 'trending';
            tabs.forEach(t => {
                const isActive = t === tab;
                t.classList.toggle('active', isActive);
                t.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });
            render();
            toollyAnalytics.track('discovery_tab_switched', { list: activeKind });
        });
    });

    render();
}

const SKELETON_COUNT = 12;

function showGridSkeletons() {
    if (!toolsGrid) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < SKELETON_COUNT; i++) {
        const card = document.createElement('div');
        card.className = 'tool-card-skeleton';
        card.innerHTML = `
            <div class="skeleton-header">
                <div class="skeleton-block skeleton-logo"></div>
                <div class="skeleton-header-text">
                    <div class="skeleton-block skeleton-title"></div>
                    <div class="skeleton-block skeleton-line-short"></div>
                </div>
            </div>
            <div class="skeleton-block skeleton-line"></div>
            <div class="skeleton-block skeleton-line"></div>
            <div class="skeleton-block skeleton-line-short"></div>`;
        frag.appendChild(card);
    }
    toolsGrid.innerHTML = '';
    toolsGrid.appendChild(frag);
}

function clearGridSkeletons() {
    if (!toolsGrid) return;
    const skeletons = toolsGrid.querySelectorAll('.tool-card-skeleton');
    skeletons.forEach(s => s.remove());
}

function renderTools(resetPage = true) {
    // Reset pagination when filters change
    if (resetPage) {
        currentPage = 1;
    }

    if (isAllToolsCollapsed && currentCategory === 'all' && !currentCategoryGroup) {
        toolsGrid.innerHTML = '';
        filteredTools = [];
        if (emptyState) emptyState.style.display = 'none';
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
        if (toolCount) {
            toolCount.textContent = 'All tools are hidden. Click All Tools again to show.';
        }
        syncBrowseStateToUrl();
        return;
    }
    
    // Filter
    filteredTools = aiTools.filter(tool => {
        // Group filter has priority if set
        let matchesCategory = true;
        if (currentCategoryGroup && categoryGroups[currentCategoryGroup]) {
            const groupCats = categoryGroups[currentCategoryGroup];
            matchesCategory = Array.isArray(tool.categories) && tool.categories.some(c => groupCats.includes(c));
        } else {
            matchesCategory = currentCategory === 'all' || (Array.isArray(tool.categories) && tool.categories.includes(currentCategory));
        }
        // Extend category matching for composite/alias categories
        if (!matchesCategory) {
            if (currentCategory === 'automation' || (currentCategoryGroup === 'productivity')) {
                // Automation heuristics for broader productivity group
                const tagText = (tool.tags || []).join(' ').toLowerCase();
                const nameDesc = `${tool.name} ${tool.description}`.toLowerCase();
                matchesCategory = /\b(automation|automate|workflow|workflows|rpa|playbook|orchestration)\b/.test(tagText) ||
                                  /\b(automation|automate|workflow|rpa|orchestration)\b/.test(nameDesc);
            }
        }
        const matchesSearch =
            tool.name.toLowerCase().includes(currentSearch) ||
            tool.description.toLowerCase().includes(currentSearch) ||
            (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(currentSearch)));
        const matchesPricing =
            currentPricing === 'all' ||
            (Array.isArray(tool.badges) && tool.badges.includes(currentPricing));
        return matchesCategory && matchesSearch && matchesPricing;
    });

    // Sort
    if (currentSort === 'name') {
        filteredTools.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'featured') {
        filteredTools.sort((a, b) => (b.badges?.includes('featured') ? 1 : 0) - (a.badges?.includes('featured') ? 1 : 0));
    } else if (currentSort === 'trending') {
        filteredTools.sort((a, b) => (b.badges?.includes('trending') ? 1 : 0) - (a.badges?.includes('trending') ? 1 : 0));
    } else if (currentSort === 'new') {
        filteredTools.sort((a, b) => (b.badges?.includes('new') ? 1 : 0) - (a.badges?.includes('new') ? 1 : 0));
    }
    
    // Clear grid only if resetting (also removes any leftover skeletons)
    if (resetPage) {
        toolsGrid.innerHTML = '';
    } else {
        clearGridSkeletons();
    }
    
    // Show/hide empty state
    if (filteredTools.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        
        // Calculate pagination
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredTools.length);
        const toolsToRender = filteredTools.slice(startIndex, endIndex);
        
        // Performance optimization: Batch render tool cards using requestAnimationFrame
        // This prevents blocking the main thread and improves INP (Interaction to Next Paint)
        const batchSize = 10; // Render 10 cards at a time
        let currentIndex = 0;
        
        const renderBatch = () => {
            const fragment = document.createDocumentFragment();
            const batchEnd = Math.min(currentIndex + batchSize, toolsToRender.length);
            
            for (let i = currentIndex; i < batchEnd; i++) {
                const card = createToolCard(toolsToRender[i]);
                // Add staggered animation delay for smooth appearance
                card.style.animationDelay = `${(i % batchSize) * 0.05}s`;
                fragment.appendChild(card);
            }
            
            toolsGrid.appendChild(fragment);
            currentIndex = batchEnd;
            
            if (currentIndex < toolsToRender.length) {
                requestAnimationFrame(renderBatch);
            } else {
                // Batch rendering complete, update UI
                updateLoadMoreButton();
            }
        };
        
        requestAnimationFrame(renderBatch);
    }
    
    // Update count
    if (toolCount) {
        const displayedCount = Math.min(currentPage * itemsPerPage, filteredTools.length);
        toolCount.textContent = `Showing ${displayedCount} of ${filteredTools.length} tool${filteredTools.length !== 1 ? 's' : ''}`;
    }

    syncBrowseStateToUrl();
}

function updateLoadMoreButton() {
    if (!loadMoreContainer || !loadMoreBtn || !loadMoreInfo) return;
    
    const totalDisplayed = currentPage * itemsPerPage;
    const hasMore = totalDisplayed < filteredTools.length;
    
    if (hasMore) {
        loadMoreContainer.style.display = 'flex';
        const remaining = filteredTools.length - totalDisplayed;
        const nextBatch = Math.min(itemsPerPage, remaining);
        loadMoreInfo.textContent = `${remaining} more tool${remaining !== 1 ? 's' : ''} available`;
    } else {
        loadMoreContainer.style.display = 'none';
    }
}

function loadMoreTools() {
    // Prevent double-loading
    if (isLoading) {
        debugWarn('Load already in progress');
        return;
    }
    
    const totalDisplayed = currentPage * itemsPerPage;
    if (totalDisplayed >= filteredTools.length) {
        debugInfo('All tools already loaded');
        return;
    }
    
    try {
        // Set loading state
        isLoading = true;
        loadMoreBtn.disabled = true;
        loadMoreContainer.classList.add('loading');
        
        // Show spinner, hide text
        const loadText = loadMoreBtn.querySelector('.load-more-text');
        const loadSpinner = loadMoreBtn.querySelector('.load-more-spinner');
        if (loadText) loadText.style.display = 'none';
        if (loadSpinner) loadSpinner.style.display = 'flex';
        
        // Store scroll position before loading
        const scrollY = window.scrollY;
        
        // Add visual feedback to button
        loadMoreBtn.setAttribute('aria-busy', 'true');
        loadMoreBtn.setAttribute('aria-label', 'Loading more tools...');
        
        try {
            currentPage++;
            
            // Render next page without resetting
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = Math.min(startIndex + itemsPerPage, filteredTools.length);
            const toolsToRender = filteredTools.slice(startIndex, endIndex);
            
            // Validate data
            if (!toolsToRender || toolsToRender.length === 0) {
                throw new Error('No tools to render');
            }
            
            // Batch render
            const batchSize = 10;
            let currentIndex = 0;
            
            const renderBatch = () => {
                try {
                    const fragment = document.createDocumentFragment();
                    const batchEnd = Math.min(currentIndex + batchSize, toolsToRender.length);
                    
                    for (let i = currentIndex; i < batchEnd; i++) {
                        const card = createToolCard(toolsToRender[i]);
                        // Add staggered animation delay for smooth appearance
                        card.style.animationDelay = `${(i % batchSize) * 0.05}s`;
                        fragment.appendChild(card);
                    }
                    
                    toolsGrid.appendChild(fragment);
                    currentIndex = batchEnd;
                    
                    if (currentIndex < toolsToRender.length) {
                        requestAnimationFrame(renderBatch);
                    } else {
                        // Complete loading successfully
                        completeLoading(scrollY);
                    }
                } catch (error) {
                    console.error('Error rendering batch:', error);
                    handleLoadingError(error, scrollY);
                }
            };
            
            requestAnimationFrame(renderBatch);
        } catch (error) {
            console.error('Error preparing tools:', error);
            handleLoadingError(error, scrollY);
        }
    } catch (error) {
        console.error('Error initiating load:', error);
        handleLoadingError(error, window.scrollY);
    }
}

// Helper function to complete loading successfully
function completeLoading(scrollY) {
    isLoading = false;
    loadMoreBtn.disabled = false;
    loadMoreContainer.classList.remove('loading');
    
    const loadText = loadMoreBtn.querySelector('.load-more-text');
    const loadSpinner = loadMoreBtn.querySelector('.load-more-spinner');
    if (loadText) loadText.style.display = 'inline';
    if (loadSpinner) loadSpinner.style.display = 'none';
    
    // Reset ARIA attributes
    loadMoreBtn.setAttribute('aria-busy', 'false');
    loadMoreBtn.setAttribute('aria-label', 'Load more tools');
    
    // Show success feedback briefly
    loadMoreContainer.classList.add('success');
    setTimeout(() => {
        loadMoreContainer.classList.remove('success');
    }, 2000);
    
    // Update UI
    updateLoadMoreButton();
    
    // Update count
    if (toolCount) {
        const displayedCount = Math.min(currentPage * itemsPerPage, filteredTools.length);
        toolCount.textContent = `Showing ${displayedCount} of ${filteredTools.length} tool${filteredTools.length !== 1 ? 's' : ''}`;
    }
    
    // Maintain scroll position (prevent jump)
    window.scrollTo(0, scrollY);
    
    // Log success
    debugInfo(`Successfully loaded ${itemsPerPage} more tools`);
}

// Helper function to handle loading errors
function handleLoadingError(error, scrollY) {
    // Reset loading state
    isLoading = false;
    loadMoreBtn.disabled = false;
    loadMoreContainer.classList.remove('loading');
    
    const loadText = loadMoreBtn.querySelector('.load-more-text');
    const loadSpinner = loadMoreBtn.querySelector('.load-more-spinner');
    if (loadText) {
        loadText.style.display = 'inline';
        loadText.textContent = 'Try Again';
    }
    if (loadSpinner) loadSpinner.style.display = 'none';
    
    // Reset ARIA attributes
    loadMoreBtn.setAttribute('aria-busy', 'false');
    loadMoreBtn.setAttribute('aria-label', 'Error loading tools - click to try again');
    
    // Maintain scroll position
    window.scrollTo(0, scrollY);
    
    // Show error feedback
    if (loadMoreInfo) {
        loadMoreInfo.textContent = '⚠️ Error loading tools. Please try again.';
        loadMoreInfo.style.color = 'var(--badge-paid)'; // Red color for error
        
        // Reset error message after 5 seconds
        setTimeout(() => {
            if (loadMoreInfo) {
                loadMoreInfo.style.color = '';
                updateLoadMoreButton(); // Restore normal message
            }
            if (loadText) {
                loadText.textContent = 'Load More Tools';
            }
        }, 5000);
    }
    
    // Log error for debugging
    console.error('Load More Error:', error);
}


// Helper: Extract domain hostname from URL safely
function getDomain(url) {
    try {
        if (!url) return '';
        const u = new URL(url.startsWith('http') ? url : 'https://' + url);
        return u.hostname.replace(/^www\./, '');
    } catch (_) {
        return '';
    }
}

// Helper: Generate crisp branded SVG monogram data URI for tools without external logos
function generateToolAvatar(name, category) {
    const cleanName = (name || 'AI').trim();
    const words = cleanName.split(/[\s\-_.]+/).filter(Boolean);
    let initials = 'AI';
    if (words.length >= 2) {
        initials = (words[0][0] + words[1][0]).toUpperCase();
    } else if (words.length === 1) {
        initials = words[0].slice(0, 2).toUpperCase();
    }

    const categoryGradients = {
        'chatbots': ['#3B82F6', '#1D4ED8'],
        'nlp': ['#6366F1', '#4338CA'],
        'coding': ['#10B981', '#047857'],
        'image': ['#EC4899', '#BE185D'],
        'video': ['#8B5CF6', '#6D28D9'],
        'audio': ['#F59E0B', '#B45309'],
        'productivity': ['#06B6D4', '#0E7490'],
        'education': ['#14B8A6', '#0F766E'],
        'data-science': ['#84CC16', '#4D7C0F'],
        'business': ['#2563EB', '#1E40AF'],
        'design': ['#F43F5E', '#BE123C'],
        'marketing': ['#F97316', '#C2410C'],
        'writing': ['#A855F7', '#7E22CE']
    };

    const cat = (category || '').toLowerCase();
    const colors = categoryGradients[cat] || ['#6366F1', '#4F46E5'];
    const id = 'g_' + initials.replace(/[^A-Z0-9]/g, '') + '_' + Math.abs((name || '').split('').reduce((a,c)=>((a<<5)-a)+c.charCodeAt(0)|0, 0) % 1000);

    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">' +
        '<defs><linearGradient id="' + id + '" x1="0%" y1="0%" x2="100%" y2="100%">' +
        '<stop offset="0%" stop-color="' + colors[0] + '"/>' +
        '<stop offset="100%" stop-color="' + colors[1] + '"/>' +
        '</linearGradient></defs>' +
        '<rect width="64" height="64" rx="14" fill="url(#' + id + ')"/>' +
        '<text x="32" y="41" font-family="-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Helvetica, sans-serif" font-size="24" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">' + initials + '</text>' +
        '</svg>';

    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    
    // Create header with logo and name
    const header = document.createElement('div');
    header.className = 'tool-header';
    
    const logo = document.createElement('img');
    logo.className = 'tool-logo';
    const primaryCat = Array.isArray(tool.categories) && tool.categories.length ? tool.categories[0] : '';
    logo.src = tool.logo || generateToolAvatar(tool.name, primaryCat);
    logo.alt = `${tool.name} logo`;
    logo.loading = 'lazy'; // Optimize LCP: lazy load below-the-fold images
    logo.width = 48; // Prevent CLS: explicit dimensions
    logo.height = 48;
    logo.decoding = 'async'; // Enable async image decode for better performance
    logo.fetchPriority = 'low'; // Deprioritize below-fold images
    logo.onerror = function() {
        this.onerror = null;
        const domain = getDomain(tool.url);
        const ddg = domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : '';
        if (ddg && this.src !== ddg) {
            this.onerror = function() {
                this.onerror = function() {
                    this.src = 'logo/favicon.svg';
                    this.onerror = null;
                };
                this.src = generateToolAvatar(tool.name, primaryCat);
            };
            this.src = ddg;
        } else {
            this.onerror = function() {
                this.src = 'logo/favicon.svg';
                this.onerror = null;
            };
            this.src = generateToolAvatar(tool.name, primaryCat);
        }
        if (window.imageLoadErrors) {
            window.imageLoadErrors.push({ tool: tool.name, url: tool.logo, timestamp: Date.now() });
        }
    };
    logo.onload = function() {
        // Track successful image loads for performance monitoring
        if (window.imageLoadSuccess) {
            window.imageLoadSuccess++;
        }
    };
    header.appendChild(logo);
    
    const name = document.createElement('h3');
    name.className = 'tool-name';
    name.textContent = tool.name;
    header.appendChild(name);
    
    // For list view, we'll structure differently
    if (currentView === 'list') {
        card.appendChild(header);
        
        const content = document.createElement('div');
        content.className = 'tool-content';
        
        // Badges
        if (tool.badges && tool.badges.length) {
            const badges = document.createElement('div');
            badges.className = 'tool-badges';
            tool.badges.forEach(badge => {
                const badgeEl = document.createElement('span');
                badgeEl.className = `badge ${badge}`;
                badgeEl.textContent = badge.charAt(0).toUpperCase() + badge.slice(1);
                badges.appendChild(badgeEl);
            });
            content.appendChild(badges);
        }
        
        // Description
        const desc = document.createElement('p');
        desc.className = 'tool-description';
        desc.textContent = tool.description;
        content.appendChild(desc);
        
        // Tags container
        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tags-container';
        
        // Category tags
        if (tool.categories && tool.categories.length) {
            const tags = document.createElement('div');
            tags.className = 'tool-tags';
            tool.categories.forEach(cat => {
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = categoryLabel(cat);
                tags.appendChild(tag);
            });
            tagsContainer.appendChild(tags);
        }
        
        // Regular tags
        if (tool.tags && tool.tags.length) {
            const tags = document.createElement('div');
            tags.className = 'tool-tags';
            tool.tags.slice(0, 3).forEach(t => { // Limit to 3 tags in list view
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = t;
                tags.appendChild(tag);
            });
            tagsContainer.appendChild(tags);
        }
        
        content.appendChild(tagsContainer);
        
        // Footer with link
        const footer = document.createElement('div');
        footer.className = 'tool-footer';
        
        const link = document.createElement('a');
        link.className = 'tool-link';
        link.href = tool.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Visit Site';
        link.addEventListener('click', () => {
            toollyAnalytics.track('tool_external_link_clicked', {
                source: 'catalog_list',
                toolName: tool.name,
                category: Array.isArray(tool.categories) ? tool.categories.join(',') : '',
                destinationUrl: tool.url
            });
        });
        footer.appendChild(link);

        const detailsBtn = document.createElement('button');
        detailsBtn.type = 'button';
        detailsBtn.className = 'tool-details-btn';
        detailsBtn.innerHTML = '<i class="fas fa-info-circle" aria-hidden="true"></i> Details';
        detailsBtn.setAttribute('aria-label', `View details and similar tools for ${tool.name}`);
        detailsBtn.addEventListener('click', () => {
            if (window.ToollyToolDetails) window.ToollyToolDetails.open(tool);
        });
        footer.appendChild(detailsBtn);
        
        content.appendChild(footer);
        card.appendChild(content);
    } else {
        // Grid view (original layout)
        card.appendChild(header);
        
        // Badges
        if (tool.badges && tool.badges.length) {
            const badges = document.createElement('div');
            badges.className = 'tool-badges';
            tool.badges.forEach(badge => {
                const badgeEl = document.createElement('span');
                badgeEl.className = `badge ${badge}`;
                badgeEl.textContent = badge.charAt(0).toUpperCase() + badge.slice(1);
                badges.appendChild(badgeEl);
            });
            card.appendChild(badges);
        }
        
        // Description with Show More
        const descContainer = document.createElement('div');
        descContainer.className = 'tool-description-container';
        
        const desc = document.createElement('p');
        desc.className = 'tool-description';
        const isLongDescription = tool.description.length > 120;
        
        // Check if user previously expanded this description
        const wasExpanded = showMorePreferences.descriptions.get(tool.name);
        
        if (isLongDescription) {
            desc.setAttribute('data-full-text', tool.description);
            
            if (wasExpanded) {
                desc.textContent = tool.description;
            } else {
                desc.classList.add('truncated');
                desc.textContent = tool.description.substring(0, 120) + '...';
            }
        } else {
            desc.textContent = tool.description;
        }
        
        descContainer.appendChild(desc);
        
        if (isLongDescription) {
            const showMoreBtn = document.createElement('button');
            showMoreBtn.className = 'show-more-btn';
            showMoreBtn.textContent = wasExpanded ? 'Show Less' : 'Show More';
            showMoreBtn.setAttribute('aria-expanded', wasExpanded ? 'true' : 'false');
            showMoreBtn.setAttribute('aria-label', wasExpanded ? 'Show less description' : 'Show full description');
            
            showMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleDescription(desc, showMoreBtn);
            });
            
            descContainer.appendChild(showMoreBtn);
        }
        
        card.appendChild(descContainer);
        
        // Category tags
        if (tool.categories && tool.categories.length) {
            const tags = document.createElement('div');
            tags.className = 'tool-tags';
            tool.categories.forEach(cat => {
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = categoryLabel(cat);
                tags.appendChild(tag);
            });
            card.appendChild(tags);
        }
        
        // Regular tags with Show More
        if (tool.tags && tool.tags.length) {
            const tagsContainer = document.createElement('div');
            tagsContainer.className = 'tool-tags-container';
            
            const tags = document.createElement('div');
            tags.className = 'tool-tags';
            const maxVisibleTags = 3;
            const hasMoreTags = tool.tags.length > maxVisibleTags;
            
            // Check if user previously expanded tags
            const tagsWereExpanded = showMorePreferences.tags.get(tool.name);
            
            tool.tags.slice(0, maxVisibleTags).forEach(t => {
                const tag = document.createElement('span');
                tag.className = 'tag';
                tag.textContent = t;
                tags.appendChild(tag);
            });
            
            if (hasMoreTags) {
                const hiddenTags = document.createElement('div');
                hiddenTags.className = 'tool-tags hidden-tags';
                hiddenTags.style.display = tagsWereExpanded ? 'flex' : 'none';
                if (!tagsWereExpanded) {
                    hiddenTags.classList.add('collapsed');
                }
                
                tool.tags.slice(maxVisibleTags).forEach(t => {
                    const tag = document.createElement('span');
                    tag.className = 'tag';
                    tag.textContent = t;
                    hiddenTags.appendChild(tag);
                });
                
                const showMoreTagsBtn = document.createElement('button');
                showMoreTagsBtn.className = 'show-more-tags-btn';
                showMoreTagsBtn.textContent = tagsWereExpanded ? 'Show Less' : `+${tool.tags.length - maxVisibleTags} more`;
                showMoreTagsBtn.setAttribute('aria-expanded', tagsWereExpanded ? 'true' : 'false');
                showMoreTagsBtn.setAttribute('aria-label', tagsWereExpanded 
                    ? 'Show fewer tags' 
                    : `Show ${tool.tags.length - maxVisibleTags} more tags`);
                
                showMoreTagsBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    toggleTags(hiddenTags, showMoreTagsBtn, tool.tags.length - maxVisibleTags);
                });
                
                tags.appendChild(showMoreTagsBtn);
                tagsContainer.appendChild(tags);
                tagsContainer.appendChild(hiddenTags);
            } else {
                tagsContainer.appendChild(tags);
            }
            
            card.appendChild(tagsContainer);
        }
        
        // Link
        const link = document.createElement('a');
        link.className = 'tool-link';
        link.href = tool.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Visit Site';
        link.addEventListener('click', () => {
            toollyAnalytics.track('tool_external_link_clicked', {
                source: 'catalog_grid',
                toolName: tool.name,
                category: Array.isArray(tool.categories) ? tool.categories.join(',') : '',
                destinationUrl: tool.url
            });
        });
        card.appendChild(link);

        // Details button opens the per-tool modal with similar tools
        const detailsBtn = document.createElement('button');
        detailsBtn.type = 'button';
        detailsBtn.className = 'tool-details-btn';
        detailsBtn.innerHTML = '<i class="fas fa-info-circle" aria-hidden="true"></i> Details';
        detailsBtn.setAttribute('aria-label', `View details and similar tools for ${tool.name}`);
        detailsBtn.addEventListener('click', () => {
            if (window.ToollyToolDetails) window.ToollyToolDetails.open(tool);
        });
        card.appendChild(detailsBtn);
    }
    
    return card;
}

// Show More functionality helpers
function toggleDescription(descElement, button) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const fullText = descElement.getAttribute('data-full-text');
    const toolCard = descElement.closest('.tool-card');
    const toolName = toolCard.querySelector('.tool-name')?.textContent || '';
    
    if (isExpanded) {
        // Collapse
        descElement.textContent = fullText.substring(0, 120) + '...';
        descElement.classList.add('truncated');
        button.textContent = 'Show More';
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Show full description');
        showMorePreferences.descriptions.set(toolName, false);
    } else {
        // Expand
        descElement.textContent = fullText;
        descElement.classList.remove('truncated');
        button.textContent = 'Show Less';
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Show less description');
        showMorePreferences.descriptions.set(toolName, true);
    }
    
    // Save preferences
    showMorePreferences.save();
}

function toggleTags(hiddenTagsElement, button, hiddenCount) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const toolCard = button.closest('.tool-card');
    const toolName = toolCard.querySelector('.tool-name')?.textContent || '';
    
    if (isExpanded) {
        // Collapse
        hiddenTagsElement.style.display = 'none';
        hiddenTagsElement.classList.add('collapsed');
        button.textContent = `+${hiddenCount} more`;
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', `Show ${hiddenCount} more tags`);
        showMorePreferences.tags.set(toolName, false);
    } else {
        // Expand
        hiddenTagsElement.style.display = 'flex';
        hiddenTagsElement.classList.remove('collapsed');
        button.textContent = 'Show Less';
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-label', 'Show fewer tags');
        showMorePreferences.tags.set(toolName, true);
    }
    
    // Save preferences
    showMorePreferences.save();
}

// Image optimization utilities
const ImageOptimizer = {
    // Check WebP support (cached result)
    supportsWebP: null,
    
    async checkWebPSupport() {
        if (this.supportsWebP !== null) return this.supportsWebP;
        
        return new Promise((resolve) => {
            const webP = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
            const img = new Image();
            img.onload = img.onerror = () => {
                this.supportsWebP = img.height === 1;
                resolve(this.supportsWebP);
            };
            img.src = webP;
        });
    },
    
    // Convert external image URLs to optimized format if possible
    optimizeUrl(url) {
        if (!url) return url;
        
        // For external CDN images, append optimization parameters
        // (This works with services like Cloudinary, imgix, etc.)
        try {
            const urlObj = new URL(url);
            
            // Skip local images
            if (urlObj.hostname === window.location.hostname) {
                return url;
            }
            
            // Add optimization hints for known CDN services
            if (urlObj.hostname.includes('cloudinary.com')) {
                // Cloudinary: add quality and format transforms
                return url.replace('/upload/', '/upload/q_auto,f_auto,w_64,h_64/');
            }
            
            // For other external images, return as-is
            // In production, consider using an image proxy service
            return url;
        } catch (e) {
            return url;
        }
    },
    
    // Generate a data URL placeholder for smoother loading
    generatePlaceholder(width, height) {
        // 1x1 transparent GIF
        return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    },
    
    // Preload critical images
    preloadImage(url, priority = 'low') {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        link.fetchPriority = priority;
        document.head.appendChild(link);
    }
};

// Initialize WebP detection on page load
ImageOptimizer.checkWebPSupport();

function categoryLabel(cat) {
    switch (cat) {
        case 'nlp': return 'Natural Language Processing';
        case 'vision': return 'Computer Vision';
        case 'audio': return 'Audio/Video';
        case 'design': return 'Design';
        case 'coding': return 'Developer Tools';
        case 'automation': return 'Automation & Workflows';
        case 'productivity': return 'Productivity';
        case 'research': return 'Research';
        case 'life-assistant': return 'Life Assistant';
        case 'marketing': return 'Marketing';
        case 'business': return 'Business';
        case 'video': return 'Video Generator';
        case 'education': return 'Education';
        case 'data-science': return 'Data Science & Analytics';
        default: return cat;
    }
}

// Counts per category, shown in the sidebar so users can gauge directory depth
function refreshCategoryCounts() {
    if (!categoryList) return;
    const counts = { all: aiTools.length };
    aiTools.forEach(tool => {
        (Array.isArray(tool.categories) ? tool.categories : []).forEach(cat => {
            counts[cat] = (counts[cat] || 0) + 1;
        });
    });
    categoryList.querySelectorAll('li').forEach(item => {
        const cat = item.dataset.category;
        const count = counts[cat];
        if (typeof count !== 'number') return;
        let badge = item.querySelector('.category-count');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'category-count';
            item.appendChild(badge);
        }
        badge.textContent = count;
    });
}

function updateCategoryListVisibility() {
    if (!categoryList) return;

    // Keep all category items visible in sidebar so users can freely switch categories
    const categoryItems = categoryList.querySelectorAll('li');
    categoryItems.forEach(item => {
        item.style.display = '';
        const cat = item.dataset.category;
        const isActive = (currentCategoryGroup === null && currentCategory === cat) ||
                         (currentCategoryGroup === null && (!currentCategory || currentCategory === 'all') && cat === 'all');
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
}

function resetAllFilters() {
    currentCategory = 'all';
    currentCategoryGroup = null;
    currentSort = 'default';
    currentSearch = '';
    currentPricing = 'all';
    isAllToolsCollapsed = false;

    if (searchInput) {
        searchInput.value = '';
    }

    if (clearSearchBtn) {
        clearSearchBtn.hidden = true;
    }

    if (sortSelect) {
        sortSelect.value = 'default';
    }

    if (pricingSelect) {
        pricingSelect.value = 'all';
    }

    if (categoryList) {
        categoryList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
        const allToolsItem = categoryList.querySelector('li[data-category="all"]');
        if (allToolsItem) allToolsItem.classList.add('active');
    }

    const quickCats = document.querySelectorAll('.hero-quick-categories .category-pill');
    if (quickCats && quickCats.length) {
        quickCats.forEach(btn => {
            const isAll = btn.dataset.group === 'all';
            btn.classList.toggle('active', isAll);
            btn.setAttribute('aria-pressed', isAll ? 'true' : 'false');
        });
    }

    updateCategoryListVisibility();
    browseStatePreferences.save();
    renderTools();
}

function trackCategorySelection(source) {
    toollyAnalytics.track('category_selected', {
        source,
        category: currentCategory,
        categoryGroup: currentCategoryGroup || '',
        sort: currentSort
    });
}

function trackSearchInteraction(rawSearch) {
    const query = (rawSearch || '').trim().toLowerCase();
    if (query.length < 2) return;
    if (query === lastTrackedSearchQuery) return;

    lastTrackedSearchQuery = query;
    toollyAnalytics.track('search_used', {
        query,
        resultsCount: Array.isArray(filteredTools) ? filteredTools.length : 0,
        category: currentCategory,
        categoryGroup: currentCategoryGroup || ''
    });
}

function setupCategoryListKeyboardAccess() {
    if (!categoryList) return;

    categoryList.querySelectorAll('li').forEach(item => {
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        if (!item.getAttribute('aria-label')) {
            item.setAttribute('aria-label', `Filter by ${item.textContent.trim()}`);
        }
    });
}

setupCategoryListKeyboardAccess();

// Sidebar category click
if (categoryList) {
    categoryList.addEventListener('click', e => {
        const clickedItem = e.target.closest('li');
        if (clickedItem && categoryList.contains(clickedItem)) {
            const clickedCategory = clickedItem.dataset.category;
            const isAllToolsItem = clickedCategory === 'all';
            const wasActive = clickedItem.classList.contains('active');

            if (isAllToolsItem && wasActive && !currentCategoryGroup) {
                isAllToolsCollapsed = !isAllToolsCollapsed;
                toollyAnalytics.track('all_tools_toggled', { collapsed: isAllToolsCollapsed });
                updateCategoryListVisibility();
                renderTools();
                return;
            }

            categoryList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
            clickedItem.classList.add('active');
            currentCategory = clickedCategory;
            currentCategoryGroup = null;
            isAllToolsCollapsed = false;
            updateCategoryListVisibility();
            browseStatePreferences.save();
            trackCategorySelection('sidebar_category');
            renderTools();
        }
    });

    categoryList.addEventListener('keydown', e => {
        const focusedItem = e.target.closest('li');
        if (!focusedItem || !categoryList.contains(focusedItem)) return;

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            focusedItem.click();
        }
    });
}
// Search
if (searchInput) {
    let searchDebounceTimer;

    const updateClearSearchVisibility = () => {
        if (!clearSearchBtn) return;
        clearSearchBtn.hidden = searchInput.value.trim().length === 0;
    };

    updateClearSearchVisibility();

    searchInput.addEventListener('input', e => {
        clearTimeout(searchDebounceTimer);
        const rawSearch = e.target.value;
        const nextSearch = rawSearch.toLowerCase();
        updateClearSearchVisibility();
        searchDebounceTimer = setTimeout(() => {
            currentSearch = nextSearch;
            renderTools();
            trackSearchInteraction(rawSearch);
        }, 120);
    });

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            clearTimeout(searchDebounceTimer);
            searchInput.value = '';
            currentSearch = '';
            lastTrackedSearchQuery = '';
            updateClearSearchVisibility();
            toollyAnalytics.track('search_cleared', { source: 'clear_button' });
            renderTools();
            searchInput.focus();
        });
    }
}
// Sort
if (sortSelect) {
    sortSelect.addEventListener('change', e => {
        currentSort = e.target.value;
        browseStatePreferences.save();
        renderTools();
    });
}

// Pricing filter
if (pricingSelect) {
    pricingSelect.addEventListener('change', e => {
        currentPricing = e.target.value;
        toollyAnalytics.track('pricing_filter_changed', { pricing: currentPricing });
        renderTools();
    });
}

if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
        resetAllFilters();
        if (searchInput) searchInput.focus();
    });
}

// Load More Button - Click-only (no auto-loading)
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadMoreTools();
    });
}

// Keyboard shortcuts for accessibility
document.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const activeTag = activeEl ? activeEl.tagName : '';
    const isTypingContext = !!activeEl && (
        activeEl.isContentEditable ||
        activeTag === 'INPUT' ||
        activeTag === 'TEXTAREA' ||
        activeTag === 'SELECT'
    );

    // Escape closes open modal or mobile sidebar.
    if (e.key === 'Escape') {
        const modalEl = document.getElementById('tool-modal');
        const sidebarEl = document.getElementById('sidebar');
        const isModalOpen = !!modalEl && modalEl.style.display === 'flex';
        const isSidebarOpen = !!sidebarEl && sidebarEl.classList.contains('open');

        if (isModalOpen && typeof closeModal === 'function') {
            e.preventDefault();
            closeModal();
            return;
        }

        if (isSidebarOpen) {
            e.preventDefault();
            closeSidebar();
            if (sidebarToggle) {
                sidebarToggle.focus();
            }
            return;
        }
    }

    // '/' focuses search when user is not typing in an editable field
    if (
        e.key === '/' &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey &&
        !e.shiftKey &&
        !e.repeat &&
        !isTypingContext &&
        searchInput
    ) {
        e.preventDefault();
        searchInput.focus();
        return;
    }

    // Ctrl/Cmd + M to load more tools
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        if (loadMoreBtn && !loadMoreBtn.disabled && loadMoreContainer.style.display !== 'none') {
            loadMoreTools();
        }
    }
});

// Back to top and mobile icons visibility control
let lastScrollTop = 0;
let scrollDirection = 'up';
const sidebarToggleBtn = document.getElementById('sidebarToggle');
const themeToggleBtn = document.getElementById('themeToggle');

window.addEventListener('scroll', () => {
    // Determine scroll direction
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
    scrollDirection = currentScrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    
    // Handle back-to-top button visibility based on scroll position
    if (currentScrollTop > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
    
    // Handle mobile icons visibility based on scroll direction
    if (window.innerWidth <= 768) { // Only apply on mobile screens
        if (scrollDirection === 'down' && currentScrollTop > 100) {
            // Hide icons when scrolling down
            sidebarToggleBtn.style.transform = 'translateY(-100px)';
            backToTopButton.style.transform = 'translateY(100px)';
            themeToggleBtn.style.transform = 'translateY(100px)';
        } else {
            // Show icons when scrolling up
            sidebarToggleBtn.style.transform = 'translateY(0)';
            backToTopButton.style.transform = 'translateY(0)';
            themeToggleBtn.style.transform = 'translateY(0)';
        }
    } else {
        // Reset transforms on desktop
        sidebarToggleBtn.style.transform = '';
        backToTopButton.style.transform = '';
        themeToggleBtn.style.transform = '';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Sidebar toggle for mobile
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (sidebarToggle) {
        sidebarToggle.setAttribute('aria-expanded', 'true');
        sidebarToggle.setAttribute('aria-label', 'Close sidebar');
    }
}
function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (sidebarToggle) {
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarToggle.setAttribute('aria-label', 'Open sidebar');
    }
}
if (sidebarToggle) {
    sidebarToggle.setAttribute('aria-expanded', 'false');
    sidebarToggle.setAttribute('aria-controls', 'sidebar');
    sidebarToggle.addEventListener('click', openSidebar);
}
if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}
// Also close sidebar when a category is clicked (on mobile)
if (categoryList) {
    categoryList.addEventListener('click', e => {
        if (window.innerWidth <= 1024) closeSidebar();
    });
}

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Theme toggle click handler with enhanced transitions
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Add transition class for smooth theme switching
    document.documentElement.classList.add('theme-transitioning');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Remove transition class after animation completes
    setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
    }, 300);
});

function updateThemeIcon(theme) {
    // Add a subtle animation to the icon change
    themeIcon.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeIcon.style.transform = 'rotate(0deg)';
    }, 150);
}

// View toggle functionality
if (viewButtons) {
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            viewButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            
            // Update view
            currentView = btn.dataset.view;
            
            // Update grid class
            if (currentView === 'list') {
                toolsGrid.classList.add('list-view');
            } else {
                toolsGrid.classList.remove('list-view');
            }
            
            // Re-render tools
            renderTools();
        });
    });
}

// Image performance monitoring
window.imageLoadErrors = [];
window.imageLoadSuccess = 0;
window.imageLoadMetrics = {
    start: Date.now(),
    firstImageLoad: null,
    allImagesLoaded: false
};

// Track first image load for performance metrics
window.addEventListener('load', () => {
    window.imageLoadMetrics.allImagesLoaded = true;
    window.imageLoadMetrics.duration = Date.now() - window.imageLoadMetrics.start;
    
    // Log image loading performance
    debugLog('[Image Perf] Total loaded:', window.imageLoadSuccess);
    debugLog('[Image Perf] Errors:', window.imageLoadErrors.length);
    debugLog('[Image Perf] Load duration:', window.imageLoadMetrics.duration + 'ms');
    
    if (window.imageLoadErrors.length > 0) {
        debugWarn('[Image Perf] Failed images:', window.imageLoadErrors);
    }
});

// Loading animation and robust boot
function boot() {
    if (boot.hasRun) return; // idempotent
    boot.hasRun = true;
    // Hide loading overlay after a short delay
    setTimeout(() => {
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }
    }, 300);
    initializeStats();
    initializeHero(); // Initialize hero section
    initializeSponsoredSection(); // Render sponsored placements
    initializeDiscoverySection(); // Render trending/hot/new discovery strip
    refreshCategoryCounts(); // Show per-category tool counts in sidebar
    applySavedBrowseState();
    applyBrowseStateFromUrl();
    isAllToolsCollapsed = false;
    updateCategoryListVisibility();
    showGridSkeletons();
    renderTools();
    toollyAnalytics.track('page_view', { pageType: 'tool_directory_home' });
}

// Prefer DOMContentLoaded for earlier render, with load as fallback
document.addEventListener('DOMContentLoaded', boot, { once: true });
window.addEventListener('load', boot, { once: true });
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    // In case script runs after DOMContentLoaded
    setTimeout(boot, 0);
}

// --- My Tools Feature ---
const toolsListEl = document.getElementById('tools-list');
const editBtn = document.getElementById('edit-tools-btn');
const modal = document.getElementById('tool-modal');
const closeModalBtn = document.getElementById('close-modal');
const toolForm = document.getElementById('tool-form');
const modalTitle = document.getElementById('modal-title');
// New elements for auto logo fetch
const fetchLogoBtn = document.getElementById('fetch-logo-btn');
const iconPreview = document.getElementById('icon-preview');
const iconInputEl = document.getElementById('tool-icon');
const linkInputEl = document.getElementById('tool-link');
const toolFormStatus = document.getElementById('toolFormStatus');

function setToolFormStatus(message, type = 'error') {
    if (!toolFormStatus) return;
    toolFormStatus.textContent = message || '';
    toolFormStatus.hidden = !message;
    toolFormStatus.classList.remove('is-error', 'is-success', 'is-warning');
    if (message) {
        if (type === 'success') {
            toolFormStatus.classList.add('is-success');
        } else if (type === 'warning') {
            toolFormStatus.classList.add('is-warning');
        } else {
            toolFormStatus.classList.add('is-error');
        }
    }
}

function normalizeCustomToolUrl(rawUrl) {
    const value = (rawUrl || '').trim();
    if (!value) return '';
    if (/^[a-z][a-z0-9+.-]*:\/\//i.test(value)) return value;
    if (value.startsWith('//')) return `https:${value}`;
    return `https://${value}`;
}

function hasDuplicateCustomToolUrl(candidateUrl) {
    if (!candidateUrl) return false;
    const normalizedCandidate = normalizeCustomToolUrl(candidateUrl).toLowerCase();
    return myTools.some((tool, idx) => (
        idx !== editIndex &&
        normalizeCustomToolUrl(tool.link).toLowerCase() === normalizedCandidate
    ));
}

function updateDuplicateUrlWarning(candidateUrl) {
    const hasDuplicate = hasDuplicateCustomToolUrl(candidateUrl);
    if (hasDuplicate) {
        setToolFormStatus('This link already exists in My Tools. You can still save it if intentional.', 'warning');
        return true;
    }
    if (toolFormStatus && toolFormStatus.classList.contains('is-warning')) {
        setToolFormStatus('');
    }
    return false;
}

// Utility: update preview box
function updateIconPreview(src) {
    if (!iconPreview) return;
    iconPreview.classList.remove('loading');
    iconPreview.innerHTML = '';
    if (!src) {
        iconPreview.innerHTML = '<span class="icon-preview-placeholder">Logo preview</span>';
        return;
    }
    const img = document.createElement('img');
    img.alt = 'Tool logo preview';
    img.referrerPolicy = 'no-referrer';
    img.loading = 'lazy';
    img.src = src;
    img.onerror = () => {
        // Fallback placeholder on error
        iconPreview.innerHTML = '<span class="icon-preview-placeholder">Not found</span>';
    };
    iconPreview.appendChild(img);
}

// Debounce helper
function debounce(fn, delay = 400) {
    let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

// Core auto-favicon discovery
async function discoverFavicon(url) {
    try {
        if (!/^https?:\/\//i.test(url)) return null;
        const u = new URL(url);
        const origin = u.origin;
        const host = u.hostname;
        const candidates = [
            `${origin}/favicon.ico`,
            `https://www.google.com/s2/favicons?domain=${host}&sz=128`,
            `https://icons.duckduckgo.com/ip3/${host}.ico`,
            `${origin}/apple-touch-icon.png`,
            `${origin}/apple-touch-icon-precomposed.png`
        ];
        for (const cand of candidates) {
            const ok = await checkImage(cand);
            if (ok) return cand;
        }
    } catch(e) {
        debugWarn('discoverFavicon error', e);
    }
    return null;
}

function checkImage(src, timeout = 6000) {
    return new Promise(resolve => {
        const img = new Image();
        let done = false;
        const timer = setTimeout(() => { if(!done){ done = true; img.src = ''; resolve(false);} }, timeout);
        img.onload = () => { if (!done){ done = true; clearTimeout(timer); resolve(true);} };
        img.onerror = () => { if (!done){ done = true; clearTimeout(timer); resolve(false);} };
        img.referrerPolicy = 'no-referrer';
        img.src = src;
    });
}

async function autoFetchLogo() {
    if (!fetchLogoBtn) return;
    const linkVal = normalizeCustomToolUrl((linkInputEl && linkInputEl.value.trim()) || '');
    if (!linkVal) {
        setToolFormStatus('Enter a Tool Link first');
        if (linkInputEl) linkInputEl.focus();
        return;
    }
    if (linkInputEl) linkInputEl.value = linkVal;
    setToolFormStatus('');
    if (iconPreview) {
        iconPreview.classList.add('loading');
    }
    fetchLogoBtn.disabled = true;
    const original = fetchLogoBtn.textContent;
    fetchLogoBtn.textContent = 'Fetching...';
    const favicon = await discoverFavicon(linkVal);
    if (favicon) {
        if (iconInputEl) iconInputEl.value = favicon;
        updateIconPreview(favicon);
        fetchLogoBtn.textContent = 'Found!';
        setToolFormStatus('Logo found and filled in automatically.', 'success');
    } else {
        updateIconPreview(null);
        fetchLogoBtn.textContent = 'Not Found';
        setToolFormStatus('Could not fetch a logo automatically. You can paste one manually.');
    }
    setTimeout(() => { fetchLogoBtn.textContent = original; fetchLogoBtn.disabled = false; }, 1200);
}

if (fetchLogoBtn) {
    fetchLogoBtn.addEventListener('click', autoFetchLogo);
}
if (iconInputEl) {
    iconInputEl.addEventListener('input', () => updateIconPreview(iconInputEl.value.trim()));
}
if (linkInputEl) {
    linkInputEl.addEventListener('input', debounce(() => {
        updateDuplicateUrlWarning(linkInputEl.value.trim());
        // If icon field empty, attempt silent fetch
        if (iconInputEl && !iconInputEl.value.trim()) {
            autoFetchLogo();
        }
    }, 1000));
}

// Check if all required elements exist
if (!toolsListEl || !editBtn || !modal || !closeModalBtn || !toolForm || !modalTitle) {
  console.error('My Tools: Required elements not found', {
    toolsListEl, editBtn, modal, closeModalBtn, toolForm, modalTitle
  });
}

if (modal) {
    modal.setAttribute('aria-hidden', 'true');
}

// Initialize with some default tools if empty
let myTools = JSON.parse(localStorage.getItem('myTools') || JSON.stringify([
  {
    name: 'ChatGPT',
    icon: 'https://icons.duckduckgo.com/ip3/chatgpt.com.ico',
    link: 'https://chat.openai.com'
  },
  {
    name: 'Gemini',
    icon: 'https://icons.duckduckgo.com/ip3/gemini.google.com.ico',
    link: 'https://gemini.google.com'
  },
  {
    name: 'Perplexity',
    icon: 'https://icons.duckduckgo.com/ip3/perplexity.ai.ico',
    link: 'https://perplexity.ai'
  }
]));

let editIndex = null;
let editMode = false;function renderMyTools() {
  toolsListEl.innerHTML = '';
  
  if (myTools.length === 0 && !editMode) {
    toolsListEl.innerHTML = `
      <div style="text-align: center; width: 100%; color: var(--muted-text); padding: 40px 20px;">
        <i class="fas fa-tools" style="font-size: 2rem; margin-bottom: 16px; opacity: 0.5;"></i>
        <p>No tools added yet. Click Edit to add your favorite tools!</p>
      </div>
    `;
    return;
  }
  
  myTools.forEach((tool, idx) => {
    const item = document.createElement('div');
    item.className = 'tool-item';
    item.draggable = editMode;
    
    const img = document.createElement('img');
    img.src = tool.icon;
    img.alt = tool.name;
    img.className = 'tool-icon';
    img.loading = 'lazy'; // Optimize LCP: lazy load
    img.width = 48; // Prevent CLS: explicit dimensions
    img.height = 48;
            img.onerror = () => {
            img.src = DEFAULT_TOOL_ICON;
        };
    
    const nameSpan = document.createElement('span');
    nameSpan.className = 'tool-name';
    nameSpan.textContent = tool.name;
    
    item.appendChild(img);
    item.appendChild(nameSpan);
    
    if (editMode) {
      const editButton = document.createElement('button');
      editButton.className = 'tool-edit';
      editButton.title = 'Edit this tool';
      editButton.textContent = 'Edit';
      editButton.onclick = (e) => {
        e.stopPropagation();
        openModal(idx);
      };
      
      const deleteButton = document.createElement('button');
      deleteButton.className = 'tool-delete';
      deleteButton.title = 'Delete this tool';
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = (e) => {
        e.stopPropagation();
        if (confirm(`Remove "${tool.name}" from your tools?`)) {
          myTools.splice(idx, 1);
          saveTools();
          renderMyTools();
        }
      };
      
      item.appendChild(editButton);
      item.appendChild(deleteButton);
      
      // Drag & drop reordering
      item.ondragstart = (e) => {
        e.dataTransfer.setData('text/plain', idx);
        item.style.opacity = '0.5';
      };
      
      item.ondragend = () => {
        item.style.opacity = '1';
      };
      
      item.ondragover = (e) => {
        e.preventDefault();
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 0 0 2px var(--primary-color)';
      };
      
      item.ondragleave = () => {
        item.style.transform = '';
        item.style.boxShadow = '';
      };
      
      item.ondrop = (e) => {
        e.preventDefault();
        item.style.transform = '';
        item.style.boxShadow = '';
        const fromIdx = +e.dataTransfer.getData('text/plain');
        if (fromIdx !== idx && fromIdx >= 0) {
          const moved = myTools.splice(fromIdx, 1)[0];
          myTools.splice(idx, 0, moved);
          saveTools();
          renderMyTools();
        }
      };
                } else if (tool.link) {
                item.onclick = () => openExternalLink(normalizeCustomToolUrl(tool.link), {
                    source: 'my_tools',
                    toolName: tool.name
                });
      item.style.cursor = 'pointer';
    }
    
    toolsListEl.appendChild(item);
  });
  
  if (editMode) {
    // Add button
    const addBtn = document.createElement('div');
    addBtn.className = 'tool-item';
    addBtn.innerHTML = `
      <div class='tool-icon' style='display:flex;align-items:center;justify-content:center;font-size:1.5rem;background:var(--primary-color);color:var(--text-color);border:2px dashed var(--primary-dark);'>+</div>
      <span class='tool-name'>Add Tool</span>
    `;
    addBtn.onclick = () => openModal();
    toolsListEl.appendChild(addBtn);
  }
}    function openModal(idx) {
    modalFocusReturnEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
        toolForm.reset();
    setToolFormStatus('');
        editIndex = idx;
        if (typeof idx === 'number') {
            modalTitle.textContent = 'Edit Tool';
            const t = myTools[idx];
            document.getElementById('tool-name').value = t.name;
            document.getElementById('tool-icon').value = t.icon;
            document.getElementById('tool-link').value = t.link || '';
            updateIconPreview(t.icon);
            updateDuplicateUrlWarning(t.link || '');
        } else {
            modalTitle.textContent = 'Add Tool';
            updateIconPreview(null);
        }
        if (fetchLogoBtn) { fetchLogoBtn.textContent = 'Auto Fetch Logo'; fetchLogoBtn.disabled = false; }
        const toolNameInput = document.getElementById('tool-name');
        if (toolNameInput) {
            setTimeout(() => toolNameInput.focus(), 0);
        }
    }

    function closeModal() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        setToolFormStatus('');
        editIndex = null;
        if (modalFocusReturnEl && typeof modalFocusReturnEl.focus === 'function') {
            modalFocusReturnEl.focus();
        }
        modalFocusReturnEl = null;
    }

    function saveTools() {
        localStorage.setItem('myTools', JSON.stringify(myTools));
    }

// Form submission handler will be set up in the conditional check below// Set up event handlers only if elements exist
if (closeModalBtn && modal && editBtn && toolForm) {
  closeModalBtn.onclick = closeModal;
  
  window.onclick = function(e) {
    if (e.target === modal) closeModal();
  };

  editBtn.onclick = function() {
    editMode = !editMode;
    editBtn.textContent = editMode ? 'Done' : 'Edit';
    renderMyTools();
  };

  // Form submission handler
  toolForm.onsubmit = function(e) {
    e.preventDefault();
    const submitBtn = toolForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Check if form elements exist
    const nameInput = document.getElementById('tool-name');
    const iconInput = document.getElementById('tool-icon');
    const linkInput = document.getElementById('tool-link');
    
    if (!nameInput || !iconInput || !linkInput) {
      console.error('Form elements not found:', { nameInput, iconInput, linkInput });
            setToolFormStatus('Form elements not found. Please refresh the page.');
      return;
    }

        setToolFormStatus('');

    // Show loading state
    submitBtn.textContent = 'Saving...';
    submitBtn.disabled = true;
    
        const name = nameInput.value.trim();
        const icon = iconInput.value.trim();
        const link = normalizeCustomToolUrl(linkInput.value.trim());
        if (linkInput.value.trim() && link && link !== linkInput.value.trim()) {
            linkInput.value = link;
        }

      updateDuplicateUrlWarning(link);
      
      if (!name) {
                setToolFormStatus('Please enter a tool name');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        nameInput.focus();
        return;
      }
      
            let finalIcon = icon;
            const proceed = async () => {
                // Check for duplicate names (except when editing the same tool)
                const isDuplicate = myTools.some((tool, idx) => 
                    tool.name.toLowerCase() === name.toLowerCase() && idx !== editIndex
                );
                if (isDuplicate) {
                    setToolFormStatus('A tool with this name already exists');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    nameInput.focus();
                    return;
                }
                const tool = { name, icon: finalIcon, link };
                if (typeof editIndex === 'number') {
                    myTools[editIndex] = tool;
                } else {
                    myTools.push(tool);
                }
                try {
                    saveTools();
                    renderMyTools();
                    closeModal();
                    submitBtn.textContent = 'Saved!';
                    submitBtn.style.background = '#4ade80';
                    setTimeout(() => { submitBtn.textContent = originalText; submitBtn.style.background = ''; submitBtn.disabled = false; }, 1000);
                    debugLog('Tool saved successfully:', tool);
                } catch (error) {
                    console.error('Error saving tool:', error);
                    setToolFormStatus('Failed to save tool. Please try again.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            };

            if (!finalIcon) {
                if (link) {
                    // Attempt auto fetch synchronously
                        discoverFavicon(link).then(found => {
                            finalIcon = found || DEFAULT_TOOL_ICON;
                            if (iconInput) iconInput.value = finalIcon;
                            updateIconPreview(finalIcon);
                            proceed();
                        });
                    return; // proceed will be called async
                } else {
                    finalIcon = DEFAULT_TOOL_ICON;
                }
            }

            // Continue if icon already present
            proceed();
  };

  // Initial render
  renderMyTools();
} else {
  console.error('My Tools: Cannot set up event handlers - required elements missing');
}

// ================= Submission Form Logic =================
(function(){
    const form = document.getElementById('tool-submission-form');
    if(!form) return; // Page may not have form
    const submissionEndpoint = 'https://script.google.com/macros/s/AKfycbwlHHaJzEW33JG0871QbwTGupOIjLanbMAtIHl7k_3F8CfeomhdIYSbHNLs42T8-j_3/exec';
    const nameInput = document.getElementById('submissionName');
    const urlInput = document.getElementById('submissionUrl');
    const errorName = document.getElementById('errorName');
    const errorUrl = document.getElementById('errorUrl');
    const statusEl = document.getElementById('submissionStatus');
    const submitBtn = document.getElementById('submissionSubmitBtn');
    const resetBtn = document.getElementById('submissionResetBtn');

    const urlPattern = /^(https?:\/\/)([\w.-]+)(:[0-9]+)?(\/[\w\-._~:/?#[\]@!$&'()*+,;=.]*?)?$/i;

    function setError(inputEl, errorEl, msg){
        if(!inputEl || !errorEl) return;
        inputEl.classList.add('error');
        errorEl.textContent = msg || '';
    }
    function clearError(inputEl, errorEl){
        if(!inputEl || !errorEl) return;
        inputEl.classList.remove('error');
        errorEl.textContent='';
    }
    function validateName(){
        const val = nameInput.value.trim();
        if(!val){ setError(nameInput,errorName,'Tool name is required'); return false; }
        if(val.length < 2){ setError(nameInput,errorName,'Name must be at least 2 characters'); return false; }
        clearError(nameInput,errorName); return true;
    }
    function normalizeUrl(raw){
        if(!raw) return raw;
        if(!/^https?:\/\//i.test(raw)) return 'https://' + raw;
        return raw;
    }
    function validateUrl(){
        let val = urlInput.value.trim();
        if(!val){ setError(urlInput,errorUrl,'Website URL is required'); return false; }
        val = normalizeUrl(val);
        if(!urlPattern.test(val)){ setError(urlInput,errorUrl,'Enter a valid URL including https://'); return false; }
        // Additional simple checks
        try {
            const u = new URL(val);
            if(!u.hostname.includes('.')) { setError(urlInput,errorUrl,'URL must include a valid domain'); return false; }
        } catch(e){ setError(urlInput,errorUrl,'Malformed URL'); return false; }
        urlInput.value = val; // normalized
        clearError(urlInput,errorUrl); return true;
    }

    nameInput.addEventListener('input', ()=>{ if(errorName.textContent) validateName(); });
    urlInput.addEventListener('input', ()=>{ if(errorUrl.textContent) validateUrl(); });

    form.addEventListener('submit', async function(e){
        e.preventDefault();
        statusEl.textContent='';
        statusEl.className='form-status';
        const validName = validateName();
        const validUrl = validateUrl();
        if(!validName || !validUrl){
            statusEl.textContent='Please correct the highlighted fields.';
            statusEl.classList.add('error');
            return;
        }

        submitBtn.disabled = true;
        const originalText = submitBtn.textContent;
        submitBtn.textContent='Submitting...';
        try {
            const response = await fetch(submissionEndpoint, {
                method: 'POST',
                body: new FormData(form)
            });

            if (!response.ok) {
                throw new Error(`Submission failed with status ${response.status}`);
            }

            submitBtn.textContent = 'Submitted!';
            statusEl.textContent = 'Thank you! Your tool has been submitted for review.';
            statusEl.classList.add('success');
            toollyAnalytics.track('tool_submission_result', {
                status: 'success',
                toolName: nameInput.value.trim(),
                toolUrl: urlInput.value.trim()
            });
            form.reset();

            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                statusEl.textContent = '';
                statusEl.className = 'form-status';
            }, 2000);
        } catch (error) {
            console.error('Submission error:', error);
            toollyAnalytics.track('tool_submission_result', {
                status: 'failure',
                errorMessage: error && error.message ? error.message : 'unknown_error'
            });
            statusEl.textContent = 'Sorry, there was an error submitting your form. Please try again.';
            statusEl.classList.add('error');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    resetBtn.addEventListener('click', ()=>{
        clearError(nameInput,errorName); clearError(urlInput,errorUrl); statusEl.textContent=''; statusEl.className='form-status';
    });
})();
