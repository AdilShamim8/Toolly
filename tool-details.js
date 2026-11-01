// Toolly — Tool Detail Modal + Similar Tools engine
// ---------------------------------------------------------------------------
// Every tool card gets a "Details" action that opens a rich per-tool view:
// logo, full description, badges, categories, tags, a Visit Site button, and
// a "Similar Tools" row computed from shared categories and tag overlap.
// Clicking a similar tool swaps the modal content in place.
// ---------------------------------------------------------------------------

(function toolDetailsModule() {
    'use strict';

    const SIMILAR_LIMIT = 6;
    const modal = document.getElementById('tool-detail-modal');
    const bodyEl = document.getElementById('tool-detail-body');
    const closeBtn = document.getElementById('tool-detail-close');
    let lastFocused = null;

    if (!modal || !bodyEl) return;

    // --- Similar tools scoring: shared categories weigh more than shared tags ---
    function findSimilarTools(tool, allTools, limit) {
        const toolCats = new Set(Array.isArray(tool.categories) ? tool.categories : []);
        const toolTags = new Set((Array.isArray(tool.tags) ? tool.tags : []).map(t => String(t).toLowerCase()));

        const scored = [];
        for (const other of allTools) {
            if (!other || other === tool || other.name === tool.name) continue;

            let score = 0;
            const otherCats = Array.isArray(other.categories) ? other.categories : [];
            for (const c of otherCats) {
                if (toolCats.has(c)) score += 3;
            }
            const otherTags = Array.isArray(other.tags) ? other.tags : [];
            for (const t of otherTags) {
                if (toolTags.has(String(t).toLowerCase())) score += 1;
            }
            // Prefer notable tools when scores tie
            if (Array.isArray(other.badges)) {
                if (other.badges.includes('featured')) score += 0.5;
                if (other.badges.includes('trending')) score += 0.25;
            }
            if (score > 0) scored.push({ tool: other, score });
        }

        scored.sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name));
        return scored.slice(0, limit).map(s => s.tool);
    }

    function categoryLabel(cat) {
        if (typeof window.categoryLabel === 'function') return window.categoryLabel(cat);
        const labels = {
            'nlp': 'Chatbot', 'productivity': 'Productivity', 'education': 'Education',
            'automation': 'Automation', 'coding': 'Coding', 'business': 'Business',
            'research': 'Research', 'design': 'Design', 'vision': 'Image', 'video': 'Video',
            'audio': 'Audio', 'marketing': 'Marketing', 'data-science': 'Data Science',
            'life-assistant': 'Life Assistant', 'writing': 'Writing'
        };
        return labels[cat] || cat;
    }

    function toolAvatar(name, category) {
        if (typeof window.generateToolAvatar === 'function') return window.generateToolAvatar(name, category);
        return '';
    }

    function toolDomain(url) {
        if (typeof window.getDomain === 'function') return window.getDomain(url);
        try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return ''; }
    }

    function makeLogo(tool, size) {
        const primaryCat = Array.isArray(tool.categories) && tool.categories.length ? tool.categories[0] : '';
        const img = document.createElement('img');
        img.className = 'tool-detail-logo';
        img.src = tool.logo || toolAvatar(tool.name, primaryCat);
        img.alt = `${tool.name} logo`;
        img.width = size;
        img.height = size;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.onerror = function () {
            this.onerror = null;
            const domain = toolDomain(tool.url);
            const ddg = domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : '';
            if (ddg && this.src !== ddg) {
                this.onerror = function () {
                    this.onerror = null;
                    this.src = toolAvatar(tool.name, primaryCat);
                };
                this.src = ddg;
            } else {
                this.src = toolAvatar(tool.name, primaryCat);
            }
        };
        return img;
    }

    function track(eventName, payload) {
        if (typeof window.ToollyAnalytics === 'object' && window.ToollyAnalytics && typeof window.ToollyAnalytics.track === 'function') {
            window.ToollyAnalytics.track(eventName, payload);
        }
    }

    // --- Rendering ---
    function renderToolDetail(tool) {
        if (!tool) return;
        bodyEl.innerHTML = '';

        const header = document.createElement('div');
        header.className = 'tool-detail-header';

        const logoWrap = document.createElement('div');
        logoWrap.className = 'tool-detail-logo-wrap';
        logoWrap.appendChild(makeLogo(tool, 64));
        header.appendChild(logoWrap);

        const headText = document.createElement('div');
        headText.className = 'tool-detail-headtext';

        const title = document.createElement('h3');
        title.className = 'tool-detail-title';
        title.id = 'tool-detail-title';
        title.textContent = tool.name;
        headText.appendChild(title);

        const domain = document.createElement('p');
        domain.className = 'tool-detail-domain';
        domain.textContent = toolDomain(tool.url) || tool.url;
        headText.appendChild(domain);

        if (Array.isArray(tool.badges) && tool.badges.length) {
            const badges = document.createElement('div');
            badges.className = 'tool-badges';
            tool.badges.slice(0, 4).forEach(badge => {
                const el = document.createElement('span');
                el.className = `badge ${badge}`;
                el.textContent = badge.charAt(0).toUpperCase() + badge.slice(1);
                badges.appendChild(el);
            });
            headText.appendChild(badges);
        }

        header.appendChild(headText);
        bodyEl.appendChild(header);

        const desc = document.createElement('p');
        desc.className = 'tool-detail-description';
        desc.textContent = tool.description || 'No description available yet.';
        bodyEl.appendChild(desc);

        // Meta rows: categories and tags
        if (Array.isArray(tool.categories) && tool.categories.length) {
            const row = document.createElement('div');
            row.className = 'tool-detail-meta';
            const label = document.createElement('span');
            label.className = 'tool-detail-meta-label';
            label.textContent = 'Categories';
            const tags = document.createElement('div');
            tags.className = 'tool-tags';
            tool.categories.forEach(cat => {
                const t = document.createElement('span');
                t.className = 'tag';
                t.textContent = categoryLabel(cat);
                tags.appendChild(t);
            });
            row.appendChild(label);
            row.appendChild(tags);
            bodyEl.appendChild(row);
        }

        if (Array.isArray(tool.tags) && tool.tags.length) {
            const row = document.createElement('div');
            row.className = 'tool-detail-meta';
            const label = document.createElement('span');
            label.className = 'tool-detail-meta-label';
            label.textContent = 'Tags';
            const tags = document.createElement('div');
            tags.className = 'tool-tags';
            tool.tags.forEach(tag => {
                const t = document.createElement('span');
                t.className = 'tag';
                t.textContent = tag;
                tags.appendChild(t);
            });
            row.appendChild(label);
            row.appendChild(tags);
            bodyEl.appendChild(row);
        }

        // Primary action
        const actions = document.createElement('div');
        actions.className = 'tool-detail-actions';
        const visit = document.createElement('a');
        visit.className = 'tool-detail-visit';
        visit.href = tool.url;
        visit.target = '_blank';
        visit.rel = 'noopener noreferrer';
        visit.innerHTML = '<i class="fas fa-external-link-alt" aria-hidden="true"></i> Visit Site';
        visit.addEventListener('click', () => {
            track('tool_detail_visit_clicked', {
                toolName: tool.name,
                destinationUrl: tool.url
            });
        });
        actions.appendChild(visit);
        bodyEl.appendChild(actions);

        // Similar tools
        const allTools = Array.isArray(window.aiTools) ? window.aiTools : [];
        const similar = findSimilarTools(tool, allTools, SIMILAR_LIMIT);
        if (similar.length) {
            const section = document.createElement('div');
            section.className = 'tool-detail-similar';

            const heading = document.createElement('h4');
            heading.className = 'tool-detail-similar-heading';
            heading.innerHTML = '<i class="fas fa-layer-group" aria-hidden="true"></i> Similar Tools';
            section.appendChild(heading);

            const grid = document.createElement('div');
            grid.className = 'tool-detail-similar-grid';
            similar.forEach(sim => {
                const chip = document.createElement('button');
                chip.type = 'button';
                chip.className = 'tool-detail-similar-chip';

                const thumb = makeLogo(sim, 32);
                thumb.className = 'tool-detail-similar-thumb';
                chip.appendChild(thumb);

                const nameSpan = document.createElement('span');
                nameSpan.className = 'tool-detail-similar-name';
                nameSpan.textContent = sim.name;
                chip.appendChild(nameSpan);

                chip.addEventListener('click', () => {
                    track('similar_tool_clicked', {
                        fromTool: tool.name,
                        toTool: sim.name
                    });
                    renderToolDetail(sim);
                    bodyEl.parentElement.scrollTop = 0; // reset scroll on swap
                });
                grid.appendChild(chip);
            });
            section.appendChild(grid);
            bodyEl.appendChild(section);
        }
    }

    // --- Open / close with focus management ---
    function openToolDetail(tool) {
        if (!tool) return;
        renderToolDetail(tool);
        lastFocused = document.activeElement;
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        if (closeBtn) closeBtn.focus();
        track('tool_detail_opened', { toolName: tool.name });
    }

    function closeToolDetail() {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
        lastFocused = null;
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeToolDetail);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeToolDetail();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeToolDetail();
        }
    });

    // Public API used by card renderers
    window.ToollyToolDetails = { open: openToolDetail };
})();
