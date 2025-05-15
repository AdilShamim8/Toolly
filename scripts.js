// AI Tools Data (extended for demo)
const aiTools = [
    {
        name: "ChatGPT",
        description: "Conversational AI system that can engage in natural dialogues, answer questions, and assist with writing.",
        categories: ["nlp", "productivity"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        url: "https://chat.openai.com",
        badges: ["featured", "trending", "freemium"],
        tags: ["chatbot", "writing assistant", "language model"]
    },
    {
        name: "H2O.ai",
        description: "Conversational AI system that can engage in natural dialogues, answer questions, and assist with writing. ",
        categories: ["nlp", "productivity"],
        logo: "https://h2o.ai/content/experience-fragments/h2o/us/en/site/header/master/_jcr_content/root/container/header_copy/logo.coreimg.svg/1747254091042/h2o-logo.svg",
        url: "https://h2o.ai/",
        badges: ["free","featured",],
        tags: ["chatbot", "language model", "creative"]
    },
    {
        name: "Gemini",
        description: "Google's multimodal AI model that can understand and generate text, code, images, and more.",
        categories: ["nlp", "vision"],
        logo: "https://brandlogos.net/wp-content/uploads/2025/03/gemini_icon-logo_brandlogos.net_bqzeu-512x512.png",
        url: "https://deepmind.google/technologies/gemini/",
        badges: ["featured", "trending", "freemium"],
        tags: ["multimodal", "language model", "code assistant"]
    },
    {
        name: "DALL-E",
        description: "AI system that can create realistic images and art from natural language descriptions.",
        categories: ["vision", "design"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        url: "https://openai.com/dall-e-2",
        badges: ["featured", "paid"],
        tags: ["image generation", "art", "creative"]
    },
    {
        name: "GitHub Copilot",
        description: "AI pair programmer that helps you write better code by suggesting code and entire functions.",
        categories: ["coding", "productivity"],
        logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        url: "https://github.com/features/copilot",
        badges: ["featured", "paid"],
        tags: ["coding assistant", "autocomplete", "programming"]
    },
    {
        name: "Hugging Face",
        description: "Platform providing tools for building, training and deploying machine learning models, including transformers.",
        categories: ["nlp", "coding"],
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        url: "https://huggingface.co",
        badges: ["featured", "freemium"],
        tags: ["machine learning", "models", "transformers"]
    },
    {
        name: "Adobe Firefly",
        description: "Creative generative AI tools for image generation and editing integrated with Adobe products.",
        categories: ["vision", "design"],
        logo: "https://seeklogo.com/images/A/adobe-firefly-logo-862ACDBCA4-seeklogo.com.png",
        url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
        badges: ["featured", "paid"],
        tags: ["image generation", "creative tools", "adobe"]
    },
    {
        name: "Eleven Labs",
        description: "AI voice technology platform for generating natural-sounding voice content with text-to-speech.",
        categories: ["audio", "nlp"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        url: "https://elevenlabs.io",
        badges: ["featured", "freemium"],
        tags: ["voice synthesis", "text-to-speech", "ai voice"]
    },
    {
        name: "Notion AI",
        description: "AI writing assistant integrated into Notion workspace.",
        categories: ["productivity", "nlp"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        url: "https://www.notion.so/product/ai",
        badges: ["freemium"],
        tags: ["note-taking", "writing", "workspace"]
    },
    {
        name: "Descript",
        description: "AI-powered audio and video editing platform.",
        categories: ["audio", "productivity"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        url: "https://www.descript.com",
        badges: ["freemium"],
        tags: ["audio editing", "video editing", "transcription"]
    },
    {
        name: "Stable Diffusion",
        description: "Open-source AI image generation model.",
        categories: ["vision", "design"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        url: "https://stability.ai",
        badges: ["freemium"],
        tags: ["image generation", "open source", "art"]
    },
    {
        name: "Midjourney",
        description: "AI art generator that creates images from text prompts.",
        categories: ["vision", "design"],
        logo: "https://cdn.midjourney.com/favicon-32x32.png",
        url: "https://www.midjourney.com",
        badges: ["trending", "paid"],
        tags: ["art", "image generation", "creative"]
    },
    {
        name: "Claude",
        description: "Anthropic's conversational AI assistant for enterprise and research.",
        categories: ["nlp", "research"],
        logo: "https://www.anthropic.com/favicon.ico",
        url: "https://www.anthropic.com/claude",
        badges: ["freemium"],
        tags: ["chatbot", "enterprise", "assistant"]
    },
    {
        name: "Llama 2",
        description: "Meta's open large language model for research and commercial use.",
        categories: ["nlp", "research"],
        logo: "https://ai.meta.com/static/images/meta-logo.png",
        url: "https://ai.meta.com/llama/",
        badges: ["open source"],
        tags: ["language model", "meta", "open source"]
    },
    {
        name: "Canva Magic Studio",
        description: "AI-powered design tools for creating graphics, presentations, and more.",
        categories: ["design", "productivity"],
        logo: "https://static.canva.com/static/images/favicon.ico",
        url: "https://www.canva.com/magic/",
        badges: ["freemium"],
        tags: ["design", "graphics", "presentations"]
    },
    {
        name: "Synthesia",
        description: "Create AI videos from text in minutes with avatars and voiceovers.",
        categories: ["audio", "vision"],
        logo: "https://www.synthesia.io/favicon-32x32.png",
        url: "https://www.synthesia.io",
        badges: ["paid"],
        tags: ["video", "avatar", "voiceover"]
    },
    {
        name: "DeepL Translator",
        description: "AI-powered translation tool for accurate and natural translations.",
        categories: ["nlp", "productivity"],
        logo: "https://static.deepl.com/img/favicon/favicon_32.png",
        url: "https://www.deepl.com/translator",
        badges: ["freemium"],
        tags: ["translation", "languages", "writing"]
    },
    {
        name: "Otter.ai",
        description: "AI meeting assistant for real-time transcription and collaboration.",
        categories: ["audio", "productivity"],
        logo: "https://otter.ai/favicon.ico",
        url: "https://otter.ai",
        badges: ["freemium"],
        tags: ["transcription", "meetings", "collaboration"]
    },
    {
        name: "Perplexity AI",
        description: "AI-powered search and answer engine for research and productivity.",
        categories: ["nlp", "research"],
        logo: "https://www.perplexity.ai/favicon.ico",
        url: "https://www.perplexity.ai",
        badges: ["trending", "freemium"],
        tags: ["search", "answers", "assistant"]
    },
    {
        name: "RunwayML",
        description: "Creative suite for AI-powered video editing and generation.",
        categories: ["vision", "audio"],
        logo: "https://runwayml.com/favicon.ico",
        url: "https://runwayml.com",
        badges: ["freemium"],
        tags: ["video editing", "creative", "generation"]
    },
    {
        name: "Copy.ai",
        description: "AI-powered content generator for marketing, blogs, and more.",
        categories: ["nlp", "productivity"],
        logo: "https://www.copy.ai/favicon-32x32.png",
        url: "https://www.copy.ai",
        badges: ["freemium"],
        tags: ["content", "marketing", "copywriting"]
    },
    {
        name: "Soundful",
        description: "Generate royalty-free music with AI for your videos, streams, and podcasts.",
        categories: ["audio", "design"],
        logo: "https://soundful.com/favicon.ico",
        url: "https://soundful.com",
        badges: ["freemium"],
        tags: ["music", "audio", "royalty-free"]
    },
    {
        name: "QuillBot",
        description: "AI writing and paraphrasing tool for students and professionals.",
        categories: ["nlp", "productivity"],
        logo: "https://quillbot.com/favicon.ico",
        url: "https://quillbot.com",
        badges: ["freemium"],
        tags: ["writing", "paraphrasing", "grammar"]
    },
    {
        name: "Krisp",
        description: "AI-powered noise cancellation for calls and recordings.",
        categories: ["audio", "productivity"],
        logo: "https://krisp.ai/favicon.ico",
        url: "https://krisp.ai",
        badges: ["freemium"],
        tags: ["noise cancellation", "calls", "audio"]
    },
    {
        name: "Tome",
        description: "AI-powered storytelling and presentation tool.",
        categories: ["productivity", "design"],
        logo: "https://tome.app/favicon.ico",
        url: "https://tome.app",
        badges: ["trending", "freemium"],
        tags: ["presentations", "storytelling", "slides"]
    },
    {
        name: "Leonardo.Ai",
        description: "AI image generation platform for creative professionals.",
        categories: ["vision", "design"],
        logo: "https://app.leonardo.ai/favicon.ico",
        url: "https://leonardo.ai",
        badges: ["trending", "freemium"],
        tags: ["image generation", "creative", "art"]
    },
    {
        name: "Pictory",
        description: "AI video generator that turns scripts and articles into engaging videos.",
        categories: ["vision", "audio"],
        logo: "https://pictory.ai/favicon.ico",
        url: "https://pictory.ai",
        badges: ["freemium"],
        tags: ["video", "script", "editing"]
    },
    {
        name: "AIVA",
        description: "AI music composition assistant for creators and professionals.",
        categories: ["audio", "design"],
        logo: "https://www.aiva.ai/favicon.ico",
        url: "https://www.aiva.ai",
        badges: ["freemium"],
        tags: ["music", "composition", "audio"]
    },
    {
        name: "Grammarly",
        description: "AI-powered writing assistant that helps improve your writing.",
        categories: ["nlp", "productivity"],
        logo: "https://static.grammarly.com/assets/files/cb6ce17d281d15f2c819035bcd430b0e/grammarly_logo.svg",
        url: "https://www.grammarly.com",
        badges: ["freemium"],
        tags: ["writing", "grammar", "assistant"]
    },
    {
        name: "Google Bard",
        description: "Conversational generative AI chatbot developed by Google.",
        categories: ["nlp", "productivity"],
        logo: "https://www.gstatic.com/lamda/images/favicon_v2_32.png",
        url: "https://bard.google.com",
        badges: ["trending", "freemium"],
        tags: ["chatbot", "google", "language model"]
    },
    {
        name: "Microsoft Copilot",
        description: "AI assistant integrated into Microsoft 365, Edge, and Bing for productivity and search.",
        categories: ["productivity", "coding", "nlp"],
        logo: "https://copilot.microsoft.com/favicon.ico",
        url: "https://copilot.microsoft.com",
        badges: ["featured", "freemium"],
        tags: ["assistant", "office", "search"]
    },
    {
        name: "OpenAI Whisper",
        description: "Automatic speech recognition system trained on a large dataset of diverse audio.",
        categories: ["audio", "nlp"],
        logo: "https://openai.com/favicon.ico",
        url: "https://openai.com/research/whisper",
        badges: ["open source"],
        tags: ["speech recognition", "transcription", "audio"]
    },
    {
        name: "Suno AI",
        description: "AI music generation platform for creating songs and soundtracks.",
        categories: ["audio", "design"],
        logo: "https://app.suno.ai/favicon.ico",
        url: "https://suno.ai",
        badges: ["trending", "freemium"],
        tags: ["music", "generation", "audio"]
    },
    {
        name: "You.com",
        description: "AI-powered search engine with chat, writing, and coding features.",
        categories: ["nlp", "productivity", "coding"],
        logo: "https://you.com/favicon.ico",
        url: "https://you.com",
        badges: ["freemium"],
        tags: ["search", "assistant", "writing"]
    },
    {
        name: "Replika",
        description: "AI companion chatbot for conversation and emotional support.",
        categories: ["nlp", "productivity"],
        logo: "https://replika.com/favicon.ico",
        url: "https://replika.com",
        badges: ["freemium"],
        tags: ["chatbot", "companion", "emotional support"]
    },
    {
        name: "DeepMind AlphaFold",
        description: "AI system that predicts 3D structures of proteins with high accuracy.",
        categories: ["research", "vision"],
        logo: "https://www.deepmind.com/favicon.ico",
        url: "https://alphafold.ebi.ac.uk",
        badges: ["open source", "featured"],
        tags: ["protein folding", "biology", "science"]
    },
    {
        name: "FaceApp",
        description: "AI photo editing app for face transformations and filters.",
        categories: ["vision", "design"],
        logo: "https://static.faceapp.com/favicon.ico",
        url: "https://www.faceapp.com",
        badges: ["trending", "freemium"],
        tags: ["photo editing", "filters", "face"]
    },
    {
        name: "Remove.bg",
        description: "AI tool to remove image backgrounds automatically.",
        categories: ["vision", "design"],
        logo: "https://www.remove.bg/favicon.ico",
        url: "https://www.remove.bg",
        badges: ["freemium"],
        tags: ["background removal", "image editing", "photo"]
    },
    {
        name: "ChatSonic",
        description: "Conversational AI chatbot for content creation and search.",
        categories: ["nlp", "productivity"],
        logo: "https://app.writesonic.com/favicon.ico",
        url: "https://writesonic.com/chatsonic",
        badges: ["trending", "freemium"],
        tags: ["chatbot", "content", "search"]
    },
    {
        name: "Jasper Art",
        description: "AI art generator for creating unique images from text prompts.",
        categories: ["vision", "design"],
        logo: "https://www.jasper.ai/favicon.ico",
        url: "https://www.jasper.ai/art",
        badges: ["freemium"],
        tags: ["art", "image generation", "creative"]
    },
    {
        name: "Synthesys",
        description: "AI voiceover and video creation platform for content creators.",
        categories: ["audio", "vision"],
        logo: "https://synthesys.io/favicon.ico",
        url: "https://synthesys.io",
        badges: ["freemium"],
        tags: ["voiceover", "video", "content"]
    },
    {
        name: "Play.ht",
        description: "AI-powered text-to-speech platform with realistic voices.",
        categories: ["audio", "nlp"],
        logo: "https://play.ht/favicon.ico",
        url: "https://play.ht",
        badges: ["freemium"],
        tags: ["text-to-speech", "audio", "voice"]
    },
    {
        name: "Lensa AI",
        description: "AI photo editor for creating avatars and enhancing selfies.",
        categories: ["vision", "design"],
        logo: "https://lensa-ai.com/favicon.ico",
        url: "https://lensa-ai.com",
        badges: ["trending", "freemium"],
        tags: ["photo editing", "avatar", "selfie"]
    },
    {
        name: "PhotoRoom",
        description: "AI photo studio for background removal and product images.",
        categories: ["vision", "design", "productivity"],
        logo: "https://www.photoroom.com/favicon.ico",
        url: "https://www.photoroom.com",
        badges: ["freemium"],
        tags: ["photo editing", "background removal", "studio"]
    },
    {
        name: "Descript Overdub",
        description: "AI voice cloning tool for creating ultra-realistic voiceovers.",
        categories: ["audio", "productivity"],
        logo: "https://www.descript.com/favicon.ico",
        url: "https://www.descript.com/overdub",
        badges: ["freemium"],
        tags: ["voice cloning", "voiceover", "audio"]
    },
    {
        name: "Speechify",
        description: "AI text-to-speech reader for listening to documents and web pages.",
        categories: ["audio", "nlp", "productivity"],
        logo: "https://speechify.com/favicon.ico",
        url: "https://speechify.com",
        badges: ["freemium"],
        tags: ["text-to-speech", "reading", "audio"]
    },
    {
        name: "CopyMonkey",
        description: "AI tool for generating and optimizing Amazon product listings.",
        categories: ["nlp", "productivity"],
        logo: "https://copymonkey.ai/favicon.ico",
        url: "https://copymonkey.ai",
        badges: ["freemium"],
        tags: ["ecommerce", "copywriting", "amazon"]
    },
    {
        name: "SurferSEO",
        description: "AI-powered SEO tool for content optimization and strategy.",
        categories: ["nlp", "productivity"],
        logo: "https://surferseo.com/favicon.ico",
        url: "https://surferseo.com",
        badges: ["freemium"],
        tags: ["seo", "content", "optimization"]
    },
    {
        name: "Writesonic",
        description: "AI writing platform for blogs, ads, emails, and more.",
        categories: ["nlp", "productivity"],
        logo: "https://writesonic.com/favicon.ico",
        url: "https://writesonic.com",
        badges: ["trending", "freemium"],
        tags: ["writing", "content", "copywriting"]
    },
    {
        name: "DeepL Write",
        description: "AI writing assistant for clear, compelling communication.",
        categories: ["nlp", "productivity"],
        logo: "https://static.deepl.com/img/favicon/favicon_32.png",
        url: "https://www.deepl.com/write",
        badges: ["freemium"],
        tags: ["writing", "assistant", "clarity"]
    },
    {
        name: "Papercup",
        description: "AI dubbing and voiceover for video localization.",
        categories: ["audio", "vision"],
        logo: "https://www.papercup.com/favicon.ico",
        url: "https://www.papercup.com",
        badges: ["freemium"],
        tags: ["dubbing", "voiceover", "localization"]
    },
    {
        name: "Synthesia STUDIO",
        description: "Create AI videos with avatars in minutes.",
        categories: ["vision", "audio"],
        logo: "https://www.synthesia.io/favicon-32x32.png",
        url: "https://www.synthesia.io/studio",
        badges: ["paid"],
        tags: ["video", "avatar", "studio"]
    },
    {
        name: "Murf AI",
        description: "AI voice generator for studio-quality voiceovers.",
        categories: ["audio", "productivity"],
        logo: "https://murf.ai/favicon.ico",
        url: "https://murf.ai",
        badges: ["freemium"],
        tags: ["voiceover", "audio", "generator"]
    },
    {
        name: "HeyGen",
        description: "AI video creation with talking avatars.",
        categories: ["vision", "audio"],
        logo: "https://www.heygen.com/favicon.ico",
        url: "https://www.heygen.com",
        badges: ["trending", "freemium"],
        tags: ["video", "avatar", "creation"]
    },
    {
        name: "Kaiber",
        description: "AI video generator for music videos and animations.",
        categories: ["vision", "design"],
        logo: "https://www.kaiber.ai/favicon.ico",
        url: "https://www.kaiber.ai",
        badges: ["freemium"],
        tags: ["video", "animation", "music"]
    },
    {
        name: "Cleanup.pictures",
        description: "Remove unwanted objects from images with AI.",
        categories: ["vision", "design"],
        logo: "https://cleanup.pictures/favicon.ico",
        url: "https://cleanup.pictures",
        badges: ["freemium"],
        tags: ["image editing", "cleanup", "photo"]
    },
    {
        name: "DreamStudio",
        description: "Create images from text with Stable Diffusion.",
        categories: ["vision", "design"],
        logo: "https://dreamstudio.ai/favicon.ico",
        url: "https://dreamstudio.ai",
        badges: ["freemium"],
        tags: ["image generation", "art", "diffusion"]
    },
    {
        name: "NightCafe",
        description: "AI art generator using multiple models.",
        categories: ["vision", "design"],
        logo: "https://creator.nightcafe.studio/favicon.ico",
        url: "https://creator.nightcafe.studio",
        badges: ["freemium"],
        tags: ["art", "image generation", "creative"]
    },
    {
        name: "Craiyon",
        description: "AI image generator formerly known as DALL-E Mini.",
        categories: ["vision", "design"],
        logo: "https://www.craiyon.com/favicon.ico",
        url: "https://www.craiyon.com",
        badges: ["freemium"],
        tags: ["image generation", "art", "mini"]
    },
    {
        name: "Veed.io",
        description: "Online video editing with AI features.",
        categories: ["vision", "audio", "productivity"],
        logo: "https://www.veed.io/favicon.ico",
        url: "https://www.veed.io",
        badges: ["freemium"],
        tags: ["video editing", "audio", "online"]
    },
    {
        name: "Descript Studio Sound",
        description: "AI audio enhancement for studio-quality sound.",
        categories: ["audio", "productivity"],
        logo: "https://www.descript.com/favicon.ico",
        url: "https://www.descript.com/studio-sound",
        badges: ["freemium"],
        tags: ["audio", "enhancement", "studio"]
    },
    {
        name: "Auphonic",
        description: "AI audio post-production for podcasts and videos.",
        categories: ["audio", "productivity"],
        logo: "https://auphonic.com/favicon.ico",
        url: "https://auphonic.com",
        badges: ["freemium"],
        tags: ["audio", "post-production", "podcast"]
    },
    {
        name: "Fotor GoArt",
        description: "AI art generator for turning photos into paintings.",
        categories: ["vision", "design"],
        logo: "https://www.fotor.com/favicon.ico",
        url: "https://www.fotor.com/goart",
        badges: ["freemium"],
        tags: ["art", "painting", "photo"]
    },
    {
        name: "Remini",
        description: "AI photo enhancer for restoring old images.",
        categories: ["vision", "design"],
        logo: "https://www.remini.ai/favicon.ico",
        url: "https://www.remini.ai",
        badges: ["freemium"],
        tags: ["photo", "enhancer", "restoration"]
    },
    {
        name: "Let's Enhance",
        description: "AI image upscaler and enhancer.",
        categories: ["vision", "design"],
        logo: "https://letsenhance.io/favicon.ico",
        url: "https://letsenhance.io",
        badges: ["freemium"],
        tags: ["upscaling", "enhancer", "photo"]
    },
    {
        name: "Remove Objects",
        description: "Remove objects from photos with AI.",
        categories: ["vision", "design"],
        logo: "https://www.remove.bg/favicon.ico",
        url: "https://www.remove.bg/remove-objects",
        badges: ["freemium"],
        tags: ["object removal", "photo", "editing"]
    },
    {
        name: "PhotoAI",
        description: "AI headshots and portraits from your selfies.",
        categories: ["vision", "design"],
        logo: "https://photoai.com/favicon.ico",
        url: "https://photoai.com",
        badges: ["freemium"],
        tags: ["headshot", "portrait", "photo"]
    },
    {
        name: "Avatarify",
        description: "Create animated avatars from photos.",
        categories: ["vision", "design"],
        logo: "https://avatarify.ai/favicon.ico",
        url: "https://avatarify.ai",
        badges: ["freemium"],
        tags: ["avatar", "animation", "photo"]
    },
    {
        name: "Deep Nostalgia",
        description: "Animate old family photos with AI.",
        categories: ["vision", "design"],
        logo: "https://www.myheritage.com/favicon.ico",
        url: "https://www.myheritage.com/deep-nostalgia",
        badges: ["freemium"],
        tags: ["animation", "photo", "nostalgia"]
    },
    {
        name: "Deep Dream Generator",
        description: "Create dream-like images with neural networks.",
        categories: ["vision", "design"],
        logo: "https://deepdreamgenerator.com/favicon.ico",
        url: "https://deepdreamgenerator.com",
        badges: ["freemium"],
        tags: ["dream", "image", "generator"]
    },
    {
        name: "Bigjpg",
        description: "AI image enlarger for photos and artwork.",
        categories: ["vision", "design"],
        logo: "https://bigjpg.com/favicon.ico",
        url: "https://bigjpg.com",
        badges: ["freemium"],
        tags: ["enlarger", "photo", "artwork"]
    },
    {
        name: "VanceAI",
        description: "AI photo enhancer, upscaler, and background remover.",
        categories: ["vision", "design"],
        logo: "https://vanceai.com/favicon.ico",
        url: "https://vanceai.com",
        badges: ["freemium"],
        tags: ["enhancer", "upscaler", "remover"]
    },
    {
        name: "PaintsChainer",
        description: "AI automatic coloring for sketches and manga.",
        categories: ["vision", "design"],
        logo: "https://paintschainer.preferred.tech/favicon.ico",
        url: "https://paintschainer.preferred.tech",
        badges: ["freemium"],
        tags: ["coloring", "sketch", "manga"]
    },
    {
        name: "Artbreeder",
        description: "Create and explore images with genetic algorithms.",
        categories: ["vision", "design"],
        logo: "https://www.artbreeder.com/favicon.ico",
        url: "https://www.artbreeder.com",
        badges: ["freemium"],
        tags: ["image", "genetic", "art"]
    },
    {
        name: "Wombo Dream",
        description: "AI-powered art generator from text prompts.",
        categories: ["vision", "design"],
        logo: "https://www.wombo.art/favicon.ico",
        url: "https://www.wombo.art",
        badges: ["freemium"],
        tags: ["art", "generator", "dream"]
    },
    {
        name: "DeepArt",
        description: "Turn photos into artwork with neural networks.",
        categories: ["vision", "design"],
        logo: "https://deepart.io/favicon.ico",
        url: "https://deepart.io",
        badges: ["freemium"],
        tags: ["artwork", "photo", "neural"]
    },
    {
        name: "AI Picasso",
        description: "Create Picasso-style art from your photos.",
        categories: ["vision", "design"],
        logo: "https://aipicasso.app/favicon.ico",
        url: "https://aipicasso.app",
        badges: ["freemium"],
        tags: ["picasso", "art", "photo"]
    },
    {
        name: "Toongineer Cartoonizer",
        description: "Turn photos into cartoons with AI.",
        categories: ["vision", "design"],
        logo: "https://www.vanceai.com/favicon.ico",
        url: "https://www.vanceai.com/toongineer-cartoonizer/",
        badges: ["freemium"],
        tags: ["cartoon", "photo", "art"]
    },
    {
        name: "Cartoonify",
        description: "Cartoon yourself online with AI.",
        categories: ["vision", "design"],
        logo: "https://www.cartoonify.de/favicon.ico",
        url: "https://www.cartoonify.de",
        badges: ["freemium"],
        tags: ["cartoon", "photo", "avatar"]
    },
    {
        name: "AISEO",
        description: "AI-powered SEO content generator.",
        categories: ["nlp", "productivity"],
        logo: "https://aiseo.ai/favicon.ico",
        url: "https://aiseo.ai",
        badges: ["freemium"],
        tags: ["seo", "content", "writing"]
    },
    {
        name: "INK",
        description: "AI writing and SEO assistant.",
        categories: ["nlp", "productivity"],
        logo: "https://inkforall.com/favicon.ico",
        url: "https://inkforall.com",
        badges: ["freemium"],
        tags: ["writing", "seo", "assistant"]
    },
    {
        name: "Rytr",
        description: "AI writing assistant for blogs, emails, and more.",
        categories: ["nlp", "productivity"],
        logo: "https://rytr.me/favicon.ico",
        url: "https://rytr.me",
        badges: ["freemium"],
        tags: ["writing", "assistant", "content"]
    },
    {
        name: "Frase.io",
        description: "AI-powered content research and optimization.",
        categories: ["nlp", "productivity"],
        logo: "https://www.frase.io/favicon.ico",
        url: "https://www.frase.io",
        badges: ["freemium"],
        tags: ["content", "research", "optimization"]
    },
    {
        name: "LongShot AI",
        description: "AI writing assistant for long-form content.",
        categories: ["nlp", "productivity"],
        logo: "https://www.longshot.ai/favicon.ico",
        url: "https://www.longshot.ai",
        badges: ["freemium"],
        tags: ["writing", "long-form", "content"]
    },
    {
        name: "Wordtune",
        description: "AI-powered writing companion for better sentences.",
        categories: ["nlp", "productivity"],
        logo: "https://www.wordtune.com/favicon.ico",
        url: "https://www.wordtune.com",
        badges: ["freemium"],
        tags: ["writing", "companion", "sentences"]
    },
    {
        name: "HyperWrite",
        description: "AI writing assistant for emails, blogs, and more.",
        categories: ["nlp", "productivity"],
        logo: "https://hyperwriteai.com/favicon.ico",
        url: "https://hyperwriteai.com",
        badges: ["freemium"],
        tags: ["writing", "assistant", "content"]
    },
    {
        name: "Sudowrite",
        description: "AI writing tool for creative writers.",
        categories: ["nlp", "productivity"],
        logo: "https://www.sudowrite.com/favicon.ico",
        url: "https://www.sudowrite.com",
        badges: ["freemium"],
        tags: ["writing", "creative", "assistant"]
    },
    {
        name: "NovelAI",
        description: "AI-powered storytelling and novel writing.",
        categories: ["nlp", "productivity"],
        logo: "https://novelai.net/favicon.ico",
        url: "https://novelai.net",
        badges: ["freemium"],
        tags: ["storytelling", "writing", "novel"]
    },
    {
        name: "AI Dungeon",
        description: "AI-powered text adventure game.",
        categories: ["nlp", "productivity"],
        logo: "https://play.aidungeon.io/favicon.ico",
        url: "https://play.aidungeon.io",
        badges: ["freemium"],
        tags: ["game", "adventure", "text"]
    },
    {
        name: "ShortlyAI",
        description: "AI writing assistant for short-form content.",
        categories: ["nlp", "productivity"],
        logo: "https://www.shortlyai.com/favicon.ico",
        url: "https://www.shortlyai.com",
        badges: ["freemium"],
        tags: ["writing", "short-form", "assistant"]
    },
    {
        name: "CopySmith",
        description: "AI copywriting tool for ads, emails, and more.",
        categories: ["nlp", "productivity"],
        logo: "https://copysmith.ai/favicon.ico",
        url: "https://copysmith.ai",
        badges: ["freemium"],
        tags: ["copywriting", "ads", "emails"]
    },
    {
        name: "Peppertype.ai",
        description: "AI content generation for marketers and creators.",
        categories: ["nlp", "productivity"],
        logo: "https://www.peppertype.ai/favicon.ico",
        url: "https://www.peppertype.ai",
        badges: ["freemium"],
        tags: ["content", "generation", "marketing"]
    },
    {
        name: "Writesonic Photosonic",
        description: "AI art generator by Writesonic.",
        categories: ["vision", "design"],
        logo: "https://writesonic.com/favicon.ico",
        url: "https://writesonic.com/photosonic",
        badges: ["freemium"],
        tags: ["art", "image generation", "photosonic"]
    },
    {
        name: "Cleanup AI",
        description: "Remove unwanted elements from images.",
        categories: ["vision", "design"],
        logo: "https://cleanup.pictures/favicon.ico",
        url: "https://cleanup.pictures/ai",
        badges: ["freemium"],
        tags: ["cleanup", "image", "removal"]
    },
    {
        name: "Remove Watermark AI",
        description: "Remove watermarks from images with AI.",
        categories: ["vision", "design"],
        logo: "https://www.remove.bg/favicon.ico",
        url: "https://www.remove.bg/remove-watermark",
        badges: ["freemium"],
        tags: ["watermark", "removal", "image"]
    },
    {
        name: "AI Portraits",
        description: "Create AI-generated portraits from photos.",
        categories: ["vision", "design"],
        logo: "https://aiportraits.com/favicon.ico",
        url: "https://aiportraits.com",
        badges: ["freemium"],
        tags: ["portrait", "photo", "art"]
    },
    {
        name: "DeepSwap",
        description: "AI face swap for photos and videos.",
        categories: ["vision", "design"],
        logo: "https://www.deepswap.ai/favicon.ico",
        url: "https://www.deepswap.ai",
        badges: ["freemium"],
        tags: ["face swap", "photo", "video"]
    },
    {
        name: "FaceMagic",
        description: "AI face swap and morphing app.",
        categories: ["vision", "design"],
        logo: "https://www.facemagic.ai/favicon.ico",
        url: "https://www.facemagic.ai",
        badges: ["freemium"],
        tags: ["face swap", "morphing", "photo"]
    },
    {
        name: "Avatar AI",
        description: "Create AI avatars for social media and games.",
        categories: ["vision", "design"],
        logo: "https://avatarai.me/favicon.ico",
        url: "https://avatarai.me",
        badges: ["freemium"],
        tags: ["avatar", "photo", "social"]
    },
    {
        name: "ProfilePicture.AI",
        description: "Generate professional profile pictures with AI.",
        categories: ["vision", "design"],
        logo: "https://profilepicture.ai/favicon.ico",
        url: "https://profilepicture.ai",
        badges: ["freemium"],
        tags: ["profile", "photo", "avatar"]
    },
    {
        name: "PhotoFunia AI",
        description: "Fun photo effects and filters with AI.",
        categories: ["vision", "design"],
        logo: "https://photofunia.com/favicon.ico",
        url: "https://photofunia.com",
        badges: ["freemium"],
        tags: ["photo", "effects", "fun"]
    }
];

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const backToTopButton = document.getElementById('backToTop');
const toolCount = document.getElementById('toolCount');
const categoryList = document.getElementById('categoryList');
const sortSelect = document.getElementById('sortSelect');

let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';

function renderTools() {
    // Filter
    let filtered = aiTools.filter(tool => {
        const matchesCategory = currentCategory === 'all' || tool.categories.includes(currentCategory);
        const matchesSearch =
            tool.name.toLowerCase().includes(currentSearch) ||
            tool.description.toLowerCase().includes(currentSearch) ||
            (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(currentSearch)));
        return matchesCategory && matchesSearch;
    });
    // Sort
    if (currentSort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'featured') {
        filtered.sort((a, b) => (b.badges?.includes('featured') ? 1 : 0) - (a.badges?.includes('featured') ? 1 : 0));
    }
    // Render
    toolsGrid.innerHTML = '';
    filtered.forEach(tool => toolsGrid.appendChild(createToolCard(tool)));
    toolCount.textContent = `Showing ${filtered.length} tool${filtered.length !== 1 ? 's' : ''}`;
}

function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    // Header
    const header = document.createElement('div');
    header.className = 'tool-header';
    const logo = document.createElement('img');
    logo.className = 'tool-logo';
    logo.src = tool.logo;
    logo.alt = `${tool.name} logo`;
    header.appendChild(logo);
    const name = document.createElement('h3');
    name.className = 'tool-name';
    name.textContent = tool.name;
    header.appendChild(name);
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
    // Description
    const desc = document.createElement('p');
    desc.className = 'tool-description';
    desc.textContent = tool.description;
    card.appendChild(desc);
    // Tags
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
    if (tool.tags && tool.tags.length) {
        const tags = document.createElement('div');
        tags.className = 'tool-tags';
        tool.tags.forEach(t => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = t;
            tags.appendChild(tag);
        });
        card.appendChild(tags);
    }
    // Link
    const link = document.createElement('a');
    link.className = 'tool-link';
    link.href = tool.url;
    link.target = '_blank';
    link.textContent = 'Visit Site';
    card.appendChild(link);
    return card;
}

function categoryLabel(cat) {
    switch (cat) {
        case 'nlp': return 'Natural Language Processing';
        case 'vision': return 'Computer Vision';
        case 'audio': return 'Audio/Video';
        case 'design': return 'Design';
        case 'coding': return 'Developer Tools';
        case 'productivity': return 'Productivity';
        case 'research': return 'Research';
        default: return cat;
    }
}

// Sidebar category click
if (categoryList) {
    categoryList.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            categoryList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderTools();
        }
    });
}
// Search
if (searchInput) {
    searchInput.addEventListener('input', e => {
        currentSearch = e.target.value.toLowerCase();
        renderTools();
    });
}
// Sort
if (sortSelect) {
    sortSelect.addEventListener('change', e => {
        currentSort = e.target.value;
        renderTools();
    });
}
// Back to top
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
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
}
function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
}
if (sidebarToggle) {
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

// Initial render
renderTools(); 