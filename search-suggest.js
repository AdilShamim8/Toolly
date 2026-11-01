// Toolly — Search Autocomplete
// ---------------------------------------------------------------------------
// Instant suggestions under the main search box while typing:
// ranked tool-name matches (prefix > word-start > substring) with logos,
// pricing badge and category hint. Keyboard support: ArrowUp/ArrowDown move
// the active row, Enter opens it in the tool detail modal, Escape closes.
// Selecting a row fills the input and lets the existing search flow filter
// the grid, then opens the detail modal for that tool.
// ---------------------------------------------------------------------------

(function searchSuggestModule() {
    'use strict';

    const MAX_SUGGESTIONS = 7;
    const MIN_QUERY = 1;

    const input = document.getElementById('searchInput');
    const form = input ? input.closest('.search-container') : null;
    if (!input || !form) return;

    let dropdown = null;
    let items = [];          // [{ tool, matchIndex }]
    let activeIndex = -1;
    let recentQueries = [];
    try {
        recentQueries = JSON.parse(localStorage.getItem('toollyRecentSearches') || '[]');
        if (!Array.isArray(recentQueries)) recentQueries = [];
    } catch (e) { recentQueries = []; }

    function allTools() {
        return Array.isArray(window.aiTools) ? window.aiTools : [];
    }

    function categoryLabel(cat) {
        if (typeof window.categoryLabel === 'function') return window.categoryLabel(cat);
        return cat;
    }

    // --- Ranking: prefix matches beat word-starts beat substrings ---
    function findMatches(query) {
        const q = query.toLowerCase().trim();
        if (!q) return [];
        const scored = [];
        for (const tool of allTools()) {
            if (!tool || !tool.name) continue;
            const nameLower = tool.name.toLowerCase();
            let score = -1;
            let matchIndex = -1;

            if (nameLower.startsWith(q)) {
                score = 100 - Math.min(nameLower.length, 50); // shorter names win
                matchIndex = 0;
            } else {
                const wordStart = nameLower.indexOf(' ' + q);
                if (wordStart !== -1) {
                    score = 60;
                    matchIndex = wordStart + 1;
                } else if (nameLower.includes(q)) {
                    score = 30;
                    matchIndex = nameLower.indexOf(q);
                }
            }

            if (score > 0) {
                if (Array.isArray(tool.badges)) {
                    if (tool.badges.includes('featured')) score += 5;
                    if (tool.badges.includes('trending')) score += 3;
                }
                scored.push({ tool, score, matchIndex });
            }
        }
        scored.sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name));
        return scored.slice(0, MAX_SUGGESTIONS);
    }

    function ensureDropdown() {
        if (dropdown) return dropdown;
        dropdown = document.createElement('div');
        dropdown.className = 'search-suggest';
        dropdown.setAttribute('role', 'listbox');
        dropdown.setAttribute('aria-label', 'Search suggestions');
        dropdown.id = 'searchSuggest';
        form.appendChild(dropdown);
        return dropdown;
    }

    function toolLogo(tool) {
        const primaryCat = Array.isArray(tool.categories) && tool.categories.length ? tool.categories[0] : '';
        const domain = (typeof window.getDomain === 'function') ? window.getDomain(tool.url) : '';
        const src = tool.logo ||
            (domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : '') ||
            (typeof window.generateToolAvatar === 'function' ? window.generateToolAvatar(tool.name, primaryCat) : '');
        const img = document.createElement('img');
        img.className = 'search-suggest-logo';
        img.src = src;
        img.alt = '';
        img.width = 22;
        img.height = 22;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.onerror = function () {
            this.onerror = null;
            if (typeof window.generateToolAvatar === 'function') {
                this.src = window.generateToolAvatar(tool.name, primaryCat);
            }
        };
        return img;
    }

    function pricingOf(tool) {
        const badges = Array.isArray(tool.badges) ? tool.badges : [];
        if (badges.includes('free')) return 'Free';
        if (badges.includes('open source')) return 'Open Source';
        if (badges.includes('freemium')) return 'Freemium';
        if (badges.includes('paid')) return 'Paid';
        return '';
    }

    function setActive(idx) {
        if (!dropdown) return;
        const rows = dropdown.querySelectorAll('.search-suggest-item');
        rows.forEach((row, i) => {
            const active = i === idx;
            row.classList.toggle('active', active);
            row.setAttribute('aria-selected', active ? 'true' : 'false');
        });
        activeIndex = idx;
        if (activeIndex >= 0 && rows[activeIndex]) {
            rows[activeIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    function chooseItem(item) {
        const tool = item.tool;
        // Fill the search box and let the existing flow filter the grid
        input.value = tool.name;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        close();
        if (window.ToollyToolDetails) window.ToollyToolDetails.open(tool);
        if (typeof window.ToollyAnalytics === 'object' && window.ToollyAnalytics) {
            window.ToollyAnalytics.track('search_suggestion_selected', {
                query: tool.name,
                toolName: tool.name
            });
        }
    }

    function render(matches, query) {
        const dd = ensureDropdown();
        dd.innerHTML = '';
        items = matches.map(m => ({ tool: m.tool, matchIndex: m.matchIndex }));
        activeIndex = -1;

        if (!items.length) {
            dd.style.display = 'none';
            return;
        }

        items.forEach((item, i) => {
            const tool = item.tool;
            const row = document.createElement('div');
            row.className = 'search-suggest-item';
            row.setAttribute('role', 'option');
            row.setAttribute('aria-selected', 'false');
            row.dataset.index = i;

            row.appendChild(toolLogo(tool));

            const label = document.createElement('span');
            label.className = 'search-suggest-name';
            const name = tool.name;
            const mi = item.matchIndex;
            if (mi > 0) {
                label.append(name.substring(0, mi));
                const b = document.createElement('strong');
                b.textContent = name.substring(mi, mi + query.length);
                label.append(b, name.substring(mi + query.length));
            } else {
                const b = document.createElement('strong');
                b.textContent = name.substring(0, query.length);
                label.append(b, name.substring(query.length));
            }
            row.appendChild(label);

            const meta = document.createElement('span');
            meta.className = 'search-suggest-meta';
            const parts = [];
            const pricing = pricingOf(tool);
            if (pricing) parts.push(pricing);
            const cat = Array.isArray(tool.categories) && tool.categories.length ? categoryLabel(tool.categories[0]) : '';
            if (cat) parts.push(cat);
            meta.textContent = parts.join(' · ');
            row.appendChild(meta);

            row.addEventListener('mousedown', (e) => {
                // mousedown beats the input's blur handler
                e.preventDefault();
                chooseItem(item);
            });

            dd.appendChild(row);
        });

        dd.style.display = 'block';
    }

    function close() {
        if (dropdown) dropdown.style.display = 'none';
        items = [];
        activeIndex = -1;
        input.removeAttribute('aria-activedescendant');
    }

    function saveRecent(query) {
        const q = query.trim();
        if (q.length < 2) return;
        recentQueries = [q, ...recentQueries.filter(x => x !== q)].slice(0, 5);
        try { localStorage.setItem('toollyRecentSearches', JSON.stringify(recentQueries)); } catch (e) { /* ignore */ }
    }

    input.addEventListener('input', () => {
        const query = input.value;
        if (query.trim().length < MIN_QUERY) {
            close();
            return;
        }
        const matches = findMatches(query);
        render(matches, query.toLowerCase().trim());
        saveRecent(query);
    });

    input.addEventListener('keydown', (e) => {
        if (!dropdown || dropdown.style.display === 'none') return;
        const rows = dropdown.querySelectorAll('.search-suggest-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActive((activeIndex + 1) % rows.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive(activeIndex <= 0 ? rows.length - 1 : activeIndex - 1);
        } else if (e.key === 'Enter' && activeIndex >= 0 && items[activeIndex]) {
            e.preventDefault();
            e.stopPropagation();
            chooseItem(items[activeIndex]);
        } else if (e.key === 'Escape') {
            close();
        }

        if (activeIndex >= 0 && rows[activeIndex]) {
            input.setAttribute('aria-activedescendant', 'suggest-row-' + activeIndex);
            rows[activeIndex].id = 'suggest-row-' + activeIndex;
        }
    });

    // Close when clicking outside or when the field loses focus
    document.addEventListener('click', (e) => {
        if (!form.contains(e.target)) close();
    });
    input.addEventListener('blur', () => {
        // small delay so a click on a row still registers
        setTimeout(close, 120);
    });

    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-expanded', 'false');
    input.setAttribute('aria-controls', 'searchSuggest');
    input.setAttribute('aria-autocomplete', 'list');
})();
