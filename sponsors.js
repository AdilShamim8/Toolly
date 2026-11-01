// Toolly — Sponsored Placements
// ---------------------------------------------------------------------------
// How sponsorship ranking works (pay more, rank higher):
//   Every entry carries a `sponsor` object with a `monthlyBid` (USD/month).
//   The renderer sorts entries by monthlyBid DESC, so the highest-paying
//   sponsor always appears first. The top 3 are featured prominently at the
//   top of the page; the rest appear when a visitor clicks "See More".
//
// Managing placements (no payment processing yet — manual invoicing):
//   1. Add or edit an entry below (name, logo, url, description, sponsor).
//   2. Set `monthlyBid` to the agreed amount; the ordering updates instantly.
//   3. Tiers are derived automatically from rank position:
//      rank 1-3   -> Platinum
//      rank 4-6   -> Gold
//      rank 7-9   -> Silver
//      rank 10+   -> Bronze
//
// The entries below are launch placements used to demonstrate the slot
// system. Replace them with paying advertisers as deals are closed.
// ---------------------------------------------------------------------------

const sponsorPlacements = [
    {
        "name": "ChatGPT",
        "description": "Conversational AI system that can engage in natural dialogues, answer questions, and assist with writing.",
        "categories": ["nlp", "productivity"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        "url": "https://chat.openai.com",
        "badges": ["featured", "trending", "freemium"],
        "tags": ["chatbot", "writing assistant", "language model"],
        "sponsor": { "monthlyBid": 500 }
    },
    {
        "name": "Cursor",
        "description": "AI-first code editor built on a VS Code fork, with deep codebase understanding, multi-file edits, and inline Copilot-style suggestions.",
        "categories": ["coding", "productivity"],
        "logo": "https://www.cursor.com/favicon.ico",
        "url": "https://www.cursor.com",
        "badges": ["featured", "freemium"],
        "tags": ["code editor", "AI pair programmer", "IDE", "productivity"],
        "sponsor": { "monthlyBid": 400 }
    },
    {
        "name": "Midjourney",
        "description": "AI art generator that creates images from text prompts.",
        "categories": ["vision", "design"],
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55bvDrwepdxIPIOM7EpQQO3wYWSaJJ1tBxw&s",
        "url": "https://www.midjourney.com",
        "badges": ["trending", "paid"],
        "tags": ["art", "image generation", "creative"],
        "sponsor": { "monthlyBid": 300 }
    },
    {
        "name": "Perplexity",
        "description": "AI-powered search engine that provides detailed, accurate answers with sources.",
        "categories": ["nlp", "research"],
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJtpuSPxCai6OZE-p61Ivmz9A_QSa414g7Q&s",
        "url": "https://www.perplexity.ai",
        "badges": ["featured", "trending", "freemium"],
        "tags": ["search", "research", "answers"],
        "sponsor": { "monthlyBid": 250 }
    },
    {
        "name": "Notion AI",
        "description": "AI writing and organization assistant integrated into Notion workspace.",
        "categories": ["productivity", "business"],
        "logo": "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        "url": "https://www.notion.so/product/ai",
        "badges": ["featured", "freemium"],
        "tags": ["writing", "organization", "productivity"],
        "sponsor": { "monthlyBid": 200 }
    },
    {
        "name": "ElevenLabs",
        "description": "Leading AI voice and audio research lab offering ultra-realistic text-to-speech, voice cloning, dubbing, and a generative audio SFX model.",
        "categories": ["audio", "nlp"],
        "logo": "https://elevenlabs.io/favicon.ico",
        "url": "https://elevenlabs.io",
        "badges": ["featured", "trending", "freemium"],
        "tags": ["text-to-speech", "voice cloning", "dubbing", "audio AI"],
        "sponsor": { "monthlyBid": 150 }
    },
    {
        "name": "Canva",
        "description": "Design platform with Magic Write and AI image tools for rapid visual content creation and templates.",
        "categories": ["design", "marketing"],
        "logo": "https://www.canva.com/favicon.ico",
        "url": "https://www.canva.com",
        "badges": ["freemium"],
        "tags": ["design", "templates", "social", "image generation"],
        "sponsor": { "monthlyBid": 120 }
    },
    {
        "name": "GitHub Copilot",
        "description": "AI pair programmer that helps you write better code by suggesting code and entire functions.",
        "categories": ["coding", "productivity"],
        "logo": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "url": "https://github.com/features/copilot",
        "badges": ["featured", "paid"],
        "tags": ["coding assistant", "autocomplete", "programming"],
        "sponsor": { "monthlyBid": 100 }
    },
    {
        "name": "Grammarly",
        "description": "AI-powered writing assistant that helps you improve grammar, spelling, and clarity in your text.",
        "categories": ["nlp", "productivity"],
        "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcc-4w3ZxZ4GkRUL-ZZ5U3PxywWaao0RitWg&s",
        "url": "https://app.grammarly.com/",
        "badges": ["featured", "freemium"],
        "tags": ["writing assistant", "grammar", "clarity", "spelling"],
        "sponsor": { "monthlyBid": 90 }
    },
    {
        "name": "Framer",
        "description": "Advanced design and prototyping tool with AI capabilities for creating interactive websites and applications.",
        "categories": ["design", "productivity"],
        "logo": "https://icons.duckduckgo.com/ip3/framer.com.ico",
        "url": "https://www.framer.com",
        "badges": ["featured", "freemium"],
        "tags": ["design", "prototyping", "interactive", "UI/UX"],
        "sponsor": { "monthlyBid": 75 }
    },
    {
        "name": "Gamma",
        "description": "AI presentation generator that creates polished decks, documents, and web pages from a single prompt.",
        "categories": ["productivity", "business", "design"],
        "logo": "https://gamma.app/favicon.ico",
        "url": "https://gamma.app",
        "badges": ["freemium"],
        "tags": ["presentations", "business", "design", "productivity"],
        "sponsor": { "monthlyBid": 60 }
    },
    {
        "name": "Ideogram",
        "description": "AI image generation platform specializing in creating high-quality images with accurate text rendering and creative visual content.",
        "categories": ["vision", "design"],
        "logo": "https://ideogram.ai/favicon.ico",
        "url": "https://ideogram.ai/t/explore",
        "badges": ["featured", "freemium"],
        "tags": ["image generation", "text rendering", "creative", "visual content"],
        "sponsor": { "monthlyBid": 50 }
    }
];

// Expose for the site renderer (scripts.js). Keep sorted by bid, highest first,
// so the ordering rule lives in one place.
window.sponsorPlacements = Array.isArray(sponsorPlacements)
    ? sponsorPlacements
        .filter(p => p && p.sponsor && typeof p.sponsor.monthlyBid === 'number' && p.sponsor.monthlyBid > 0)
        .sort((a, b) => b.sponsor.monthlyBid - a.sponsor.monthlyBid)
    : [];

function sponsorTierForRank(rank) {
    if (rank <= 3) return 'Platinum';
    if (rank <= 6) return 'Gold';
    if (rank <= 9) return 'Silver';
    return 'Bronze';
}

window.sponsorTierForRank = sponsorTierForRank;
