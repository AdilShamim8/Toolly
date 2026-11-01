// Toolly — Landing page logic (index.html)
// ---------------------------------------------------------------------------
// Uses the shared window.TOOLLY_TOOLS dataset (tools-data.js):
//  - redirects legacy directory URLs (/?q=...) to tools.html with params
//  - hero search with live suggestions, deep-links into the directory
//  - interactive task finder: goal -> matched tools + first small step
//  - category grid with live counts, trending preview list
//  - theme toggle (same 'theme' localStorage contract as scripts.js)
// ---------------------------------------------------------------------------

(function landingModule() {
    'use strict';

    // --- Legacy URL redirect: the directory used to live at / ---
    const BROWSE_KEYS = ['q', 'cat', 'group', 'sort', 'view'];
    const params = new URLSearchParams(window.location.search);
    const hasBrowseParams = BROWSE_KEYS.some(k => params.has(k));
    if (hasBrowseParams && window.location.pathname.replace(/\/[^/]*$/, '') === window.location.pathname) {
        // root path (index.html) carrying directory params -> forward
        window.location.replace('tools.html' + window.location.search);
        return;
    }
    if (hasBrowseParams && /index\.html?$/.test(window.location.pathname)) {
        window.location.replace('tools.html' + window.location.search);
        return;
    }

    const TOOLS = (typeof window.TOOLLY_TOOLS === 'object' && Array.isArray(window.TOOLLY_TOOLS))
        ? window.TOOLLY_TOOLS : [];

    // --- Theme (same contract as the directory page) ---
    const themeToggle = document.getElementById('themeToggle');
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }
    applyTheme(localStorage.getItem('theme') || 'light');
    if (themeToggle) {
        const setIcon = () => {
            const icon = themeToggle.querySelector('i');
            if (icon) icon.className = document.documentElement.getAttribute('data-theme') === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        };
        setIcon();
        themeToggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', next);
            applyTheme(next);
            setIcon();
        });
    }

    // --- Shared helpers ---
    const CATEGORY_ORDER = [
        { id: 'nlp', label: 'Chatbot', icon: 'fa-comments' },
        { id: 'productivity', label: 'Productivity', icon: 'fa-bolt' },
        { id: 'education', label: 'Education', icon: 'fa-graduation-cap' },
        { id: 'automation', label: 'Automation', icon: 'fa-gears' },
        { id: 'coding', label: 'Developer Tools', icon: 'fa-code' },
        { id: 'research', label: 'Research', icon: 'fa-magnifying-glass' },
        { id: 'data-science', label: 'Data Science', icon: 'fa-chart-line' },
        { id: 'audio', label: 'Audio Generator', icon: 'fa-headphones' },
        { id: 'video', label: 'Video Generator', icon: 'fa-film' },
        { id: 'vision', label: 'Image Generator', icon: 'fa-image' },
        { id: 'design', label: 'Design & Art', icon: 'fa-palette' },
        { id: 'business', label: 'Business', icon: 'fa-briefcase' },
        { id: 'marketing', label: 'Marketing', icon: 'fa-bullhorn' },
        { id: 'life-assistant', label: 'Life Assistant', icon: 'fa-heart' }
    ];

    function countByCategory(catId) {
        return TOOLS.filter(t => Array.isArray(t.categories) && t.categories.includes(catId)).length;
    }

    function pricingOf(tool) {
        const b = Array.isArray(tool.badges) ? tool.badges : [];
        if (b.includes('free')) return 'Free';
        if (b.includes('open source')) return 'Open Source';
        if (b.includes('freemium')) return 'Freemium';
        if (b.includes('paid')) return 'Paid';
        return '';
    }

    function toolLogoSrc(tool) {
        const primaryCat = Array.isArray(tool.categories) && tool.categories.length ? tool.categories[0] : '';
        return tool.logo ||
            (typeof window.generateToolAvatar === 'function' ? window.generateToolAvatar(tool.name, primaryCat) : '');
    }

    function makeLogo(tool, size, className) {
        const img = document.createElement('img');
        if (className) img.className = className;
        img.src = toolLogoSrc(tool);
        img.alt = '';
        img.width = size;
        img.height = size;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.onerror = function () {
            this.onerror = null;
            this.style.visibility = 'hidden';
        };
        return img;
    }

    // --- Hero stats (real numbers from the dataset) ---
    const statTools = document.getElementById('statTools');
    if (statTools && TOOLS.length) statTools.textContent = TOOLS.length + '+';
    const statCats = document.getElementById('statCategories');
    if (statCats) statCats.textContent = String(CATEGORY_ORDER.length);

    // --- Hero search + suggestions ---
    const heroSearch = document.getElementById('heroSearch');
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    const heroSuggest = document.getElementById('heroSuggest');
    let activeSuggest = -1;

    function go(query) {
        const q = query.trim();
        window.location.href = 'tools.html' + (q ? '?q=' + encodeURIComponent(q) : '');
    }

    function renderSuggest(query) {
        if (!heroSuggest) return;
        const q = query.toLowerCase().trim();
        heroSuggest.innerHTML = '';
        activeSuggest = -1;
        if (!q) { heroSuggest.hidden = true; return; }

        const matches = TOOLS.filter(t => t && t.name && t.name.toLowerCase().includes(q))
            .sort((a, b) => {
                const aP = a.name.toLowerCase().startsWith(q) ? 0 : 1;
                const bP = b.name.toLowerCase().startsWith(q) ? 0 : 1;
                return aP - bP || a.name.localeCompare(b.name);
            }).slice(0, 6);

        if (!matches.length) { heroSuggest.hidden = true; return; }

        matches.forEach(tool => {
            const row = document.createElement('button');
            row.type = 'button';
            row.className = 'landing-suggest-row';
            row.appendChild(makeLogo(tool, 22, 'landing-suggest-logo'));
            const name = document.createElement('span');
            name.className = 'landing-suggest-name';
            name.textContent = tool.name;
            row.appendChild(name);
            const meta = document.createElement('span');
            meta.className = 'landing-suggest-meta';
            const cat = Array.isArray(tool.categories) && tool.categories.length
                ? (CATEGORY_ORDER.find(c => c.id === tool.categories[0]) || {}).label || '' : '';
            meta.textContent = [pricingOf(tool), cat].filter(Boolean).join(' · ');
            row.appendChild(meta);
            row.addEventListener('mousedown', (e) => {
                e.preventDefault();
                go(tool.name);
            });
            heroSuggest.appendChild(row);
        });
        heroSuggest.hidden = false;
    }

    if (heroSearch) {
        let debounceTimer = null;
        heroSearch.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => renderSuggest(heroSearch.value), 120);
        });
        heroSearch.addEventListener('keydown', (e) => {
            const rows = heroSuggest && !heroSuggest.hidden
                ? [...heroSuggest.querySelectorAll('.landing-suggest-row')] : [];
            if (e.key === 'ArrowDown' && rows.length) {
                e.preventDefault();
                activeSuggest = (activeSuggest + 1) % rows.length;
                rows.forEach((r, i) => r.classList.toggle('active', i === activeSuggest));
            } else if (e.key === 'ArrowUp' && rows.length) {
                e.preventDefault();
                activeSuggest = activeSuggest <= 0 ? rows.length - 1 : activeSuggest - 1;
                rows.forEach((r, i) => r.classList.toggle('active', i === activeSuggest));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (activeSuggest >= 0 && rows[activeSuggest]) {
                    go(rows[activeSuggest].querySelector('.landing-suggest-name').textContent);
                } else {
                    go(heroSearch.value);
                }
            } else if (e.key === 'Escape' && heroSuggest) {
                heroSuggest.hidden = true;
            }
        });
        document.addEventListener('click', (e) => {
            if (heroSuggest && !e.target.closest('.landing-hero-search')) heroSuggest.hidden = true;
        });
    }
    if (heroSearchBtn) heroSearchBtn.addEventListener('click', () => go(heroSearch ? heroSearch.value : ''));

    // --- Task finder ---
    const FINDER_GOALS = {
        organize: {
            keywords: ['calendar', 'task', 'todo', 'to-do', 'notes', 'note-taking', 'productivity', 'email', 'inbox', 'meeting', 'planning', 'scheduling', 'organization', 'notes app', 'workspace'],
            categories: ['productivity', 'business', 'automation'],
            searchQuery: 'productivity',
            heading: 'Organise my day',
            skills: ['Writing clearer instructions', 'Summarising long threads', 'Building a repeatable daily workflow'],
            firstStep: 'Pick one recurring chore — inbox triage, weekly planning or meeting notes — and hand just that to an AI assistant for one week.',
            learnLink: 'learn-ai.html#lesson-organise',
            learnLabel: 'Lesson: plan a calmer week with AI'
        },
        write: {
            keywords: ['writing', 'writer', 'copywriting', 'content', 'blog', 'editing', 'grammar', 'email', 'essay', 'story', 'scriptwriting', 'text', 'seo'],
            categories: ['nlp', 'marketing'],
            searchQuery: 'writing',
            heading: 'Write with confidence',
            skills: ['Drafting with the four-part prompt', 'Editing for tone and length', 'Checking facts before you send'],
            firstStep: 'Take tomorrow\u2019s real email, paste your rough notes into a chatbot, and ask for a polite 5-sentence draft you can edit.',
            learnLink: 'learn-ai.html#lesson-prompt-method',
            learnLabel: 'Lesson: the four-part prompt method'
        },
        understand: {
            keywords: ['research', 'summarize', 'summarise', 'summary', 'search', 'knowledge', 'study', 'learning', 'documents', 'pdf', 'analysis', 'data', 'citation'],
            categories: ['research', 'education', 'data-science'],
            searchQuery: 'research',
            heading: 'Make sense of information',
            skills: ['Asking AI to show its sources', 'Comparing two sources fairly', 'Turning a 40-page PDF into 10 bullets'],
            firstStep: 'Drop one long document you\u2019ve been avoiding into an AI chat and ask: \u201cSummarise this in 10 bullets, flag what needs my decision.\u201d',
            learnLink: 'learn-ai.html#lesson-trust',
            learnLabel: 'Lesson: checking an AI answer'
        },
        create: {
            keywords: ['image', 'logo', 'art', 'design', 'video', 'audio', 'music', 'voice', 'illustration', 'photo', 'avatar', 'presentation', 'graphics'],
            categories: ['vision', 'design', 'video', 'audio'],
            searchQuery: 'image',
            heading: 'Make images & video',
            skills: ['Describing a visual in plain words', 'Iterating with follow-up prompts', 'Picking the right medium for the message'],
            firstStep: 'Ask an image generator for three very different logo ideas for your project — same brief, three styles — and notice which words changed the result.',
            learnLink: 'learn-ai.html#lesson-create',
            learnLabel: 'Lesson: your first image prompt'
        }
    };

    const finderResult = document.getElementById('finderResult');

    function scoreFinderTools(goal) {
        const kw = goal.keywords;
        const catSet = new Set(goal.categories);
        return TOOLS.map(tool => {
            let score = 0;
            if (Array.isArray(tool.categories) && tool.categories.some(c => catSet.has(c))) score += 3;
            const tags = (Array.isArray(tool.tags) ? tool.tags : []).map(t => String(t).toLowerCase());
            for (const t of tags) {
                for (const k of kw) {
                    if (t === k || t.includes(k)) { score += 2; break; }
                }
            }
            const nameDesc = `${tool.name} ${tool.description || ''}`.toLowerCase();
            for (const k of kw) {
                if (nameDesc.includes(k)) { score += 1; break; }
            }
            return { tool, score };
        }).filter(x => x.score >= 3)
          .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name))
          .slice(0, 6)
          .map(x => x.tool);
    }

    function renderFinder(goalId) {
        const goal = FINDER_GOALS[goalId];
        if (!goal || !finderResult) return;

        const matched = scoreFinderTools(goal);
        finderResult.innerHTML = '';

        const panel = document.createElement('div');
        panel.className = 'landing-finder-panel';

        const head = document.createElement('div');
        head.className = 'landing-finder-panel-head';
        const h3 = document.createElement('h3');
        h3.textContent = goal.heading;
        head.appendChild(h3);
        const badge = document.createElement('span');
        badge.className = 'landing-finder-count';
        badge.textContent = matched.length ? `${matched.length} matched tools` : 'Curated picks';
        head.appendChild(badge);
        panel.appendChild(head);

        const chips = document.createElement('div');
        chips.className = 'landing-finder-tools';
        matched.forEach(tool => {
            const chip = document.createElement('a');
            chip.className = 'landing-finder-tool';
            chip.href = 'tools.html?q=' + encodeURIComponent(tool.name);
            chip.appendChild(makeLogo(tool, 24, 'landing-finder-tool-logo'));
            const nm = document.createElement('span');
            nm.className = 'landing-finder-tool-name';
            nm.textContent = tool.name;
            chip.appendChild(nm);
            const pr = document.createElement('span');
            pr.className = 'landing-finder-tool-meta';
            pr.textContent = pricingOf(tool);
            chip.appendChild(pr);
            chips.appendChild(chip);
        });
        panel.appendChild(chips);

        const body = document.createElement('div');
        body.className = 'landing-finder-panel-body';

        const skillsTitle = document.createElement('p');
        skillsTitle.className = 'landing-finder-label';
        skillsTitle.textContent = 'What you\u2019ll pick up';
        body.appendChild(skillsTitle);
        const skillsList = document.createElement('ul');
        skillsList.className = 'landing-finder-skills';
        goal.skills.forEach(s => {
            const li = document.createElement('li');
            li.textContent = s;
            skillsList.appendChild(li);
        });
        body.appendChild(skillsList);

        const stepTitle = document.createElement('p');
        stepTitle.className = 'landing-finder-label';
        stepTitle.textContent = 'Your first small step';
        body.appendChild(stepTitle);
        const step = document.createElement('p');
        step.className = 'landing-finder-step';
        step.textContent = goal.firstStep;
        body.appendChild(step);

        panel.appendChild(body);

        const actions = document.createElement('div');
        actions.className = 'landing-finder-panel-actions';
        const seeAll = document.createElement('a');
        seeAll.className = 'landing-button landing-button-primary';
        seeAll.href = 'tools.html?q=' + encodeURIComponent(goal.searchQuery);
        seeAll.innerHTML = 'See matching tools <i class="fas fa-arrow-right" aria-hidden="true"></i>';
        actions.appendChild(seeAll);
        const learn = document.createElement('a');
        learn.className = 'landing-button landing-button-ghost';
        learn.href = goal.learnLink;
        learn.innerHTML = '<i class="fas fa-graduation-cap" aria-hidden="true"></i> ' + goal.learnLabel;
        actions.appendChild(learn);
        panel.appendChild(actions);

        finderResult.appendChild(panel);
    }

    document.querySelectorAll('.landing-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.landing-choice').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            renderFinder(btn.dataset.goal);
        });
    });

    // --- Category grid ---
    const categoryGrid = document.getElementById('landingCategoryGrid');
    if (categoryGrid) {
        const frag = document.createDocumentFragment();
        CATEGORY_ORDER.forEach(cat => {
            const count = countByCategory(cat.id);
            const a = document.createElement('a');
            a.className = 'landing-category-card';
            a.href = 'tools.html?cat=' + encodeURIComponent(cat.id);
            const icon = document.createElement('span');
            icon.className = 'landing-category-icon';
            icon.innerHTML = `<i class="fas ${cat.icon}" aria-hidden="true"></i>`;
            a.appendChild(icon);
            const label = document.createElement('span');
            label.className = 'landing-category-label';
            label.textContent = cat.label;
            a.appendChild(label);
            const countEl = document.createElement('span');
            countEl.className = 'landing-category-count';
            countEl.textContent = count + (count === 1 ? ' tool' : ' tools');
            a.appendChild(countEl);
            frag.appendChild(a);
        });
        categoryGrid.appendChild(frag);
    }

    // --- Trending preview ---
    const trendingList = document.getElementById('landingTrendingList');
    if (trendingList) {
        const trending = TOOLS.filter(t => Array.isArray(t.badges) && (t.badges.includes('trending') || t.badges.includes('popular'))).slice(0, 8);
        const frag = document.createDocumentFragment();
        trending.forEach((tool, i) => {
            const row = document.createElement('a');
            row.className = 'landing-trending-row';
            row.href = 'tools.html?q=' + encodeURIComponent(tool.name);
            const rank = document.createElement('span');
            rank.className = 'landing-trending-rank';
            rank.textContent = i + 1;
            row.appendChild(rank);
            row.appendChild(makeLogo(tool, 30, 'landing-trending-logo'));
            const name = document.createElement('span');
            name.className = 'landing-trending-name';
            name.textContent = tool.name;
            row.appendChild(name);
            const desc = document.createElement('span');
            desc.className = 'landing-trending-desc';
            desc.textContent = (tool.description || '').substring(0, 90);
            row.appendChild(desc);
            const pricing = document.createElement('span');
            pricing.className = 'landing-trending-meta';
            pricing.textContent = pricingOf(tool);
            row.appendChild(pricing);
            frag.appendChild(row);
        });
        trendingList.appendChild(frag);
    }

    // --- Back to top ---
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        const toggleVisibility = () => {
            backToTop.classList.toggle('visible', window.scrollY > 600);
        };
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        toggleVisibility();
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
})();
