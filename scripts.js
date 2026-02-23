// AI Tools Data 
const aiTools = [
    {
        name: "H2O.ai",
        description: "Open-source AI platform for machine learning and data science with automated ML capabilities.",
        categories: ["data-science"],
        logo: "https://www.h2o.ai/favicon.ico",
        url: "https://www.h2o.ai",
        badges: ["open source", "freemium"],
        tags: ["machine learning", "automated ML", "open source", "analytics"]
    },
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
        name: "LMAreana",
        description: "Platform for comparing and evaluating large language models through interactive benchmarks and community voting.",
        categories: ["nlp", "research"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeov_4j1_IJdFiiIUYoG6ddn12YsatqBtD8g&s",
        url: "https://lmarena.ai/",
        badges: ["freemium"],
        tags: ["language models", "benchmarking", "evaluation", "comparison"]
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
        name: "Perplexity",
        description: "AI-powered search engine that provides detailed, accurate answers with sources.",
        categories: ["nlp", "research"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJtpuSPxCai6OZE-p61Ivmz9A_QSa414g7Q&s",
        url: "https://www.perplexity.ai",
        badges: ["featured","trending", "freemium"],
        tags: ["search", "research", "answers"]
    },
    {
        name: "Grok",
        description: "X's AI assistant with real-time knowledge and a rebellious streak. Known for its witty responses and ability to access current information.",
        categories: ["nlp", "productivity"],
        logo: "https://pngdownload.io/wp-content/uploads/2025/05/Grok-Logo-xAI-Futuristic-AI.webp",
        url: "https://grok.x.ai",
        badges: ["trending"],
        tags: ["chatbot", "assistant", "real-time", "x", "twitter"]
    },
    {
        name: "DeepSeek",
        description: "Advanced AI research platform focused on deep learning and neural networks. Offers powerful tools for AI development and experimentation.",
        categories: ["research", "coding"],
        logo: "https://logosandtypes.com/wp-content/uploads/2025/02/Deepseek.png",
        url: "https://deepseek.com",
        badges: ["featured"],
        tags: ["research", "deep learning", "neural networks", "development"]
    },
    {
        name: "Mistral AI",
        description: "Open-source AI model provider offering powerful language models and APIs for developers. Known for efficient and high-performance models.",
        categories: ["nlp", "coding"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/800px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png",
        url: "https://mistral.ai",
        badges: ["featured"],
        tags: ["language model", "open source", "API", "development"]
    },
    {
        name: "Black Box",
        description: "AI-powered code search and development tool that helps developers find and understand code faster. Integrates with popular IDEs.",
        categories: ["coding", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1FupX171I8BqEXT6ZfFivUbCv2Y8rme_Mw&s",
        url: "https://blackbox.ai",
        badges: ["featured"],
        tags: ["code search", "development", "IDE", "productivity"]
    },
    {
        name: "Google AI Studio",
        description: "A web-based tool for prototyping and experimenting with Google\'s generative AI models.",
        categories: ["coding", "productivity", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSyDw5dgzQ31DkG4WLNr4e11unIerY_dNmw&s", 
        url: "https://aistudio.google.com/prompts/new_chat",
        badges: ["freemium", "featured"],
        tags: ["generative AI", "prototyping", "experimentation", "google"]
    },
    {
        name: "Sora",
        description: "OpenAI's revolutionary text-to-video model that can create realistic and imaginative video scenes from text descriptions. Known for its ability to generate high-quality, coherent videos with complex camera movements and detailed scenes.",
        categories: ["video", "vision"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROcrc2VQ9_5l7PiOYPcHmb-_ezQDo_9JMYVg&s",
        url: "https://openai.com/sora",
        badges: ["featured", "trending"],
        tags: ["video generation", "text-to-video", "openai", "creative"]
    },
    {
        name: "Manus",
        description: "AI-powered hand tracking and gesture recognition platform. Enables natural interaction with digital interfaces through hand movements.",
        categories: ["vision", "productivity"],
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/manus.png",
        url: "https://manus.im/app",
        badges: ["trending"],
        tags: ["hand tracking", "gesture recognition", "interaction", "VR"]
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
        name: "Microsoft Copilot",
        description: "AI assistant integrated into Microsoft 365, Edge, and Bing for productivity and search.",
        categories: ["productivity", "coding", "nlp"],
        logo: "https://copilot.microsoft.com/favicon.ico",
        url: "https://copilot.microsoft.com",
        badges: ["featured", "freemium"],
        tags: ["assistant", "office", "search"]
    },
    {
        name: "Napkin AI",
        description: "Free during beta – full functionality currently at no cost. Create up to 3 visuals on the Starter plan even outside beta.",
        categories: ["design", "productivity"],
        logo: "https://napkin.ai/favicon.ico",
        url: "https://napkin.ai",
        badges: ["freemium", "beta"],
        tags: ["visuals", "design", "image generation"]
    },
    {
        name: "Bolt",
        description: "AI-powered platform for building, running, and deploying full-stack web and mobile applications with an intuitive interface.",
        categories: ["coding", "productivity"],
        logo: "https://cdn.prod.website-files.com/67a7a72aaa234d97b135b849/67bb57c7c62011c3b511a874_bolt-new-logo.png",
        url: "https://bolt.new",
        badges: ["featured", "trending"],
        tags: ["web development", "mobile apps", "full-stack", "deployment"]
    },
    {
        name: "Windsurf",
        description: "Purpose-built IDE with AI capabilities for enhanced development workflow, featuring smart code suggestions, real-time collaboration, and advanced debugging tools.",
        categories: ["coding", "productivity"],
        logo: "https://windsurf.com/favicon.ico",
        url: "https://windsurf.com",
        badges: ["featured", "trending"],
        tags: ["IDE", "development", "collaboration", "debugging"]
    },
    {
        name: "Quadratic",
        description: "AI-powered spreadsheet and data analysis platform with advanced automation capabilities.",
        categories: ["productivity", "data-science"],
        logo: "https://media2.dev.to/dynamic/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F10472%2F5ec582d6-eb59-4e06-8d88-78c873f6dcfd.png",
        url: "https://app.quadratichq.com/",
        badges: ["featured", "freemium"],
        tags: ["spreadsheet", "data analysis", "automation", "productivity"]
    },
    {
        name: "Grammarly",
        description: "AI-powered writing assistant that helps you improve grammar, spelling, and clarity in your text.",
        categories: ["writing", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcc-4w3ZxZ4GkRUL-ZZ5U3PxywWaao0RitWg&s",
        url: "https://app.grammarly.com/",
        badges: ["featured", "freemium"],
        tags: ["writing assistant", "grammar", "clarity", "spelling"]
    },
    {
        name: "HeyGen",
        description: "AI video creation with talking avatars.",
        categories: ["vision", "audio"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQlCfMbE0lUoY428MTly4cyHylVHgx9xlVQ&s",
        url: "https://www.heygen.com",
        badges: ["trending", "freemium"],
        tags: ["video", "avatar", "creation"]
    },
    {
        name: "Soundraw",
        description: "AI music generator that creates royalty-free music for videos, games, and podcasts. Features customizable tracks with mood, genre, and length controls.",
        categories: ["audio", "design"],
        logo: "https://images.sxsw.com/fcA56uPNMovhta-tCqj1-bmptVI=/0x0:5000x5000/950x950/images.sxsw.com/174/6cc79338-ecfb-4154-a56c-f85932e79960/SalesClient-6002",
        url: "https://soundraw.io",
        badges: ["featured", "freemium"],
        tags: ["music generation", "royalty-free", "audio", "creative"]
    },
    {
        name: "OpenAI Codex",
        description: "Advanced AI system that translates natural language to code. Powers GitHub Copilot and provides powerful code generation capabilities.",
        categories: ["coding", "nlp"],
        logo: "https://openai.com/favicon.ico",
        url: "https://openai.com/codex",
        badges: ["featured"],
        tags: ["code generation", "programming", "openai", "development"]
    },
    {
        name: "n8n.io",
        description: "Open-source workflow automation platform that allows you to connect different services and automate tasks. Features a visual workflow editor and extensive integration capabilities.",
        categories: ["productivity", "coding"],
        logo: "https://n8n.io/favicon.ico",
        url: "https://n8n.io",
        badges: ["open source", "freemium"],
        tags: ["workflow automation", "integration", "open source", "productivity"]
    },
    {
        name: "Make.com",
        description: "Powerful automation platform (formerly Integromat) that enables complex workflow automation between apps and services. Features visual scenario builder and advanced automation capabilities.",
        categories: ["productivity", "business"],
        logo: "https://www.make.com/favicon.ico",
        url: "https://www.make.com",
        badges: ["featured", "freemium"],
        tags: ["automation", "workflow", "integration", "business"]
    },
    {
        name: "Codeium",
        description: "Free AI code completion tool that works across multiple IDEs. Offers intelligent code suggestions and real-time assistance.",
        categories: ["coding"],
        logo: "https://codeium.com/favicon.ico",
        url: "https://codeium.com",
        badges: ["free", "trending"],
        tags: ["code completion", "IDE", "programming", "development"]
    },
    {
        name: "PolyCoder",
        description: "Open-source code generation model trained on multiple programming languages. Provides accurate code suggestions and completions.",
        categories: ["coding", "research"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Polycode_Logo.png",
        url: "https://github.com/VHellendoorn/Code-LMs",
        badges: ["open source"],
        tags: ["code generation", "open source", "programming", "research"]
    },
    {
        name: "Replit Ghostwriter",
        description: "AI pair programmer integrated into Replit's online IDE. Provides real-time code suggestions and explanations.",
        categories: ["coding", "productivity"],
        logo: "https://cdn.sanity.io/images/bj34pdbp/migration/7d06c37d899d8ba6419b2a9484dfe44586e70081-794x872.png",
        url: "https://replit.com/ghostwriter",
        badges: ["featured", "freemium"],
        tags: ["code completion", "IDE", "programming", "education"]
    },
    {
        name: "Amazon CodeWhisperer",
        description: "AI coding companion that provides real-time code suggestions and security scanning. Integrated with popular IDEs.",
        categories: ["coding", "productivity"],
        logo: "https://aws.amazon.com/favicon.ico",
        url: "https://aws.amazon.com/codewhisperer",
        badges: ["featured", "freemium"],
        tags: ["code completion", "security", "aws", "development"]
    },
    {
        name: "Jasper AI",
        description: "Enterprise-grade AI content platform for marketing teams and businesses. Features advanced copywriting, content generation, and brand voice customization.",
        categories: ["marketing", "business", "productivity"],
        logo: "https://img.icons8.com/?size=512&id=ij6f4GUUwLE8&format=png",
        url: "https://www.jasper.ai",
        badges: ["featured", "paid"],
        tags: ["content creation", "marketing", "copywriting", "enterprise"]
    },
    {
        name: "Pika",
        description: "AI-powered video generation platform that creates high-quality videos from text prompts. Known for its ability to generate cinematic and artistic video content.",
        categories: ["video", "design"],
        logo: "https://pika.art/favicon.ico",
        url: "https://pika.art",
        badges: ["trending", "freemium"],
        tags: ["video generation", "text-to-video", "creative", "cinematic"]
    },
    {
        name: "Lumen5",
        description: "AI video creation platform that transforms articles and blog posts into engaging social media videos. Features automatic scene creation and content repurposing.",
        categories: ["video", "marketing"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2hkE4SuPtDEJh3WqVcLXi-hlIoEInvRpSQ&s", 
        url: "https://lumen5.com",
        badges: ["featured", "freemium"],
        tags: ["video creation", "social media", "content repurposing", "marketing"]
    },
    {
        name: "Qwen",
        description: "Alibaba's advanced language model with strong capabilities in understanding and generating text. Supports multiple languages and tasks.",
        categories: ["nlp", "productivity"],
        logo: "https://images.seeklogo.com/logo-png/61/1/qwen-logo-png_seeklogo-611723.png",
        url: "https://chat.qwen.ai/",
        badges: ["trending"],
        tags: ["language model", "multilingual", "alibaba", "chatbot"]
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
        logo: "https://11labs-nonprd-15f22c1d.s3.eu-west-3.amazonaws.com/a2ea339b-8b5e-41bb-b706-24eda8a4c9e3/elevenlabs-symbol.svg",
        url: "https://elevenlabs.io",
        badges: ["featured", "freemium"],
        tags: ["voice synthesis", "text-to-speech", "ai voice"]
    },
    {
        name: "Descript",
        description: "AI-powered audio and video editing platform.",
        categories: ["audio", "productivity"],
        logo: "https://images.seeklogo.com/logo-png/44/2/descript-logo-png_seeklogo-448113.png",
        url: "https://www.descript.com",
        badges: ["freemium"],
        tags: ["audio editing", "video editing", "transcription"]
    },
    {
        name: "Stable Diffusion",
        description: "Open-source AI image generation model.",
        categories: ["vision", "design"],
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/stability-color.png",
        url: "https://stability.ai",
        badges: ["freemium"],
        tags: ["image generation", "open source", "art"]
    },
    {
        name: "Midjourney",
        description: "AI art generator that creates images from text prompts.",
        categories: ["vision", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS55bvDrwepdxIPIOM7EpQQO3wYWSaJJ1tBxw&s",
        url: "https://www.midjourney.com",
        badges: ["trending", "paid"],
        tags: ["art", "image generation", "creative"]
    },
    {
        name: "Llama 2",
        description: "Meta's open large language model for research and commercial use.",
        categories: ["nlp", "research"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrj0iunR9XUI3h1ZaXpx14-6dIcCX_Rpm5w&s",
        url: "https://ai.meta.com/llama",
        badges: ["open source", "featured"],
        tags: ["language model", "open source", "meta", "research"]
    },
    {
        name: "Poppy AI",
        description: "AI-powered platform for creating and managing AI agents and workflows with a focus on automation and productivity.",
        categories: ["productivity", "coding"],
        logo: "https://app.getpoppy.ai/favicon.ico",
        url: "https://app.getpoppy.ai",
        badges: ["featured", "freemium"],
        tags: ["AI agents", "automation", "workflow", "productivity"]
    },
    {
        name: "UX Pilot",
        description: "AI-powered UX design platform that helps create and optimize user experiences with intelligent design suggestions and automation.",
        categories: ["design", "productivity"],
        logo: "https://uxpilot.ai/favicon.ico",
        url: "https://uxpilot.ai",
        badges: ["featured", "freemium"],
        tags: ["UX design", "design automation", "user experience", "productivity"]
    },
    {
        name: "Relevance AI",
        description: "Platform for building and deploying AI agents and workflows with a focus on business automation and integration.",
        categories: ["productivity", "coding"],
        logo: "https://assets-developers.ringcentral.com/app/logo/Ym_3UYKiRK-yBt41UigU3w~dqIC9nP0E4RdbDLu8B2F43/045ff187-0842-44df-924d-ed467df506e1.jpg",
        url: "https://relevanceai.com",
        badges: ["featured", "freemium"],
        tags: ["AI agents", "automation", "business", "integration"]
    },
    {
        name: "Recraft",
        description: "AI-powered design platform for creating and editing visual content with advanced automation capabilities.",
        categories: ["design", "productivity"],
        logo: "https://ph-files.imgix.net/39d1d4eb-e5e5-4125-8f98-24b9cfa940b6.png?auto=format",
        url: "https://www.recraft.ai",
        badges: ["featured", "freemium"],
        tags: ["design", "visual content", "automation", "creative"]
    },
    {
        name: "Promptmetheus",
        description: "AI prompt engineering and optimization platform for maximizing the effectiveness of AI interactions.",
        categories: ["productivity", "nlp"],
        logo: "https://promptmetheus.com/favicon.ico",
        url: "https://promptmetheus.com",
        badges: ["featured", "freemium"],
        tags: ["prompt engineering", "AI optimization", "productivity"]
    },
    {
        name: "Postman AI Agent Builder",
        description: "AI-powered tool for building and testing API agents within the Postman platform.",
        categories: ["coding", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtT98yfidU8hGRVTgArB2jtr4hxWjvFYr4g&s",
        url: "https://www.postman.com/product/ai-agent-builder",
        badges: ["featured", "freemium"],
        tags: ["API", "development", "testing", "automation"]
    },
    {
        name: "Lovable",
        description: "AI-powered platform for creating and managing customer support and engagement workflows.",
        categories: ["productivity", "nlp"],
        logo: "https://lovable.dev/favicon.ico",
        url: "https://lovable.dev",
        badges: ["featured", "freemium"],
        tags: ["customer support", "engagement", "automation", "productivity"]
    },
    {
        name: "Synthesia",
        description: "Create AI videos from text in minutes with avatars and voiceovers.",
        categories: ["audio", "vision"],
        logo: "https://logowik.com/content/uploads/images/synthesia8926.jpg",
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
        name: "Copy.ai",
        description: "AI-powered content generator for marketing, blogs, and more.",
        categories: ["nlp", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14c1RIu0V-Xhj9vCFlpjA0a0Go3Q0Pxkwhw&s",
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
        logo: "https://krisp.ai/blog/wp-content/uploads/2023/10/cropped-Favicon.png",
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
        name: "Pictory",
        description: "AI video generator that turns scripts and articles into engaging videos.",
        categories: ["vision", "audio"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDoc_aBV_Kcbl-d_rqoVtFzmdrkdyNCHUbQ&s",
        url: "https://pictory.ai",
        badges: ["freemium"],
        tags: ["video", "script", "editing"]
    },
    {
        name: "AIVA",
        description: "AI music composition assistant for creators and professionals.",
        categories: ["audio", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQiUmFKGYkecYliBfVBr9MqKAXU62LGtedZw&s",
        url: "https://www.aiva.ai",
        badges: ["freemium"],
        tags: ["music", "composition", "creative"]
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
        logo: "https://logowik.com/content/uploads/images/youcom-new-20242443.logowik.com.webp",
        url: "https://you.com",
        badges: ["freemium"],
        tags: ["search", "assistant", "writing"]
    },
    {
        name: "DeepMind AlphaFold",
        description: "AI system that predicts 3D structures of proteins with high accuracy.",
        categories: ["research", "vision"],
        logo: "https://lh3.googleusercontent.com/EQG-IiwCivtoW6UzARBc_7uaVBrQ6b5nMtAE-tRCIVLz59sst09hqaHPh2Z1oFhVhdKeuHFkIJVKXX4FM651",
        url: "https://alphafold.ebi.ac.uk",
        badges: ["open source", "featured"],
        tags: ["protein folding", "biology", "science"]
    },
    {
        name: "FaceApp",
        description: "AI photo editing app for face transformations and filters.",
        categories: ["vision", "design"],
        logo: "https://images.seeklogo.com/logo-png/46/2/faceapp-logo-png_seeklogo-467497.png",
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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmqSjOkuKyM6UAEW_e6R-zBFF65LJgwNI3lw&s",
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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYtafNj-h1l2vTHjbm3CLnzm7L5i_pONeJQ&s",
        url: "https://copymonkey.ai",
        badges: ["freemium"],
        tags: ["ecommerce", "copywriting", "amazon"]
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
        name: "Murf AI",
        description: "AI voice generator for studio-quality voiceovers.",
        categories: ["audio", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYO81J0zYiPaCqey4hdEazJp-DZjm08DUdKA&s",
        url: "https://murf.ai",
        badges: ["freemium"],
        tags: ["voiceover", "audio", "generator"]
    },
    {
        name: "Kaiber",
        description: "AI video generator for music videos and animations.",
        categories: ["vision", "design"],
        logo: "https://cdn.theorg.com/c64450bd-cbff-4e97-b402-bf27ed6e2afc_medium.jpg",
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
        logo: "https://backend.aionlinecourse.com/uploads/ai_software/image/2023/09/dreamstudio.png",
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
        name: "Auphonic",
        description: "AI audio post-production for podcasts and videos.",
        categories: ["audio", "productivity"],
        logo: "https://auphonic.com/media/pics/auphonic-app-icon.png",
        url: "https://auphonic.com",
        badges: ["freemium"],
        tags: ["audio", "post-production", "podcast"]
    },
    {
        name: "Gamma",
        description: "Free plan (no credit card) with 400 AI credits signup bonus. Enough to generate a couple of presentations. Unlimited users and basic exports included.",
        categories: ["productivity", "business", "design"],
        logo: "https://gamma.app/favicon.ico",
        url: "https://gamma.app",
        badges: ["freemium"],
        tags: ["presentations", "business", "design", "productivity"]
    },
    {
        name: "10Web",
        description: "Offers a 7-day free trial with full features. Also has a free Personal plan option (with very limited resources) for testing.",
        categories: ["productivity", "web-development"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPBUINz6BcfKz9BbNWwXaNt8GaYfRA8lMX5Q&s",
        url: "https://10web.io",
        badges: ["freemium", "trial"],
        tags: ["website builder", "web development", "hosting"]
    },
    {
        name: "DALL-E 3",
        description: "Free via Bing Image Creator – unlimited usage with a Microsoft account",
        categories: ["vision", "design"],
        logo: "https://bing.com/favicon.ico",
        url: "https://www.bing.com/images/create",
        badges: ["free"],
        tags: ["image generation", "art", "creative", "bing"]
    },
    {
        name: "Leonardo AI",
        description: "Comprehensive free use ~150 tokens every 8 hours (about 15 image generations) perpetually.",
        categories: ["vision", "design"],
        logo: "https://leonardo.ai/favicon.ico",
        url: "https://leonardo.ai",
        badges: ["freemium"],
        tags: ["image generation", "art", "creative"]
    },
    {
        name: "Hailuo AI",
        description: "Yes - 1000 initial credits + 100 daily free(roughly 3 free videos per day).",
        categories: ["video", "design"],
        logo: "https://hailuo.ai/favicon.ico",
        url: "https://hailuo.ai",
        badges: ["freemium"],
        tags: ["video generation", "creative"]
    },
    {
        name: "Kling",
        description: "Yes - 66 free credits daily (roughly three 5 sec videos per day)",
        categories: ["video", "design"],
        logo: "https://play-lh.googleusercontent.com/JOfjXqsShK8j1aGBc1xlHBnatoRKRwLsGuoFZUAvKksaEPvK71eLwSg4FbKlky9Es-s",
        url: "https://kling.ai",
        badges: ["freemium"],
        tags: ["video generation", "creative"]
    },
    {
        name: "Cursor AI",
        description: "Yes - the Cursor code editor is free to download and offers a two week free trail for all its pro features. For the free version, you can have 2000 completions for free.",
        categories: ["coding", "productivity"],
        logo: "https://cursor.sh/favicon.ico",
        url: "https://cursor.sh",
        badges: ["free", "trial"],
        tags: ["code editor", "coding assistant", "IDE"]
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
        logo: "https://yt3.googleusercontent.com/jEIS4r9BGPsDzS3MpMbLhecYzVnVrVfW6z2JH9Z8l3RdNYhIeJ0EAlC13jrXv4VHjF_513Ks=s900-c-k-c0x00ffffff-no-rj",
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
        logo: "https://deepnostalgia.ai/apple-icon.png?3d07840bbf1d8993",
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
        logo: "https://petalica.com/images/design-v2/logo.svg",
        url: "https://paintschainer.preferred.tech",
        badges: ["freemium"],
        tags: ["coloring", "sketch", "manga"]
    },
    {
        name: "Artbreeder",
        description: "Create and explore images with genetic algorithms.",
        categories: ["vision", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrSa6myIofenGS9dVauR8E87XwmanbkKJcA&s",
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
        logo: "https://avatars.githubusercontent.com/u/25684714?s=280&v=4",
        url: "https://deepart.io",
        badges: ["freemium"],
        tags: ["artwork", "photo", "neural"]
    },
    {
        name: "AI Picasso",
        description: "Create Picasso-style art from your photos.",
        categories: ["vision", "design"],
        logo: "https://framerusercontent.com/images/ttNBlLQ1awng2oh1byuTAuBmiBw.png?scale-down-to=512",
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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhA_2gmrvBzd424l8i6S5lMRwv6HI_6BLfA&s",
        url: "https://www.cartoonify.de",
        badges: ["freemium"],
        tags: ["cartoon", "photo", "avatar"]
    },
    {
        name: "AISEO",
        description: "AI-powered SEO content generator.",
        categories: ["nlp", "productivity"],
        logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF0RVJaxx983g/company-logo_200_200/company-logo_200_200/0/1649257648693/aiseo_ai_logo?e=2147483647&v=beta&t=5TrQO37Qldj65CZljNSzKkI4if5SnCcfb275WHBRm2Y",
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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9cZZet_33soscJCwtE-dP3C-D0W2akWWVw&s",
        url: "https://rytr.me",
        badges: ["freemium"],
        tags: ["writing", "assistant", "content"]
    },
    {
        name: "Frase.io",
        description: "AI-powered content research and optimization.",
        categories: ["nlp", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzml55hs1gvLq-lCgaXQe5GdJghWKRFDYpZQ&s",
        url: "https://www.frase.io",
        badges: ["freemium"],
        tags: ["content", "research", "optimization"]
    },
    {
        name: "LongShot AI",
        description: "AI writing assistant for long-form content.",
        categories: ["nlp", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8JV-cmD895Gmm7AtmlmHUzudNJT_dPm8WRA&s",
        url: "https://www.longshot.ai",
        badges: ["freemium"],
        tags: ["writing", "long-form", "content"]
    },
    {
        name: "Wordtune",
        description: "AI-powered writing companion for better sentences.",
        categories: ["nlp", "productivity"],
        logo: "https://logowik.com/content/uploads/images/wordtune5989.logowik.com.webp",
        url: "https://www.wordtune.com",
        badges: ["freemium"],
        tags: ["writing", "companion", "sentences"]
    },
    {
        name: "HyperWrite",
        description: "AI writing assistant for emails, blogs, and more.",
        categories: ["nlp", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwe3-J2IQN8nPPsXpOtSfNL5JAQ5X5W9AAtg&s",
        url: "https://hyperwriteai.com",
        badges: ["freemium"],
        tags: ["writing", "assistant", "content"]
    },
    {
        name: "Sudowrite",
        description: "AI writing tool for creative writers.",
        categories: ["nlp", "productivity"],
        logo: "https://pbs.twimg.com/profile_images/1681066020868349952/oubjd_MW_400x400.jpg",
        url: "https://www.sudowrite.com",
        badges: ["freemium"],
        tags: ["writing", "creative", "assistant"]
    },
    {
        name: "NovelAI",
        description: "AI-powered storytelling and novel writing.",
        categories: ["nlp", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3r1CmcE-vfNHkjGBS3KYgxmjcdmeEfw5Lbg&s",
        url: "https://novelai.net",
        badges: ["freemium"],
        tags: ["storytelling", "writing", "novel"]
    },
    {
        name: "AI Dungeon",
        description: "AI-powered text adventure game.",
        categories: ["nlp", "productivity"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/AI_Dungeon_Logo.png",
        url: "https://play.aidungeon.io",
        badges: ["freemium"],
        tags: ["game", "adventure", "text"]
    },
    {
        name: "ShortlyAI",
        description: "AI writing assistant for short-form content.",
        categories: ["nlp", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjr8fEvnigVOdAtp_tGcjUj8VKRAiDZGz2fw&s",
        url: "https://shortlyai.com/",
        badges: ["freemium"],
        tags: ["writing", "short-form", "assistant"]
    },
    {
        name: "CopySmith",
        description: "AI copywriting tool for ads, emails, and more.",
        categories: ["nlp", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb-fDNZq4QlJJXLW3iaWSpYbSUEDgtHLONw&s",
        url: "https://copysmith.ai",
        badges: ["freemium"],
        tags: ["copywriting", "ads", "emails"]
    },
    {
        name: "Peppertype.ai",
        description: "AI content generation for marketers and creators.",
        categories: ["nlp", "productivity"],
        logo: "https://cdn.techjockey.com/web/assets/images/techjockey/products/17730_Peppertypelogo.jpg",
        url: "https://www.peppertype.ai",
        badges: ["freemium"],
        tags: ["content", "generation", "marketing"]
    },
    {
        name: "Writesonic Photosonic",
        description: "AI art generator by Writesonic.",
        categories: ["vision", "design"],
        logo: "https://pbs.twimg.com/profile_images/1517412056907272192/_cH9KL9__400x400.jpg",
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
        logo: "https://play-lh.googleusercontent.com/zD3Szw9tZpc6ALvn_R2HR2vfQwfslWkF4ORaK5SeHxNIU0oD6i_hmOf_pQmqaItXX0A",
        url: "https://aiportraits.com",
        badges: ["freemium"],
        tags: ["portrait", "photo", "art"]
    },
    {
        name: "DeepSwap",
        description: "AI face swap for photos and videos.",
        categories: ["vision", "design"],
        logo: "https://www.softwareworld.co/assets/software/logo/deepswap.jpg",
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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTLsEBaCMe5yelsI_VpwFNuM9jlMD6ILpHw&s",
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
    },
    {
        name: "Otter.ai Business",
        description: "AI meeting assistant for business teams and collaboration.",
        categories: ["business"],
        logo: "https://otter.ai/favicon.ico",
        url: "https://otter.ai/business",
        badges: ["paid"],
        tags: ["meetings", "transcription", "collaboration"]
    },
    {
        name: "InVideo",
        description: "AI video creation platform for marketing and social media.",
        categories: ["video"],
        logo: "https://logowik.com/content/uploads/images/invideo12525.logowik.com.webp",
        url: "https://invideo.io",
        badges: ["freemium"],
        tags: ["video creation", "marketing", "social media"]
    },
    {
        name: "Duolingo",
        description: "AI-powered language learning platform with personalized tutoring.",
        categories: ["education"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmbSq0vdFc9kh6_g9YQ-reLlSzHuJZNm0hw&s",
        url: "https://www.duolingo.com/max",
        badges: ["freemium"],
        tags: ["language learning", "education", "tutoring"]
    },
    {
        name: "Khanmigo",
        description: "AI tutor and teaching assistant by Khan Academy that provides personalized learning experiences and interactive tutoring.",
        categories: ["education", "nlp"],
        logo: "https://www.khanacademy.org/favicon.ico",
        url: "https://www.khanacademy.org/khan-labs",
        badges: ["featured", "freemium"],
        tags: ["tutoring", "learning", "personalized", "education"]
    },
    {
        name: "Anthropic Claude",
        description: "Advanced AI assistant by Anthropic, known for its helpful, harmless, and honest responses.",
        categories: ["nlp", "productivity"],
        logo: "https://www.anthropic.com/favicon.ico",
        url: "https://www.anthropic.com/claude",
        badges: ["featured", "trending"],
        tags: ["chatbot", "assistant", "writing"]
    },
    {
        name: "Runway ML",
        description: "Professional AI video editing and generation platform for filmmakers and creators.",
        categories: ["video", "design"],
        logo: "https://images.seeklogo.com/logo-png/49/1/runway-logo-png_seeklogo-496519.png",
        url: "https://runwayml.com",
        badges: ["featured", "paid"],
        tags: ["video editing", "generation", "creative"]
    },
    {
        name: "Notion AI",
        description: "AI writing and organization assistant integrated into Notion workspace.",
        categories: ["productivity", "business"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
        url: "https://www.notion.so/product/ai",
        badges: ["featured", "freemium"],
        tags: ["writing", "organization", "productivity"]
    },
    {
        name: "Beautiful.ai",
        description: "AI-powered presentation software that automatically designs slides.",
        categories: ["business", "design", "productivity"],
        logo: "https://www.beautiful.ai/favicon.ico",
        url: "https://www.beautiful.ai",
        badges: ["featured", "paid"],
        tags: ["presentations", "design", "business"]
    },
    {
        name: "Inflection AI",
        description: "Personal AI assistant focused on emotional intelligence and helpful conversations.",
        categories: ["life-assistant", "productivity"],
        logo: "https://images.seeklogo.com/logo-png/49/2/inflection-ai-logo-png_seeklogo-496568.png",
        url: "https://inflection.ai",
        badges: ["featured", "freemium"],
        tags: ["assistant", "conversation", "personal"]
    },
    {
        name: "TensorFlow AutoML",
        description: "Google's automated machine learning solution for custom model development.",
        categories: ["data-science"],
        logo: "https://www.tensorflow.org/favicon.ico",
        url: "https://cloud.google.com/automl",
        badges: ["featured", "paid"],
        tags: ["machine learning", "automation", "google"]
    },
    {
        name: "Google Vertex AI",
        description: "Unified AI platform for building, deploying, and managing machine learning models.",
        categories: ["data-science"],
        logo: "https://cloud.google.com/favicon.ico",
        url: "https://cloud.google.com/vertex-ai",
        badges: ["featured", "paid"],
        tags: ["machine learning", "cloud", "google"]
    },
    {
        name: "RapidMiner",
        description: "Data science platform for building and deploying machine learning models.",
        categories: ["data-science"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3vra_tK2_tQlSDhf6m_eYe-O-I9Xm0WVgw&s",
        url: "https://rapidminer.com",
        badges: ["freemium"],
        tags: ["data science", "machine learning", "analytics"]
    },
    {
        name: "Alteryx",
        description: "End-to-end analytics platform for data preparation, analysis, and machine learning.",
        categories: ["data-science"],
        logo: "https://www.alteryx.com/favicon.ico",
        url: "https://www.alteryx.com",
        badges: ["paid"],
        tags: ["analytics", "data preparation", "machine learning"]
    },
    {
        name: "Tableau GPT",
        description: "AI-powered analytics and insights platform for data visualization.",
        categories: ["data-science"],
        logo: "https://www.tableau.com/favicon.ico",
        url: "https://www.tableau.com/products/ai-analytics",
        badges: ["featured", "paid"],
        tags: ["analytics", "visualization", "insights"]
    },
    {
        name: "MonkeyLearn",
        description: "Text analysis and machine learning platform for business intelligence.",
        categories: ["data-science"],
        logo: "https://avatars.githubusercontent.com/u/8461612?s=280&v=4",
        url: "https://monkeylearn.com",
        badges: ["freemium"],
        tags: ["text analysis", "machine learning", "business intelligence"]
    },
    {
        name: "Elicit",
        description: "AI research assistant that helps find and summarize academic papers. Uses language models to answer questions with research-backed evidence.",
        categories: ["research", "nlp"],
        logo: "https://www.fahimai.com/wp-content/uploads/2024/12/CTA-42.png",
        url: "https://elicit.org",
        badges: ["featured", "free"],
        tags: ["academic", "research", "papers", "summarization"]
    },
    {
        name: "Consensus",
        description: "AI-powered search engine for scientific research that provides evidence-based answers to research questions.",
        categories: ["research", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfFl0avG1yDnFPdn1EteAqB28p_QQfkYIpJQ&s",
        url: "https://consensus.app",
        badges: ["featured", "freemium"],
        tags: ["scientific", "research", "evidence", "search"]
    },
    {
        name: "Scite.ai",
        description: "Smart citation platform that helps researchers discover and evaluate scientific articles through AI-powered citation analysis.",
        categories: ["research", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrc_VwLwmKuBiPVUOKD-a69SiTfWa_eE-tw&s",
        url: "https://scite.ai",
        badges: ["featured", "paid"],
        tags: ["citations", "research", "academic", "analysis"]
    },
    {
        name: "Semantic Scholar AI",
        description: "AI-powered academic search engine that helps researchers find relevant papers and understand research trends.",
        categories: ["research", "nlp"],
        logo: "https://www.semanticscholar.org/favicon.ico",
        url: "https://www.semanticscholar.org",
        badges: ["featured", "free"],
        tags: ["academic", "research", "search", "analysis"]
    },
    {
        name: "Quizlet AI",
        description: "AI-powered study platform that creates personalized study plans and adaptive learning experiences.",
        categories: ["education", "nlp"],
        logo: "https://img.icons8.com/color/512/quizlet.png",
        url: "https://quizlet.com/ai",
        badges: ["featured", "freemium"],
        tags: ["study", "learning", "flashcards", "education"]
    },
    {
        name: "Coursera AI",
        description: "AI-powered learning platform offering personalized course recommendations and adaptive learning paths.",
        categories: ["education", "nlp"],
        logo: "https://www.coursera.org/favicon.ico",
        url: "https://www.coursera.org",
        badges: ["featured", "freemium"],
        tags: ["courses", "learning", "education", "online"]
    },
    {
        name: "Socratic by Google",
        description: "AI-powered homework helper that provides step-by-step explanations and learning resources for students.",
        categories: ["education", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8NuihxfkJD2kafYOCStkTu3hjE3hDTNC2Q&s",
        url: "https://socratic.org",
        badges: ["featured", "free"],
        tags: ["homework", "learning", "education", "help"]
    },
    {
        name: "Brainly AI",
        description: "AI-powered learning community that helps students with homework and provides personalized learning support.",
        categories: ["education", "nlp"],
        logo: "https://brainly.com/favicon.ico",
        url: "https://brainly.com",
        badges: ["featured", "freemium"],
        tags: ["homework", "community", "learning", "education"]
    },
    {
        name: "Century AI",
        description: "AI-powered learning platform that personalizes education and provides real-time feedback for students.",
        categories: ["education", "nlp"],
        logo: "https://jobs.mindtheproduct.com/wp-content/uploads/job-manager-uploads/company_logo/2022/04/Century-Icon.png",
        url: "https://www.century.tech",
        badges: ["featured", "paid"],
        tags: ["learning", "personalized", "education", "feedback"]
    },
    {
        name: "Carnegie Learning",
        description: "AI-powered math learning platform that provides personalized instruction and real-time feedback.",
        categories: ["education", "nlp"],
        logo: "https://www.carnegielearning.com/favicon.ico",
        url: "https://www.carnegielearning.com",
        badges: ["featured", "paid"],
        tags: ["math", "learning", "education", "personalized"]
    },
    {
        name: "Pi by Inflection",
        description: "Personal AI assistant focused on emotional intelligence and helpful conversations for daily life.",
        categories: ["life-assistant", "nlp"],
        logo: "https://play-lh.googleusercontent.com/Ef7is-Xonqhs2agdsGarpTS_c1Is6Yvk-JhnL3qNvU1Nwdc7kn6Dml2IuCqlfa9Nuzk",
        url: "https://pi.ai",
        badges: ["featured", "free"],
        tags: ["personal assistant", "conversation", "emotional support", "daily life"]
    },
    {
        name: "Replika",
        description: "AI companion that provides emotional support, conversation, and personal growth assistance.",
        categories: ["life-assistant", "nlp"],
        logo: "https://replika.com/favicon.ico",
        url: "https://replika.com",
        badges: ["featured", "freemium"],
        tags: ["companion", "emotional support", "personal growth", "conversation"]
    },
    {
        name: "Character.AI",
        description: "AI platform for creating and chatting with various AI characters and personalities.",
        categories: ["life-assistant", "nlp"],
        logo: "https://character.ai/favicon.ico",
        url: "https://character.ai",
        badges: ["featured", "freemium"],
        tags: ["chat", "characters", "conversation", "entertainment"]
    },
    {
        name: "Woebot",
        description: "AI mental health assistant that provides emotional support and cognitive behavioral therapy techniques.",
        categories: ["life-assistant", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlCs2lyOZNKbG5FQ_RSoYLx0ZvI1RMhFEWWQ&s",
        url: "https://woebot.com",
        badges: ["featured", "freemium"],
        tags: ["mental health", "therapy", "emotional support", "wellness"]
    },
    {
        name: "Wysa",
        description: "AI mental health chatbot that provides emotional support and mindfulness exercises.",
        categories: ["life-assistant", "nlp"],
        logo: "https://wysa.io/favicon.ico",
        url: "https://wysa.io",
        badges: ["featured", "freemium"],
        tags: ["mental health", "mindfulness", "emotional support", "wellness"]
    },
    {
        name: "Youper",
        description: "AI emotional health assistant that helps track mood and provides personalized emotional support.",
        categories: ["life-assistant", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2AcvzmKvE2XDTKcKVsjCxqjR44fD6p5zQQ&s",
        url: "https://youper.ai",
        badges: ["featured", "freemium"],
        tags: ["emotional health", "mood tracking", "personalized support", "wellness"]
    },
    {
        name: "Mondly",
        description: "AI language learning assistant with personalized conversation practice and real-time feedback.",
        categories: ["life-assistant", "education", "nlp"],
        logo: "https://www.mondly.com/favicon.ico",
        url: "https://www.mondly.com",
        badges: ["featured", "freemium"],
        tags: ["language learning", "conversation", "personalized", "education"]
    },
    {
        name: "FitnessAI",
        description: "AI personal trainer that creates personalized workout plans and provides real-time form feedback.",
        categories: ["life-assistant", "vision"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzQzyCmCRtdsl9EvxUFmOu4nA4SJHoWrMeqw&s",
        url: "https://fitnessai.com",
        badges: ["featured", "paid"],
        tags: ["fitness", "workout", "personal training", "health"]
    },
    {
        name: "Finch",
        description: "AI self-care companion that helps build healthy habits and provides daily emotional support.",
        categories: ["life-assistant", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jW-_wRYbV56K6UQQ56XEYCMBmELZXdQIRg&s",
        url: "https://finchcare.com",
        badges: ["featured", "freemium"],
        tags: ["self-care", "habits", "emotional support", "wellness"]
    },
    {
        name: "Cleo",
        description: "AI financial assistant that helps manage money, track spending, and provide financial advice.",
        categories: ["life-assistant", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVbf82o4j0727w0JigX06UYz_jOO7V91bUQ&s",
        url: "https://meetcleo.com",
        badges: ["featured", "freemium"],
        tags: ["finance", "budgeting", "money management", "advice"]
    },
    {
        name: "Dataiku",
        description: "Enterprise AI and machine learning platform for data scientists and analysts to build and deploy AI solutions.",
        categories: ["data-science"],
        logo: "https://www.dataiku.com/favicon.ico",
        url: "https://www.dataiku.com",
        badges: ["featured", "paid"],
        tags: ["machine learning", "data science", "enterprise", "analytics"]
    },
    {
        name: "YouChat",
        description: "AI assistant by You.com for chat, search, and reasoning with citations.",
        categories: ["chat", "research", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFy1noh6tNqh68HEkJsHeX40Wlst_zgaCSg&s",
        url: "https://you.com/home",
        badges: ["free"],
        tags: ["chatbot", "search", "citations", "assistant"]
    },
    {
        name: "Poe",
        description: "Multi-model AI chat platform (Claude, GPT, Llama, etc.) with fast responses.",
        categories: ["chat", "productivity", "developer-tools"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCfU71ZSW4rhD8JIIQxA0_dc8q3ZL7RKlUw&s",
        url: "https://poe.com/login",
        badges: ["freemium", "popular"],
        tags: ["multi-model", "chatbot", "prompting", "fast"]
    },
    {
        name: "Pi",
        description: "Personal AI companion focused on helpful, friendly, and safe conversations.",
        categories: ["chat", "wellness", "productivity"],
        logo: "https://play-lh.googleusercontent.com/Ef7is-Xonqhs2agdsGarpTS_c1Is6Yvk-JhnL3qNvU1Nwdc7kn6Dml2IuCqlfa9Nuzk=w600-h300-pc0xffffff-pd",
        url: "https://pi.ai/onboarding",
        badges: ["free"],
        tags: ["companion", "chatbot", "safety", "conversational"]
    },
    {
        name: "Caktus AI",
        description: "Student-focused AI for writing, coding help, and study assistance.",
        categories: ["education", "writing", "coding"],
        logo: "https://caktus.ai/favicon.ico",
        url: "https://caktus.ai/",
        badges: ["freemium", "trending"],
        tags: ["students", "essay", "study", "coder"]
    },
    {
        name: "scispace",
        description: "AI copilot for reading, explaining, and discovering scientific papers.",
        categories: ["research", "education", "productivity"],
        logo: "https://cdn.prod.website-files.com/648302318a1143aaf5e78dfa/662e79fc151538445a578869_d3JYR823QfSPL1DkKG6V_6b34N9K4AGMJ21jH.png",
        url: "https://scispace.com/",
        badges: ["freemium"],
        tags: ["papers", "summarization", "explain", "citation"]
    },
    {
        name: "Krea AI",
        description: "Real-time AI image creation and design exploration.",
        categories: ["design", "image", "creativity"],
        logo: "https://ai-training-uploads.s3.us-west-2.amazonaws.com/krea+logo.png",
        url: "https://www.krea.ai/",
        badges: ["freemium"],
        tags: ["images", "generation", "creative", "real-time"]
    },
    {
        name: "Tabnine",
        description: "AI code completion assistant for IDEs, trained on permissive code.",
        categories: ["developer-tools", "coding", "productivity"],
        logo: "https://www.tabnine.com/favicon.ico",
        url: "https://www.tabnine.com/",
        badges: ["freemium", "enterprise"],
        tags: ["coding", "autocomplete", "IDE", "pair-programming"]
    },
    {
        name: "Adept AI",
        description: "AI agents and tools for automating complex software workflows.",
        categories: ["automation", "productivity", "developer-tools"],
        logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/b642d48886a540e894724df87b5d33cd",
        url: "https://www.adept.ai/",
        badges: ["beta"],
        tags: ["agents", "workflows", "automation", "enterprise"]
    },
    {
        name: "KNIME",
        description: "Open-source data analytics platform for creating data science workflows and machine learning models.",
        categories: ["data-science"],
        logo: "https://www.knime.com/favicon.ico",
        url: "https://www.knime.com",
        badges: ["open source", "freemium"],
        tags: ["data analytics", "workflow", "machine learning", "visualization"]
    },
    {
        name: "Databricks",
        description: "Unified analytics platform for data engineering, machine learning, and collaborative data science.",
        categories: ["data-science"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS36Vt4wSXF8AZGnryASm-iL1f71ucL1f9pjg&s",
        url: "https://databricks.com",
        badges: ["featured", "paid"],
        tags: ["analytics", "machine learning", "data engineering", "collaboration"]
    },
    {
        name: "SAS Viya",
        description: "Cloud-native AI and analytics platform for advanced data analysis and machine learning.",
        categories: ["data-science"],
        logo: "https://www.sas.com/favicon.ico",
        url: "https://www.sas.com/en_us/software/viya.html",
        badges: ["featured", "paid"],
        tags: ["analytics", "machine learning", "cloud", "enterprise"]
    },
    {
        name: "IBM Watson Studio",
        description: "Integrated environment for data scientists and developers to build, train, and deploy AI models.",
        categories: ["data-science"],
        logo: "https://www.ibm.com/favicon.ico",
        url: "https://www.ibm.com/cloud/watson-studio",
        badges: ["featured", "paid"],
        tags: ["machine learning", "AI development", "model deployment", "enterprise"]
    },
    {
        name: "Azure Machine Learning",
        description: "Cloud-based platform for building, training, and deploying machine learning models.",
        categories: ["data-science"],
        logo: "https://azure.microsoft.com/favicon.ico",
        url: "https://azure.microsoft.com/services/machine-learning",
        badges: ["featured", "paid"],
        tags: ["machine learning", "cloud", "model deployment", "azure"]
    },
    {
        name: "AWS SageMaker",
        description: "Fully managed service for building, training, and deploying machine learning models.",
        categories: ["data-science"],
        logo: "https://aws.amazon.com/favicon.ico",
        url: "https://aws.amazon.com/sagemaker",
        badges: ["featured", "paid"],
        tags: ["machine learning", "cloud", "model deployment", "aws"]
    },
    {
        name: "Google Cloud AI Platform",
        description: "End-to-end platform for building and deploying machine learning models in the cloud.",
        categories: ["data-science"],
        logo: "https://cloud.google.com/favicon.ico",
        url: "https://cloud.google.com/ai-platform",
        badges: ["featured", "paid"],
        tags: ["machine learning", "cloud", "model deployment", "google"]
    },
    {
        name: "Domino Data Lab",
        description: "Enterprise MLOps platform for data science teams to collaborate and deploy models.",
        categories: ["data-science"],
        logo: "https://www.dominodatalab.com/favicon.ico",
        url: "https://www.dominodatalab.com",
        badges: ["featured", "paid"],
        tags: ["MLOps", "collaboration", "model deployment", "enterprise"]
    },
    {
        name: "Alteryx Designer",
        description: "End-to-end analytics platform for data preparation, blending, and advanced analytics.",
        categories: ["data-science"],
        logo: "https://www.alteryx.com/favicon.ico",
        url: "https://www.alteryx.com/products/alteryx-designer",
        badges: ["featured", "paid"],
        tags: ["analytics", "data preparation", "blending", "automation"]
    },
    {
        name: "DataRobot",
        description: "Enterprise AI platform for automated machine learning and model deployment.",
        categories: ["data-science"],
        logo: "https://www.datarobot.com/favicon.ico",
        url: "https://www.datarobot.com",
        badges: ["featured", "paid"],
        tags: ["automated ML", "model deployment", "enterprise", "analytics"]
    },
    // Business Tools
    {
        name: "Chorus.ai",
        description: "Conversation intelligence platform that helps sales teams improve performance through AI analysis.",
        categories: ["business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLI5v-DnQTogD2HZGWQmhKmwjGJ1kccj0JQ&s",
        url: "https://www.chorus.ai",
        badges: ["featured", "paid"],
        tags: ["sales", "conversation intelligence", "performance", "business"]
    },
    {
        name: "Drift",
        description: "AI-powered conversational marketing and sales platform for real-time customer engagement.",
        categories: ["business", "marketing"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2oZvneJLFZ3MGu-4uUivoOrVovV7XjEuJQ&s",
        url: "https://www.drift.com",
        badges: ["featured", "freemium"],
        tags: ["conversational marketing", "sales", "customer engagement", "chat"]
    },
    {
        name: "Intercom",
        description: "AI-powered customer messaging platform for personalized customer support and engagement.",
        categories: ["business"],
        logo: "https://www.pngkey.com/png/full/423-4237226_intercom-logo-png-transparent-intercom-logo-svg.png",
        url: "https://www.intercom.com",
        badges: ["featured", "paid"],
        tags: ["customer support", "messaging", "engagement", "automation"]
    },
    {
        name: "Zendesk AI",
        description: "AI-powered customer service platform with automated responses and intelligent ticket routing.",
        categories: ["business"],
        logo: "https://www.zendesk.com/favicon.ico",
        url: "https://www.zendesk.com/ai",
        badges: ["featured", "paid"],
        tags: ["customer service", "support", "automation", "ticketing"]
    },
    {
        name: "Salesforce Einstein",
        description: "AI-powered CRM platform with predictive analytics and automated insights for sales teams.",
        categories: ["business"],
        logo: "https://www.salesforce.com/favicon.ico",
        url: "https://www.salesforce.com/products/einstein/overview",
        badges: ["featured", "paid"],
        tags: ["CRM", "sales", "analytics", "automation"]
    },
    {
        name: "HubSpot AI",
        description: "AI-powered marketing, sales, and service platform for inbound business growth.",
        categories: ["business", "marketing"],
        logo: "https://www.hubspot.com/favicon.ico",
        url: "https://www.hubspot.com/ai",
        badges: ["featured", "freemium"],
        tags: ["marketing", "sales", "service", "automation"]
    },
    {
        name: "Pega",
        description: "AI-powered business process automation and customer engagement platform.",
        categories: ["business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AYpeuUxp0OgruXD3ofv0YBdpLS3-Ik1SYQ&s",
        url: "https://www.pega.com",
        badges: ["featured", "paid"],
        tags: ["process automation", "customer engagement", "workflow", "enterprise"]
    },
    {
        name: "UiPath",
        description: "AI-powered robotic process automation platform for business process automation.",
        categories: ["business"],
        logo: "https://www.uipath.com/favicon.ico",
        url: "https://www.uipath.com",
        badges: ["featured", "paid"],
        tags: ["RPA", "automation", "workflow", "enterprise"]
    },
    {
        name: "Blue Prism",
        description: "Enterprise-grade robotic process automation platform with AI capabilities.",
        categories: ["business"],
        logo: "https://www.blueprism.com/favicon.ico",
        url: "https://www.blueprism.com",
        badges: ["featured", "paid"],
        tags: ["RPA", "automation", "enterprise", "workflow"]
    },
    {
        name: "Automation Anywhere",
        description: "AI-powered robotic process automation platform for business process automation.",
        categories: ["business"],
        logo: "https://images.seeklogo.com/logo-png/34/2/automation-anywhere-logo-png_seeklogo-347692.png",
        url: "https://www.automationanywhere.com",
        badges: ["featured", "paid"],
        tags: ["RPA", "automation", "workflow", "enterprise"]
    },
    {
        name: "Workday",
        description: "AI-powered enterprise management cloud platform for HR, finance, and planning.",
        categories: ["business"],
        logo: "https://www.workday.com/favicon.ico",
        url: "https://www.workday.com",
        badges: ["featured", "paid"],
        tags: ["HR", "finance", "planning", "enterprise"]
    },
    {
        name: "ServiceNow",
        description: "AI-powered digital workflow platform for enterprise service management.",
        categories: ["business"],
        logo: "https://www.servicenow.com/favicon.ico",
        url: "https://www.servicenow.com",
        badges: ["featured", "paid"],
        tags: ["workflow", "service management", "automation", "enterprise"]
    },
    // Marketing Tools
    {
        name: "Writesonic",
        description: "AI writing platform for creating marketing content, blogs, ads, and social media posts.",
        categories: ["marketing", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpQniYA5zh4ADrbN6QW0gGS4Zd3fvEmZzVg&s",
        url: "https://writesonic.com",
        badges: ["featured", "freemium"],
        tags: ["content creation", "marketing", "copywriting", "blogging"]
    },
    {
        name: "Phrasee",
        description: "AI copywriting platform for generating and optimizing marketing language and email subject lines.",
        categories: ["marketing", "nlp"],
        logo: "https://phrasee.co/favicon.ico",
        url: "https://phrasee.co",
        badges: ["featured", "paid"],
        tags: ["copywriting", "email marketing", "optimization", "language"]
    },
    {
        name: "Persado",
        description: "AI platform for generating emotionally intelligent marketing language and content.",
        categories: ["marketing", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzrr3geNXaTe1BrDieUhPRfaXNKjJJFjAaAw&s",
        url: "https://persado.com",
        badges: ["featured", "paid"],
        tags: ["content generation", "emotional intelligence", "marketing", "language"]
    },
    {
        name: "Lately",
        description: "AI social media marketing platform that generates and schedules content across multiple platforms.",
        categories: ["marketing", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLBpxEELRWGC5aURpDpIcGGUfC1lEaE851g&s",
        url: "https://www.lately.ai",
        badges: ["featured", "freemium"],
        tags: ["social media", "content generation", "scheduling", "marketing"]
    },
    {
        name: "Acrolinx",
        description: "AI-powered content governance platform for maintaining brand voice and content quality.",
        categories: ["marketing", "nlp"],
        logo: "https://www.acrolinx.com/favicon.ico",
        url: "https://www.acrolinx.com",
        badges: ["featured", "paid"],
        tags: ["content governance", "brand voice", "quality", "marketing"]
    },
    {
        name: "MarketMuse",
        description: "AI content planning and optimization platform for SEO and content marketing.",
        categories: ["marketing", "nlp"],
        logo: "https://www.marketmuse.com/favicon.ico",
        url: "https://www.marketmuse.com",
        badges: ["featured", "paid"],
        tags: ["content planning", "SEO", "optimization", "marketing"]
    },
    {
        name: "WordLift",
        description: "AI-powered SEO platform that enhances content with structured data and semantic analysis.",
        categories: ["marketing", "nlp"],
        logo: "https://wordlift.io/favicon.ico",
        url: "https://wordlift.io",
        badges: ["featured", "freemium"],
        tags: ["SEO", "semantic analysis", "structured data", "marketing"]
    },
    {
        name: "Surfer SEO",
        description: "AI content editor and SEO tool for creating optimized content that ranks in search engines.",
        categories: ["marketing", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdS1UefwqOtPyhNrofB0iQMhyQ-NlNUv3uYw&s",
        url: "https://surferseo.com",
        badges: ["featured", "paid"],
        tags: ["SEO", "content optimization", "research", "marketing"]
    },
    {
        name: "Clearscope",
        description: "AI-powered content optimization platform for creating SEO-optimized content.",
        categories: ["marketing", "nlp"],
        logo: "https://www.clearscope.io/favicon.ico",
        url: "https://www.clearscope.io",
        badges: ["featured", "paid"],
        tags: ["content optimization", "SEO", "research", "marketing"]
    },
    {
        name: "Zapier AI",
        description: "AI-powered automation platform that helps create and manage workflows between different apps and services.",
        categories: ["productivity", "business"],
        logo: "https://seeklogo.com/images/Z/zapier-logo-46EEE9963E-seeklogo.com.png",
        url: "https://zapier.com/ai",
        badges: ["featured", "freemium"],
        tags: ["automation", "workflow", "integration", "productivity"]
    },
    {
        name: "Mem AI",
        description: "AI-powered note-taking and knowledge management platform that helps organize and connect your thoughts.",
        categories: ["productivity", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4HPzM2MwH1_bq3Ke_FhvU6gw-YUoUUcyeMw&s",
        url: "https://mem.ai",
        badges: ["featured", "freemium"],
        tags: ["note-taking", "knowledge management", "organization", "productivity"]
    },
    {
        name: "ClickUp AI",
        description: "AI-powered project management platform that helps automate tasks, generate content, and improve productivity.",
        categories: ["productivity", "business"],
        logo: "https://clickup.com/favicon.ico",
        url: "https://clickup.com/ai",
        badges: ["featured", "freemium"],
        tags: ["project management", "automation", "productivity", "collaboration"]
    },
    {
        name: "Anki",
        description: "AI-powered flashcard and spaced repetition learning platform for efficient memorization.",
        categories: ["education", "productivity"],
        logo: "https://apps.ankiweb.net/logo.svg",
        url: "https://apps.ankiweb.net",
        badges: ["featured", "free"],
        tags: ["flashcards", "learning", "spaced repetition", "education"]
    },
    {
        name: "AnkiDecks",
        description: "AI-powered flashcard generator that converts notes, PDFs, and other content into Anki flashcards. Features automatic image occlusion and supports 50+ languages.",
        categories: ["education", "productivity"],
        logo: "https://anki-decks.com/static/images/favicons/favicon.cb6c6b1d29c2.ico",
        url: "https://anki-decks.com",
        badges: ["featured", "freemium"],
        tags: ["flashcards", "learning", "education", "spaced repetition"]
    },
    {
        name: "Jules Coding Agent",
        description: "Google's AI coding assistant that helps developers write, understand, and debug code more efficiently.",
        categories: ["coding", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAXEz4EsU3RQHCV96BAfJusei09ZBjQOG2g&s",
        url: "https://jules.google",
        badges: ["featured", "trending"],
        tags: ["code assistant", "development", "google", "productivity"]
    },
    {
        name: "Firebase Studio",
        description: "Modern Firebase management interface for developers to manage their Firebase projects and resources.",
        categories: ["coding", "productivity"],
        logo: "https://firebase.google.com/favicon.ico",
        url: "https://firebase.studio",
        badges: ["featured"],
        tags: ["firebase", "development", "database", "management"]
    },
    {
        name: "Stitch",
        description: "Google's AI-powered code stitching tool that helps developers combine and integrate code snippets efficiently.",
        categories: ["coding", "productivity"],
        logo: "https://cdn-b.saashub.com/images/app/service_logos/292/wxq6mkcw6vro/large.png?1747867235",
        url: "https://stitch.withgoogle.com",
        badges: ["featured", "trending"],
        tags: ["code integration", "development", "google", "productivity"]
    },
    {
        name: "Veo",
        description: "Google DeepMind's state-of-the-art video generation model that creates high-quality videos with realistic physics and audio.",
        categories: ["video", "design"],
        logo: "https://d4.alternativeto.net/wpYRDF072HNknWU2_fE_Q9uWeROKvjivu4EO_2tf2Wk/rs:fit:280:280:0/g:ce:0:0/exar:1/YWJzOi8vZGlzdC9pY29ucy9nb29nbGUtdmVvXzIzMTY2MC5wbmc.png",
        url: "https://deepmind.google/models/veo/",
        badges: ["featured", "trending"],
        tags: ["video generation", "AI video", "creative", "deepmind"]
    },
    {
        name: "ExplainPaper",
        description: "AI-powered tool that helps you understand research papers by explaining complex concepts and highlighting key points.",
        categories: ["education", "research"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPqGF3zi0q1Pgw4_EyBI_du612rwKGiiBMQ&s",
        url: "https://www.explainpaper.com",
        badges: ["featured", "freemium"],
        tags: ["research papers", "academic", "learning", "education"]
    },
    {
        name: "Scholarcy",
        description: "AI-powered research assistant that summarizes academic papers and extracts key information.",
        categories: ["education", "research"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VO8stg6QQk92yLciCx23dH1e6-RRR6g9gA&s",
        url: "https://www.scholarcy.com",
        badges: ["freemium"],
        tags: ["research", "summarization", "academic", "education"]
    },
    {
        name: "AudioPen",
        description: "AI-powered tool that converts your voice notes into well-written text, perfect for students and researchers.",
        categories: ["education", "audio"],
        logo: "https://ph-files.imgix.net/c63a9ef1-ebdd-48c9-97b7-bd1233cee4b3.png?auto=format",
        url: "https://audiopen.ai",
        badges: ["freemium"],
        tags: ["voice notes", "transcription", "education", "productivity"]
    },
    {
        name: "RecCloud",
        description: "AI-powered video and audio processing platform with transcription, translation, and summarization capabilities.",
        categories: ["education", "audio", "video"],
        logo: "https://play-lh.googleusercontent.com/ZPj9rngiNXll2dLtxEnsmRg-sMCJxrrcy7WZvMOb2LKTekZvEBHMiHFLp6OZJxFIfEY",
        url: "https://reccloud.com",
        badges: ["freemium"],
        tags: ["video processing", "audio processing", "transcription", "education"]
    },
    {
        name: "Gradescope",
        description: "AI-powered grading and assessment platform that helps educators grade assignments efficiently and provide detailed feedback.",
        categories: ["education"],
        logo: "https://gradescope.com/favicon.ico",
        url: "https://gradescope.com",
        badges: ["featured", "paid"],
        tags: ["grading", "assessment", "education", "feedback"]
    },
    {
        name: "QuizGecko",
        description: "AI-powered quiz generator that creates engaging quizzes from any text or content, perfect for educators and students.",
        categories: ["education"],
        logo: "https://quizgecko.com/favicon.ico",
        url: "https://quizgecko.com",
        badges: ["freemium"],
        tags: ["quiz generation", "education", "assessment", "learning"]
    },
    {
        name: "OpExams",
        description: "AI-powered exam platform that helps teachers create, administer, and grade exams with advanced proctoring and analytics.",
        categories: ["education"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLak8iDvrazgH4wwntjoh3NRAMEOXiDXPXQA&s",
        url: "https://opexams.com",
        badges: ["featured", "freemium"],
        tags: ["exams", "assessment", "grading", "education", "proctoring"]
    },
    {
        name: "Curipod",
        description: "AI-powered K-12 curriculum platform that creates interactive lessons with real-time feedback and student engagement tools.",
        categories: ["education"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrR6vGrv6JQhf6QbiwNaW4ddkEzLptS-SANA&s",
        url: "https://curipod.com",
        badges: ["featured", "freemium"],
        tags: ["curriculum", "interactive lessons", "student engagement", "education", "K-12"]
    },
    {
        name: "TeachThought",
        description: "Educational platform providing AI-powered teaching resources, critical thinking tools, and digital learning strategies.",
        categories: ["education", "research"],
        logo: "https://www.teachthought.com/favicon.ico",
        url: "https://www.teachthought.com",
        badges: ["freemium"],
        tags: ["teaching resources", "critical thinking", "digital learning", "education"]
    },
    {
        name: "Durable",
        description: "AI-powered website builder that creates complete business websites in seconds, including content, branding, and marketing tools.",
        categories: ["design", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXFRkJkBDVRQRH07_sDnPC5GwMA5v05u5SOw&s",
        url: "https://durable.co",
        badges: ["featured", "freemium"],
        tags: ["website builder", "business", "AI website", "marketing"]
    },
    {
        name: "Hostinger Website Builder",
        description: "AI-powered website builder with drag-and-drop editor, 150+ templates, and built-in marketing tools for businesses.",
        categories: ["design", "productivity"],
        logo: "https://www.hostinger.com/favicon.ico",
        url: "https://www.hostinger.com/website-builder",
        badges: ["featured", "freemium"],
        tags: ["website builder", "hosting", "templates", "marketing"]
    },
    {
        name: "Framer",
        description: "Advanced design and prototyping tool with AI capabilities for creating interactive websites and applications.",
        categories: ["design", "productivity"],
        logo: "https://iaperfecta.com/wp-content/uploads/2024/10/framer.png",
        url: "https://www.framer.com",
        badges: ["featured", "freemium"],
        tags: ["design", "prototyping", "interactive", "UI/UX"]
    },
    {
        name: "NotebookLM",
        description: "Google's AI-powered notebook that helps you research, learn, and create with your documents. Combines the power of AI with your personal documents for enhanced learning and productivity.",
        categories: ["productivity", "education", "nlp"],
        logo: "https://notebooklm.google/_/static/branding/v4/light_mode/notebook-logo.svg",
        url: "https://notebooklm.google",
        badges: ["featured", "trending", "freemium"],
        tags: ["notebook", "research", "learning", "documentation", "google"]
    },
    {
        name: "Fathom",
        description: "AI meeting assistant that records, transcribes, highlights, and summarizes your meetings so you can focus on the conversation. Works with Zoom, Google Meet, and Microsoft Teams.",
        categories: ["productivity", "audio", "business"],
        logo: "https://www.fathom.video/favicon.ico",
        url: "https://www.fathom.video",
        badges: ["featured", "trending", "freemium"],
        tags: ["meeting assistant", "transcription", "summarization", "collaboration", "productivity"]
    },
    {
        name: "Nyota AI",
        description: "AI-powered platform for creating and managing intelligent workflows and automation solutions for businesses and individuals.",
        categories: ["productivity", "business", "coding"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84Fp_XiCSNk7e3LjZejl6VqXHNoX_TtpH_g&s",
        url: "https://www.nyota.ai",
        badges: ["featured", "freemium"],
        tags: ["workflow automation", "business", "productivity", "AI agents"]
    },
    {
        name: "Looka",
        description: "AI-powered logo and brand design platform that creates professional logos, brand kits, and marketing materials in minutes.",
        categories: ["design", "business", "marketing"],
        logo: "https://looka.com/favicon.ico",
        url: "https://looka.com",
        badges: ["featured", "freemium"],
        tags: ["logo design", "branding", "marketing", "design", "business"]
    },
    {
        name: "Shortwave",
        description: "AI-powered email client that helps you organize, write, search, and schedule emails with advanced AI assistance. Features intelligent inbox organization, AI-powered search, and seamless team collaboration.",
        categories: ["productivity", "business", "nlp"],
        logo: "https://www.shortwave.com/favicon.ico",
        url: "https://www.shortwave.com",
        badges: ["featured", "trending", "freemium"],
        tags: ["email", "productivity", "AI assistant", "inbox organization", "team collaboration"]
    },
    {
        name: "Fyxer",
        description: "AI executive assistant that helps you get back one hour every day by organizing emails, drafting responses, and taking meeting notes. Works seamlessly with Gmail and Outlook.",
        categories: ["productivity", "business", "nlp"],
        logo: "https://images.prismic.io/sacra/aENuUrh8WN-LVyq0_fyxer-ai-logo.webp?auto=format,compress",
        url: "https://www.fyxer.com",
        badges: ["featured", "trending", "freemium"],
        tags: ["email assistant", "meeting notes", "productivity", "executive assistant", "automation"]
    },
    {
        name: "HubSpot AI Email Writer",
        description: "AI-powered email writing tool that helps create compelling marketing emails, subject lines, and content that resonates with your audience. Integrated with HubSpot's marketing platform.",
        categories: ["marketing", "nlp", "business"],
        logo: "https://www.hubspot.com/favicon.ico",
        url: "https://www.hubspot.com/products/marketing/ai-email-writer",
        badges: ["featured", "freemium"],
        tags: ["email marketing", "content creation", "marketing", "hubspot", "copywriting"]
    },
    {
        name: "Clockwise",
        description: "AI calendar assistant that optimizes your schedule by automatically finding the best meeting times, creating focus time, and reducing calendar conflicts for better productivity.",
        categories: ["productivity", "business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv-Cad_2bWAL4DNjNvrDeicGavpVPstcEI6w&s",
        url: "https://www.getclockwise.com",
        badges: ["featured", "freemium"],
        tags: ["calendar", "scheduling", "productivity", "meeting optimization", "time management"]
    },
    {
        name: "Reclaim",
        description: "AI-powered calendar and task management platform that automatically schedules your work, creates focus time, and helps you maintain work-life balance through intelligent time blocking.",
        categories: ["productivity", "business"],
        logo: "https://avatars.githubusercontent.com/u/52470885?s=280&v=4",
        url: "https://reclaim.ai",
        badges: ["featured", "freemium"],
        tags: ["calendar", "task management", "time blocking", "productivity", "work-life balance"]
    },
    {
        name: "Udio",
        description: "AI music generation platform that creates original songs and soundtracks from text prompts. Features high-quality audio generation with customizable styles and genres.",
        categories: ["audio", "design"],
        logo: "https://www.udio.com/favicon.ico",
        url: "https://www.udio.com",
        badges: ["featured", "trending", "freemium"],
        tags: ["music generation", "audio", "creative", "soundtracks", "AI music"]
    },
    {
        name: "Airops",
        description: "AI-powered data operations platform that automates data workflows, cleaning, and analysis. Helps businesses streamline their data processes and improve data quality.",
        categories: ["data-science", "business", "productivity"],
        logo: "https://cdn2.futurepedia.io/259acf3af47c9b45705dfffdf954aab0fdb15781-128x128.png?w=256",
        url: "https://www.airops.com",
        badges: ["featured", "freemium"],
        tags: ["data operations", "automation", "data cleaning", "workflow", "analytics"]
    },
    {
        name: "AdCreative.ai",
        description: "AI-powered advertising creative platform that generates high-converting ad creatives, social media posts, and marketing visuals. Optimizes designs for better performance and engagement.",
        categories: ["design", "marketing", "business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGXLdVkeAExPAQQgiKjNOk_dtf5Vq_H3OOg&s",
        url: "https://www.adcreative.ai",
        badges: ["featured", "freemium"],
        tags: ["ad creatives", "marketing", "design", "social media", "conversion optimization"]
    },
    {
        name: "Gumloop",
        description: "AI automation platform with a visual builder to orchestrate apps, data, and AI into end‑to‑end workflows.",
        categories: ["productivity", "business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjNfR-Uq9J8FRz7gp0MzQ1PYWV_LpClpMRBQ&s",
        url: "https://www.gumloop.com/home",
        badges: ["freemium"],
        tags: ["automation", "workflows", "integrations", "AI router", "no-code"]
    },
    {
        name: "Lexica Art",
        description: "AI image generation and gallery/search engine for prompts and models.",
        categories: ["vision", "design"],
        logo: "https://lexica.art/favicon.ico",
        url: "https://lexica.art/",
        badges: ["freemium", "trending"],
        tags: ["text-to-image", "image generation", "prompts", "gallery"]
    },
    {
        name: "LALAL.AI",
        description: "AI-powered stem separation to extract vocals, instruments, and more from audio files.",
        categories: ["audio"],
        logo: "https://www.lalal.ai/favicon.ico",
        url: "https://www.lalal.ai/",
        badges: ["freemium"],
        tags: ["stem separation", "audio", "vocals", "music"]
    },
    {
        name: "Crayo",
        description: "AI design and content creation platform for generating branded visuals and assets.",
        categories: ["design", "marketing"],
        logo: "https://crayo.ai/favicon.ico",
        url: "https://crayo.ai/",
        badges: ["freemium"],
        tags: ["design", "branding", "content", "images"]
    },
    {
        name: "Brandwell",
        description: "AI branding assistant to create brand identities, assets, and guidelines.",
        categories: ["design", "marketing", "business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJtelSUIlC6eUkRa-3KHaM2T_cuq2M3F0NQ&s",
        url: "https://brandwell.ai/",
        badges: ["freemium"],
        tags: ["branding", "logo", "brand kit", "design"]
    },
    {
        name: "Originality AI",
        description: "AI content detection and plagiarism checking for writers, educators, and teams.",
        categories: ["research", "education", "business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aH2w7cWRBaG7UKX0j3oBXw5Ih2oKRs_1UQ&s",
        url: "https://originality.ai/",
        badges: ["paid"],
        tags: ["AI detection", "plagiarism", "content quality", "verification"]
    },
    {
        name: "Writer",
        description: "Enterprise-grade writing assistant for brand-safe content, style guides, and collaboration.",
        categories: ["nlp", "productivity", "business", "marketing"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzb_-3SblAC-iOmwBPx_-Cn8CPmQLpwp5WQ&s",
        url: "https://writer.com/",
        badges: ["featured", "paid"],
        tags: ["writing", "style guide", "enterprise", "assistant"]
    },
    {
        name: "Undetectable AI",
        description: "AI content humanizer to rewrite text for naturalness while preserving meaning.",
        categories: ["nlp", "marketing", "education"],
        logo: "https://undetectable.ai/favicon.ico",
        url: "https://undetectable.ai/",
        badges: ["paid"],
        tags: ["humanizer", "paraphrasing", "writing", "content"]
    },
    {
        name: "ContentShake AI (Semrush)",
        description: "AI writing tool by Semrush to research, draft, and optimize SEO content.",
        categories: ["marketing", "productivity"],
        logo: "https://www.semrush.com/favicon.ico",
        url: "https://www.semrush.com/",
        badges: ["freemium"],
        tags: ["SEO", "content", "writing", "blog"]
    },
    {
        name: "Hemingway App",
        description: "Readability and clarity editor that highlights complex sentences and suggests improvements.",
        categories: ["productivity", "education"],
        logo: "https://hemingwayapp.com/favicon.ico",
        url: "https://hemingwayapp.com/",
        badges: ["freemium"],
        tags: ["writing", "readability", "editor", "grammar"]
    },
    {
        name: "Chatfuel",
        description: "AI chatbot platform for WhatsApp, Facebook, and Instagram to automate sales, support, and engagement.",
        categories: ["nlp", "marketing", "business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyp2HaWRBxp4sP0gAnaKGKdm880WNH0LAhgA&s",
        url: "https://chatfuel.com/",
        badges: ["freemium"],
        tags: ["chatbot", "WhatsApp", "automation", "customer support"]
    },
    {
        name: "Albert.ai",
        description: "Autonomous AI for digital marketing that optimizes campaigns across channels.",
        categories: ["marketing", "business"],
        logo: "https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Albert-1723796603408",
        url: "https://albert.ai/",
        badges: ["paid"],
        tags: ["marketing", "ads", "optimization", "automation"]
    },
    {
        name: "Userbot.ai",
        description: "AI customer service and sales chatbots that automate conversations across channels.",
        categories: ["nlp", "business", "productivity"],
        logo: "https://www.accuratereviews.com/wp-content/uploads/2024/11/Userbot.png",
        url: "https://userbot.ai/",
        badges: ["paid"],
        tags: ["chatbot", "customer service", "automation", "omnichannel"]
    },
    {
        name: "Browse AI",
        description: "No-code web scraping and monitoring with AI to extract data from any website.",
        categories: ["research", "data-science", "productivity"],
        logo: "https://cdn-1.webcatalog.io/catalog/browse-ai/browse-ai-icon-filled-256.png?v=1714776991599",
        url: "https://www.browse.ai/",
        badges: ["freemium", "trending"],
        tags: ["web scraping", "data extraction", "monitoring", "automation"]
    },
    {
        name: "Algolia",
        description: "AI-powered search and discovery platform for developers to build fast, relevant search.",
        categories: ["coding", "business", "productivity"],
        logo: "https://www.algolia.com/favicon.ico",
        url: "https://www.algolia.com/",
        badges: ["paid"],
        tags: ["search", "API", "ranking", "recommendations"]
    },
        {
        name: "Vibecode",
        description: "AI-powered code assistant for developers. Streamlines coding, debugging, and project management with smart automation.",
        categories: ["developer-tools", "productivity"],
        logo: "https://pbs.twimg.com/profile_images/1904766425094291456/-jOncDrH_400x400.jpg",
        url: "https://www.vibecodeapp.com/",
        badges: ["new", "freemium"],
        tags: ["code assistant", "automation", "debugging", "project management"]
    }
    ,
    {
        name: "Sourcegraph Cody",
        description: "AI code assistant by Sourcegraph providing enterprise code search, context-aware completions, and multi-repo codebase Q&A.",
        categories: ["coding", "productivity"],
        logo: "https://sourcegraph.com/favicon.ico",
        url: "https://sourcegraph.com/amp",
        badges: ["freemium"],
        tags: ["code assistant", "code search", "enterprise", "context"]
    },
    {
        name: "Anyword",
        description: "AI marketing copy generator with predictive performance scoring for ads, landing pages, emails, and social content.",
        categories: ["marketing", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuiDMxw_1gEXK_0cv3Mc61RiQWOnXUjNPIQ&s",
        url: "https://www.anyword.com/",
        badges: ["freemium"],
        tags: ["copywriting", "ads", "content", "optimization"]
    },
    {
        name: "Opus Clip",
        description: "AI video repurposing tool that turns long-form videos into viral-ready short clips with smart topic detection and auto reframing.",
        categories: ["video", "marketing"],
        logo: "https://cdn.prod.website-files.com/648e04d4bbae7004f1b35f15/65c2a852de94e97b6732bd05_opus-pro-icon.jpeg",
        url: "https://www.opus.pro/",
        badges: ["freemium", "trending"],
        tags: ["video repurposing", "shorts", "clips", "social media"]
    },
    {
        name: "CapCut",
        description: "Full-featured online & mobile video editor with AI tools for captions, resizing, background removal, and effects.",
        categories: ["video", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdwHXgG2fMqloi-qSt25WcLv4g_spjCc2Ew&s",
        url: "https://www.capcut.com/",
        badges: ["freemium"],
        tags: ["video editing", "captioning", "templates", "creator"]
    },
    {
        name: "Cohere",
        description: "Enterprise-grade AI platform offering multilingual large language models and APIs for retrieval-augmented generation and workflow automation.",
        categories: ["nlp", "coding"],
        logo: "https://cohere.com/favicon.ico",
        url: "https://cohere.com/",
        badges: ["featured", "freemium"],
        tags: ["language model", "RAG", "enterprise", "API"]
    },
    {
        name: "Aider",
        description: "AI-powered command-line coding assistant that helps write, edit, and debug code directly in your terminal with Git integration.",
        categories: ["coding", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiSouKvoP-p1tBtlmf6apsyUomD6JemppgQ&s",
        url: "https://aider.chat/",
        badges: ["open source", "freemium"],
        tags: ["command line", "coding assistant", "git", "terminal"]
    },
    {
        name: "Ideogram",
        description: "AI image generation platform specializing in creating high-quality images with accurate text rendering and creative visual content.",
        categories: ["vision", "design"],
        logo: "https://ideogram.ai/favicon.ico",
        url: "https://ideogram.ai/t/explore",
        badges: ["featured", "freemium"],
        tags: ["image generation", "text rendering", "creative", "visual content"]
    },
    {
        name: "Presentations.AI",
        description: "AI-powered presentation creation platform that generates professional slide decks from prompts with smart design and content suggestions.",
        categories: ["productivity", "business", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6PiVTWBJSCPwbZsoD_SySfw_EwlqlPLAwA&s",
        url: "https://www.presentations.ai/",
        badges: ["freemium"],
        tags: ["presentations", "slides", "business", "design automation"]
    },
    {
        name: "Aider AI",
        description: "AI coding companion platform providing intelligent code assistance, debugging help, and development workflow optimization.",
        categories: ["coding", "productivity"],
        logo: "https://play-lh.googleusercontent.com/Vd-fKUUAVyoGbyK5FExqLi2ZwsdI44hj7a-4BB1tBFddTFaTupkTegTw0BuseR2WMcM",
        url: "https://www.aider.ai/",
        badges: ["freemium"],
        tags: ["coding assistant", "debugging", "development", "workflow"]
    },
    {
        name: "Glean",
        description: "AI-powered workplace search and knowledge management platform that helps teams find information across all company tools and documents.",
        categories: ["productivity", "business"],
        logo: "https://glean.co/favicon.ico",
        url: "https://glean.co/",
        badges: ["featured", "paid"],
        tags: ["workplace search", "knowledge management", "enterprise", "information retrieval"]
    },
    {
        name: "Compose AI",
        description: "AI writing assistant browser extension that helps compose emails, documents, and messages with context-aware suggestions and autocomplete.",
        categories: ["productivity", "nlp"],
        logo: "https://www.compose.ai/favicon.ico",
        url: "https://www.compose.ai/",
        badges: ["freemium"],
        tags: ["writing assistant", "email", "browser extension", "autocomplete"]
    },
    {
        name: "Scribe",
        description: "AI-powered documentation tool that automatically creates step-by-step guides, tutorials, and process documentation by recording your actions.",
        categories: ["productivity", "business"],
        logo: "https://scribehow.com/favicon.ico",
        url: "https://scribehow.com/",
        badges: ["featured", "freemium"],
        tags: ["documentation", "tutorials", "process automation", "screen recording"]
    },
    {
        name: "Tome Lightfield",
        description: "AI-powered immersive storytelling platform for creating interactive presentations and visual narratives with 3D elements.",
        categories: ["design", "productivity"],
        logo: "https://lightfield.app/favicon.ico",
        url: "https://lightfield.app/",
        badges: ["trending", "freemium"],
        tags: ["storytelling", "3D presentations", "interactive", "immersive"]
    },
    {
        name: "ClipDrop",
        description: "Image capture, background removal, and AI editing tools for creators and e-commerce.",
        categories: ["vision", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSy55vfr7hZsHaoxyCWKnsWycogb-hAnAmCQ&s",
        url: "https://clipdrop.co",
        badges: ["freemium"],
        tags: ["image editing", "background removal", "capture", "creative"]
    },
    {
        name: "Luma AI",
        description: "Photoreal 3D scene capture and NeRF-based 3D generation from videos and photos.",
        categories: ["vision", "3d", "design"],
        logo: "https://play-lh.googleusercontent.com/AQybb5Ro1vvBtYOWKxxdgrvalnLFIsx7dh50DDAQFpPtmrZ1A-5CKTTO2xAr_A-EZ_CX",
        url: "https://luma.ai",
        badges: ["freemium"],
        tags: ["3d", "nerf", "photogrammetry", "visualization"]
    },
    {
        name: "Playground AI",
        description: "Web-based image-generation playground with many models and customization options.",
        categories: ["vision", "design"],
        logo: "https://playgroundai.com/favicon.ico",
        url: "https://playgroundai.com",
        badges: ["freemium"],
        tags: ["image generation", "creative", "models", "playground"]
    },
    {
        name: "Humata",
        description: "AI assistant for asking questions and extracting insights from your documents and PDFs.",
        categories: ["productivity", "research"],
        logo: "https://humata.ai/favicon.ico",
        url: "https://humata.ai",
        badges: ["freemium"],
        tags: ["documents", "qa", "pdf", "research"]
    },
    {
        name: "Fireflies.ai",
        description: "Meeting assistant that records, transcribes, and summarizes voice conversations and calls.",
        categories: ["audio", "productivity"],
        logo: "https://fireflies.ai/favicon.ico",
        url: "https://fireflies.ai",
        badges: ["freemium"],
        tags: ["transcription", "meetings", "summaries", "collaboration"]
    },
    {
        name: "LangChain",
        description: "Framework for developing LLM applications with chains, agents, and integrations (developer-focused).",
        categories: ["developer-tools", "coding"],
        logo: "https://logo.svgcdn.com/s/langchain-dark-8x.png",
        url: "https://langchain.com",
        badges: ["open source", "featured"],
        tags: ["framework", "llm", "agents", "developer"]
    },
    {
        name: "LlamaIndex",
        description: "Tooling (formerly GPT-Index) to build context and retrieval layers over your data for LLMs.",
        categories: ["developer-tools", "research"],
        logo: "https://miro.medium.com/1*XRIQnYLa1oXQgCjkRZcG2Q.jpeg",
        url: "https://llamaindex.ai",
        badges: ["open source"],
        tags: ["retrieval", "indexing", "knowledge", "llm"]
    },
    {
        name: "Replicate",
        description: "Host and run machine learning models in the cloud and share reproducible model APIs.",
        categories: ["developer-tools", "ml"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSxvbRITlPdnvXlSx6i3lexpcG8x2l8lJOA&s",
        url: "https://replicate.com",
        badges: ["freemium"],
        tags: ["models", "hosting", "api", "deployment"]
    },
    {
        name: "Runpod",
        description: "On-demand GPU cloud for training and running ML models and apps with simple pricing.",
        categories: ["infrastructure", "developer-tools"],
        logo: "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1683414788/icons/runpod-io.png",
        url: "https://runpod.io",
        badges: ["paid"],
        tags: ["gpu", "cloud", "training", "infrastructure"]
    },
    {
        name: "Pinecone",
        description: "Managed vector database for similarity search and retrieval-augmented workflows.",
        categories: ["developer-tools", "infrastructure"],
        logo: "https://www.pinecone.io/favicon.ico",
        url: "https://www.pinecone.io",
        badges: ["paid", "featured"],
        tags: ["vector db", "search", "retrieval", "embeddings"]
    },
    {
        name: "Weights & Biases",
        description: "Experiment tracking, model monitoring, and MLOps platform for teams building ML models.",
        categories: ["data-science", "mlops"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh8H3xi4Vh_qPRxg0fOJ-6kQuv4Ni0pWfhqQ&s",
        url: "https://wandb.ai",
        badges: ["freemium"],
        tags: ["mlops", "tracking", "experiments", "monitoring"]
    },
    {
        name: "Glasp",
        description: "Social web highlighter and knowledge sharing tool that summarizes and saves highlights.",
        categories: ["productivity", "research"],
        logo: "https://glasp.co/favicon.ico",
        url: "https://glasp.co",
        badges: ["freemium"],
        tags: ["highlighter", "notes", "web", "research"]
    },
    {
        name: "Repurpose.io",
        description: "AI-assisted platform to automatically repurpose long-form audio and video into short clips for social.",
        categories: ["video", "productivity"],
        logo: "https://pbs.twimg.com/profile_images/1430560562694524936/Q0Pp2iUs_200x200.jpg",
        url: "https://repurpose.io",
        badges: ["paid"],
        tags: ["video", "repurposing", "social", "clips"]
    },
    {
        name: "Clipchamp",
        description: "Browser-based video editor with AI features for auto-captioning, scene suggestions and quick social clips.",
        categories: ["video", "design"],
        logo: "https://clipchamp.com/favicon.ico",
        url: "https://www.clipchamp.com",
        badges: ["freemium"],
        tags: ["video editor", "captioning", "social", "editing"]
    },
    {
        name: "Bardeen",
        description: "Automation assistant that automates repetitive browser tasks and workflows with no-code playbooks.",
        categories: ["productivity", "automation"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdl5-QELULx2cCppBs2AGszqj0K6Lnx_WDg&s",
        url: "https://www.bardeen.ai",
        badges: ["freemium"],
        tags: ["automation", "no-code", "workflow", "productivity"]
    },
    {
        name: "Bloop",
        description: "Fast code search and navigation powered by AI — find examples, usages and answers across repositories.",
        categories: ["developer-tools", "coding"],
        logo: "https://bloop.ai/favicon.ico",
        url: "https://bloop.ai",
        badges: ["freemium"],
        tags: ["code search", "developer", "search", "IDE"]
    },
    {
        name: "MeetGeek",
        description: "AI meeting assistant that records, transcribes, and generates searchable summaries and action items.",
        categories: ["productivity", "audio"],
        logo: "https://play-lh.googleusercontent.com/eynrOTHXA2QDvEIltsECcgm3FgfENrt4KOz1S1xkEVX9pDZfAc1jtdEUy3A87ZLclK5e",
        url: "https://meetgeek.ai",
        badges: ["freemium"],
        tags: ["meetings", "transcription", "summaries", "action items"]
    },
    {
        name: "Tactiq",
        description: "Capture live captions from Google Meet, Zoom and Teams and convert them into notes and highlights.",
        categories: ["productivity", "audio"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBE6Opr6z7fzw4Gnv2YJeJBdIATda52bQxQ&s",
        url: "https://tactiq.io",
        badges: ["freemium"],
        tags: ["captions", "notes", "meetings", "transcription"]
    },
    {
        name: "Mubert",
        description: "Generative royalty-free music created by AI for streams, videos and apps in real-time.",
        categories: ["audio", "design"],
        logo: "https://mubert.com/favicon.ico",
        url: "https://mubert.com",
        badges: ["paid"],
        tags: ["music", "generative audio", "streaming", "royalty-free"]
    },
    {
        name: "Beatoven.ai",
        description: "AI music composer for content creators — make mood-matched, customizable tracks for videos and podcasts.",
        categories: ["audio", "design"],
        logo: "https://spcdn.shortpixel.ai/spio/ret_img,q_orig,to_auto,s_webp:avif/https://cdn.prod.website-files.com/63daf1fa1abcbc5e7969d7c9/64906d7aa4eac480834cb249_beatoven-fav.png",
        url: "https://beatoven.ai",
        badges: ["freemium"],
        tags: ["music", "composer", "background music", "content"]
    },
    {
        name: "Arize AI",
        description: "Model observability and monitoring platform for ML deployments: drift detection, explainability, and alerts.",
        categories: ["mlops", "data-science"],
        logo: "https://www.arize.com/favicon.ico",
        url: "https://www.arize.com",
        badges: ["paid"],
        tags: ["monitoring", "mlops", "drift", "observability"]
    },
    {
        name: "Streamlit",
        description: "Open-source framework to build and share data apps quickly — ideal for prototyping ML demos and dashboards.",
        categories: ["developer-tools", "data-science"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZslNSk4pgYd4cvWIY35bE9Hol5OvaL_xTvw&s",
        url: "https://streamlit.io",
        badges: ["open source"],
        tags: ["dashboard", "prototyping", "data apps", "python"]
    },
    {
        name: "Motion (useMotion)",
        description: "AI-powered scheduling and task automation tool that optimizes calendar focus time and meeting placement.",
        categories: ["productivity", "business"],
        logo: "https://www.usemotion.com/favicon.ico",
        url: "https://www.usemotion.com",
        badges: ["paid", "freemium"],
        tags: ["calendar", "scheduling", "time management", "automation"]
    },
    {
        name: "Bito AI",
        description: "AI assistant for developers that generates code suggestions, PR summaries and test scaffolding from context.",
        categories: ["developer-tools", "coding"],
        logo: "https://avatars.githubusercontent.com/u/86046978?s=280&v=4",
        url: "https://bito.ai",
        badges: ["paid"],
        tags: ["code assistant", "pr", "automation", "developer"]
    },
    {
        name: "Hotpot.ai",
        description: "Creator toolkit offering AI image editing, magic retouch, and design templates for social and product visuals.",
        categories: ["design", "vision"],
        logo: "https://hotpot.ai/favicon.ico",
        url: "https://hotpot.ai",
        badges: ["freemium"],
        tags: ["image editing", "design", "retouch", "templates"]
    },
    {
        name: "Gong",
        description: "Revenue intelligence platform that analyzes sales calls and customer conversations using AI to improve performance.",
        categories: ["business", "audio"],
        logo: "https://www.gong.io/favicon.ico",
        url: "https://www.gong.io",
        badges: ["featured","paid"],
        tags: ["sales", "conversation analytics", "insights", "crm"]
    },
    {
        name: "Observe.ai",
        description: "AI platform for contact centers that automates QA, extracts coaching insights and boosts agent performance.",
        categories: ["business", "audio"],
        logo: "https://cdn.prod.website-files.com/5caac3a8d636b7cfc2606d35/67253fc31c716c840bab91c1_OG%20Image.jpg",
        url: "https://www.observe.ai",
        badges: ["paid"],
        tags: ["call center", "qa", "analytics", "agent coaching"]
    },
    {
        name: "AWS Bedrock",
        description: "Managed service from AWS that provides access to multiple foundation models and scalable model APIs.",
        categories: ["ml", "infrastructure"],
        logo: "https://aws.amazon.com/favicon.ico",
        url: "https://aws.amazon.com/bedrock",
        badges: ["paid", "enterprise"],
        tags: ["foundation models", "api", "aws", "inference"]
    },
    {
        name: "Canva",
        description: "Design platform with Magic Write and AI image tools for rapid visual content creation and templates.",
        categories: ["design", "marketing"],
        logo: "https://www.canva.com/favicon.ico",
        url: "https://www.canva.com",
        badges: ["freemium"],
        tags: ["design", "templates", "social", "image generation"]
    },
    {
        name: "Superhuman",
        description: "An email client enhanced with AI features to summarize long threads, auto-draft replies, and speed up inbox management.",
        categories: ["productivity", "business", "nlp"],
        logo: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/24/f3/43/24f343c5-bc4c-979e-0a63-69b63a895d05/mza_654420484617467227.jpg/1200x1200bf.webp",
        url: "https://superhuman.com/",
        badges: ["paid", "featured"],
        tags: ["email", "productivity", "ai assistant", "writing"]
    },
    {
        name: "Asana AI",
        description: "AI features integrated into Asana for creating smarter project goals, generating status updates, and providing personalized workflow suggestions.",
        categories: ["productivity", "business"],
        logo: "https://asana.com/favicon.ico",
        url: "https://asana.com/product/ai",
        badges: ["paid", "featured"],
        tags: ["project management", "automation", "collaboration", "goals"]
    },
    {
        name: "Monday AI",
        description: "The AI assistant built into Monday.com to automate tasks, generate formulas, create email drafts, and summarize project data.",
        categories: ["productivity", "business"],
        logo: "https://monday.com/favicon.ico",
        url: "https://monday.com/ai-assistant",
        badges: ["paid", "featured"],
        tags: ["project management", "automation", "workflow", "workos"]
    },
    {
        name: "Airtable AI",
        description: "Allows you to leverage AI directly within your Airtable bases to summarize text, categorize feedback, and build custom automated workflows.",
        categories: ["productivity", "data-science", "business"],
        logo: "https://airtable.com/favicon.ico",
        url: "https://www.airtable.com/product/ai",
        badges: ["paid", "featured"],
        tags: ["database", "automation", "workflow", "no-code"]
    },
    {
        name: "Devin AI",
        description: "An autonomous AI software engineer that can handle entire development projects, from coding to debugging and deployment.",
        categories: ["coding", "productivity"],
        logo: "https://www.cognition-labs.com/favicon.ico",
        url: "https://www.cognition-labs.com/introducing-devin",
        badges: ["trending", "beta"],
        tags: ["ai software engineer", "automation", "development", "code generation"]
    },
    {
        name: "v0.dev",
        description: "A generative UI tool by Vercel that creates React components based on text prompts and image references.",
        categories: ["coding", "design"],
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/v0.png",
        url: "https://v0.dev/",
        badges: ["freemium", "trending"],
        tags: ["generative ui", "react", "components", "vercel", "frontend"]
    },
    {
        name: "Mutable AI",
        description: "An AI-accelerated development tool designed to improve existing codebases by refactoring code, generating documentation, and creating tests.",
        categories: ["coding", "developer-tools"],
        logo: "https://prod-findmyaitool.s3.us-east-1.amazonaws.com/images/ai-tool/logo/Mutable-1723797121219",
        url: "https://mutable.ai/",
        badges: ["freemium"],
        tags: ["code quality", "refactoring", "testing", "documentation"]
    },
    {
        name: "Magnific AI",
        description: "A powerful AI image upscaler and enhancer that is highly regarded for its ability to add intricate details and reimagine images.",
        categories: ["vision", "design"],
        logo: "https://netflixmartbd.net/wp-content/uploads/2024/09/MAGNIFIC-AI.jpg",
        url: "https://magnific.ai/",
        badges: ["paid", "trending"],
        tags: ["upscaler", "enhancer", "photo editing", "details", "art"]
    },
    {
        name: "Spline",
        description: "A collaborative 3D design tool that uses AI to generate 3D models, textures, and scenes from text prompts or 2D images.",
        categories: ["design", "3d", "vision"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDn6WoO122WPGS32xFuiCVtplXHSzgNK8U-g&s",
        url: "https://spline.design/",
        badges: ["freemium", "featured"],
        tags: ["3d design", "collaboration", "prototyping", "generative 3d"]
    },
    {
        name: "Galileo AI",
        description: "A specialized AI tool that generates high-fidelity, editable UI designs directly from natural language prompts.",
        categories: ["design", "productivity", "coding"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fAFiLnETbwl0KLwOHTEAYlx121ZKC4x8qA&s",
        url: "https://www.usegalileo.ai/",
        badges: ["beta"],
        tags: ["ui design", "prototyping", "figma", "generative ui", "ux"]
    },
    {
        name: "Fliki",
        description: "An AI-powered platform that transforms text into videos with realistic AI voices, popular for creating social media and promotional content.",
        categories: ["video", "audio", "marketing"],
        logo: "https://play-lh.googleusercontent.com/mAR2h6_Jlsa2643EU9R9cXgErsZEbByGtN9v9uQoDQvRLVxd738gE45MHk66-WPLr6E",
        url: "https://fliki.ai/",
        badges: ["freemium", "trending"],
        tags: ["text-to-video", "voiceover", "social media", "content creation"]
    },
    {
        name: "Adobe Podcast",
        description: "A web-based audio tool with powerful AI features, including 'Enhance Speech' to make voice recordings sound professional.",
        categories: ["audio", "productivity"],
        logo: "https://podcast.adobe.com/favicon.ico",
        url: "https://podcast.adobe.com/",
        badges: ["free", "featured"],
        tags: ["audio editing", "noise reduction", "voice enhancement", "podcast"]
    },
    {
        name: "Voicera",
        description: "A high-quality AI voice generation platform that offers realistic voice cloning and text-to-speech capabilities for creators.",
        categories: ["audio", "nlp"],
        logo: "https://voicera.co/favicon.ico",
        url: "https://voicera.co/",
        badges: ["freemium"],
        tags: ["voice cloning", "text-to-speech", "ai voice", "dubbing"]
    },
    {
        name: "Connected Papers",
        description: "A visual tool for researchers that generates a graph of related academic papers to help discover prior and subsequent work.",
        categories: ["research", "education"],
        logo: "https://www.connectedpapers.com/favicon.ico",
        url: "https://www.connectedpapers.com/",
        badges: ["freemium"],
        tags: ["research", "visualization", "academic", "literature review"]
    },
    {
        name: "Dom-o",
        description: "D-ID's text-to-video model for generating expressive, realistic digital people and characters from a single prompt.",
        categories: ["video", "vision", "design"],
        logo: "https://cdn.brandfetch.io/domo.com?c=1idGuZjjNQsbnvHtiGk",
        url: "https://www.d-id.com/dom-o/",
        badges: ["new", "trending"],
        tags: ["video generation", "avatar", "digital human", "text-to-video"]
    },
    {
        name: "Reflect",
        description: "An AI-powered note-taking tool for networked thought, featuring backlinking, daily notes, and an integrated AI assistant.",
        categories: ["productivity", "nlp"],
        logo: "https://reflect.app/favicon.ico",
        url: "https://reflect.app/",
        badges: ["paid", "featured"],
        tags: ["note-taking", "knowledge management", "writing assistant", "networked thought"]
    },
    {
        name: "Webflow AI",
        description: "AI features integrated into the Webflow platform to generate, rewrite, and translate website content directly in the designer, including alt text generation.",
        categories: ["design", "coding", "productivity", "marketing"],
        logo: "https://webflow.com/favicon.ico",
        url: "https://webflow.com/ai",
        badges: ["featured", "freemium"],
        tags: ["website builder", "no-code", "content generation", "localization", "seo", "copywriting"]
    },
    {
        name: "Klaviyo AI",
        description: "AI-powered features within the Klaviyo marketing platform for predictive analytics, audience segmentation, and personalized email/SMS content generation.",
        categories: ["marketing", "business", "nlp"],
        logo: "https://images.seeklogo.com/logo-png/51/2/klaviyo-logo-png_seeklogo-512370.png",
        url: "https://www.klaviyo.com/platform/ai",
        badges: ["featured", "paid"],
        tags: ["email marketing", "ecommerce", "automation", "predictive analytics"]
    },
    {
        name: "Tidio",
        description: "A customer service platform featuring AI-powered chatbots and live chat to automate support and engage website visitors.",
        categories: ["business", "nlp", "marketing"],
        logo: "https://www.tidio.com/favicon.ico",
        url: "https://www.tidio.com/",
        badges: ["freemium", "featured"],
        tags: ["chatbot", "customer support", "live chat", "automation"]
    },
    {
        name: "Phind",
        description: "An AI-powered search engine and pair programmer designed for developers to get instant answers and solve complex problems with code examples.",
        categories: ["coding", "research", "developer-tools"],
        logo: "https://phind.com/favicon.ico",
        url: "https://www.phind.com",
        badges: ["freemium", "trending"],
        tags: ["code search", "developer", "answers", "pair programming"]
    },
    {
        name: "Arc Browser",
        description: "A modern web browser with a suite of built-in AI features called Arc Max for tidying tabs, summarizing web pages, and getting quick answers.",
        categories: ["productivity", "business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJrLTz_7SfD6SaVwJns7u7cm3zbxJA93C-Q&s",
        url: "https://arc.net/",
        badges: ["free", "featured"],
        tags: ["browser", "productivity", "web", "organization", "ui"]
    },
    {
        name: "Reka AI",
        description: "A next-generation multimodal AI assistant capable of understanding text, images, video, and audio to perform complex reasoning tasks.",
        categories: ["nlp", "vision", "audio", "productivity"],
        logo: "https://images.squarespace-cdn.com/content/v1/66ab79c1fd8e9e59980a8536/c1f5b44c-2cbf-48ba-b8a3-a1262b2dd5b2/reka-logo-flat-%28white%29+%281%29.png?format=1500w",
        url: "https://reka.ai/",
        badges: ["trending", "freemium"],
        tags: ["multimodal", "chatbot", "assistant", "research"]
    },
    {
        name: "FigJam AI",
        description: "AI features within Figma's online whiteboard to accelerate brainstorming, diagramming, and planning with generative suggestions and summaries.",
        categories: ["productivity", "design", "business"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytghZVfHtnkmlv6Toplt5OwydyFaLSsgh2w&s",
        url: "https://www.figma.com/figjam/ai/",
        badges: ["freemium", "featured"],
        tags: ["whiteboard", "brainstorming", "collaboration", "diagramming", "figma"]
    },
    {
        name: "FlowiseAI",
        description: "An open-source and low-code tool for developers to build customized Large Language Model (LLM) orchestration flows and AI agents.",
        categories: ["coding", "developer-tools", "productivity"],
        logo: "https://flowiseai.com/favicon.ico",
        url: "https://flowiseai.com/",
        badges: ["open source", "freemium"],
        tags: ["llm", "orchestration", "agents", "low-code", "langchain"]
    },
    {
        name: "D-ID",
        description: "An AI platform to generate videos featuring talking avatars from a single image, using text-to-video and text-to-speech technology.",
        categories: ["video", "vision", "marketing"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UZ-mhaKFS6OL1XUW6yYHebDZOdQPYGYMmQ&s",
        url: "https://www.d-id.com/",
        badges: ["freemium", "trending"],
        tags: ["avatar", "video generation", "text-to-video", "creative"]
    },
    {
        name: "Colossyan Creator",
        description: "An AI video generation platform that helps create videos with AI avatars and automated translation, ideal for workplace training and communication.",
        categories: ["video", "business", "education"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTvP3z_JYp7SUnXrnPY3v_eW7o63AEhJB4A&s",
        url: "https://www.colossyan.com/",
        badges: ["paid", "freemium"],
        tags: ["video creation", "avatar", "training", "localization"]
    },
    {
        name: "AgentGPT",
        description: "A platform that allows you to create, configure, and deploy autonomous AI agents directly in your browser to achieve specific goals.",
        categories: ["productivity", "automation", "developer-tools"],
        logo: "https://agentgpt.reworkd.ai/favicon.ico",
        url: "https://agentgpt.reworkd.ai/",
        badges: ["open source", "freemium"],
        tags: ["ai agents", "automation", "goal-oriented", "productivity"]
    },
    {
        name: "Magic Eden AI",
        description: "An AI art and NFT creation suite that allows users to generate and mint NFTs on various blockchains.",
        categories: ["design", "vision", "web3"],
        logo: "https://images.seeklogo.com/logo-png/44/1/magic-eden-nft-marketplace-logo-png_seeklogo-441876.png",
        url: "https://magiceden.io/create",
        badges: ["freemium"],
        tags: ["nft", "image generation", "art", "crypto", "web3"]
    },
    {
        name: "Vercel AI SDK",
        description: "An open-source library for building conversational, streaming, and chat user interfaces with React, Svelte, and Vue.",
        categories: ["coding", "developer-tools"],
        logo: "https://vercel.com/favicon.ico",
        url: "https://sdk.vercel.ai/",
        badges: ["open source", "featured"],
        tags: ["sdk", "frontend", "chatbot", "ui", "development"]
    },
    {
        name: "Decktopus AI",
        description: "An AI-powered presentation generator that creates professional slide decks in minutes based on a single prompt.",
        categories: ["productivity", "business", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jG26kd7QTpq76RliSdGw5XCeFhD-n4X0YQ&s",
        url: "https://www.decktopus.com/",
        badges: ["freemium", "trending"],
        tags: ["presentations", "slides", "business", "design automation"]
    },
    {
        name: "Cogniflow",
        description: "A no-code platform for building and deploying custom AI models from text, images, or audio without writing any code.",
        categories: ["data-science", "productivity", "business"],
        logo: "https://cdn-1.webcatalog.io/catalog/cogniflow/cogniflow-icon.png?v=1714780738717",
        url: "https://www.cogniflow.ai/",
        badges: ["freemium", "no-code"],
        tags: ["no-code", "machine learning", "automation", "model building"]
    },
    {
        name: "DeepMotion",
        description: "An AI-powered platform that generates realistic 3D animations from 2D video files, transforming live-action into animated characters.",
        categories: ["vision", "design", "3d"],
        logo: "https://cdn-1.webcatalog.io/catalog/deepmotion/deepmotion-icon-filled-256.webp?v=1714780780343",
        url: "https://www.deepmotion.com/",
        badges: ["freemium"],
        tags: ["animation", "3d", "motion capture", "vfx", "game development"]
    },
    {
        name: "Miro Assist",
        description: "AI-powered features within the Miro collaborative whiteboard to generate ideas, summarize content, create diagrams, and automate tasks.",
        categories: ["productivity", "business", "design"],
        logo: "https://miro.com/favicon.ico",
        url: "https://miro.com/ai",
        badges: ["featured", "freemium"],
        tags: ["whiteboard", "collaboration", "brainstorming", "diagramming"]
    },
    {
        name: "CodiumAI",
        description: "An AI-powered toolkit for developers that analyzes code and generates meaningful tests to catch bugs before deployment.",
        categories: ["coding", "developer-tools"],
        logo: "https://www.codium.ai/favicon.ico",
        url: "https://www.codium.ai/",
        badges: ["freemium", "featured"],
        tags: ["code analysis", "testing", "development", "IDE"]
    },
    {
        name: "Readwise",
        description: "A service that saves and resurfaces highlights from articles and books, with an AI-powered app (Reader) to summarize content and ask questions.",
        categories: ["productivity", "research", "education"],
        logo: "https://readwise.io/favicon.ico",
        url: "https://readwise.io/",
        badges: ["paid", "freemium"],
        tags: ["knowledge management", "reading", "summarization", "notes"]
    },
    {
        name: "Visla",
        description: "An all-in-one AI video generation and editing platform designed for teams, helping to create business videos from text, audio, or existing footage.",
        categories: ["video", "business", "marketing"],
        logo: "https://www.visla.us/favicon.ico",
        url: "https://www.visla.us/",
        badges: ["freemium"],
        tags: ["video creation", "collaboration", "marketing", "text-to-video"]
    },
    {
        name: "Khroma",
        description: "An AI color tool for designers that learns your preferences to generate limitless color palettes for your projects.",
        categories: ["design", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToa89Ecotwhw-G4h8Z4BxZhrFlN_oAtihEJw&s",
        url: "https://www.khroma.co/",
        badges: ["free", "featured"],
        tags: ["color palette", "design", "ui", "branding"]
    },
    {
        name: "Resemble.AI",
        description: "A complete generative voice AI toolkit that allows you to clone voices, create text-to-speech with emotion, and perform speech-to-speech transformations.",
        categories: ["audio", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24LWokAUm8ZZX_GHb-YH7L77VoJK5LCeBxg&s",
        url: "https://www.resemble.ai/",
        badges: ["paid", "freemium"],
        tags: ["voice cloning", "text-to-speech", "audio", "voiceover"]
    },
    {
        name: "Sembly AI",
        description: "An AI meeting assistant that joins your calls, records them, and provides transcripts, summaries, and actionable insights.",
        categories: ["productivity", "business", "audio"],
        logo: "https://www.sembly.ai/favicon.ico",
        url: "https://www.sembly.ai/",
        badges: ["freemium"],
        tags: ["meetings", "transcription", "summarization", "collaboration"]
    },
    {
        name: "ResearchRabbit",
        description: "An AI-powered 'Spotify for papers' that helps researchers discover relevant literature and visualize academic networks.",
        categories: ["research", "education"],
        logo: "https://image.pngaaa.com/530/8702530-middle.png",
        url: "https://www.researchrabbit.ai/",
        badges: ["free", "featured"],
        tags: ["academic", "papers", "literature review", "visualization"]
    },
    {
        name: "Copyleaks",
        description: "A comprehensive plagiarism and AI content detector used by educational institutions and businesses to ensure originality.",
        categories: ["education", "business", "writing"],
        logo: "https://copyleaks.com/favicon.ico",
        url: "https://copyleaks.com/",
        badges: ["freemium", "paid"],
        tags: ["ai detection", "plagiarism", "content quality", "verification"]
    },
    {
        name: "BuildShip",
        description: "A low-code visual backend builder that allows you to create APIs, schedule tasks, and connect to AI models like OpenAI and Replicate.",
        categories: ["coding", "automation", "developer-tools"],
        logo: "https://logowik.com/content/uploads/images/buildship-icon4614.logowik.com.webp",
        url: "https://buildship.com/",
        badges: ["freemium", "trending"],
        tags: ["low-code", "backend", "workflow", "api", "automation"]
    },
    {
        name: "LeiaPix Converter",
        description: "An AI tool that instantly converts 2D images into 3D Lightfield images with depth and motion.",
        categories: ["vision", "design", "3d"],
        logo: "https://convert.leiapix.com/favicon.ico",
        url: "https://convert.leiapix.com/",
        badges: ["free", "freemium"],
        tags: ["3d", "image conversion", "animation", "depth map"]
    },
    {
        name: "Gradio",
        description: "An open-source Python library that allows you to quickly build and share web demos for your machine learning models.",
        categories: ["developer-tools", "data-science", "coding"],
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gradio-color.png",
        url: "https://www.gradio.app/",
        badges: ["open source", "featured"],
        tags: ["machine learning", "demo", "prototyping", "python"]
    },
    {
        name: "ProWritingAid",
        description: "An AI-powered writing assistant that provides grammar checking, style editing, and in-depth reports to improve your writing.",
        categories: ["writing", "nlp", "productivity"],
        logo: "https://prowritingaid.com/favicon.ico",
        url: "https://prowritingaid.com/",
        badges: ["freemium", "paid"],
        tags: ["writing assistant", "grammar", "style editor", "education"]
    },
    {
        name: "Civitai",
        description: "A platform for sharing and discovering open-source AI art models, primarily for Stable Diffusion, with a vast library of styles and concepts.",
        categories: ["vision", "design", "research"],
        logo: "https://civitai.com/favicon.ico",
        url: "https://civitai.com/",
        badges: ["free", "trending"],
        tags: ["stable diffusion", "models", "image generation", "community"]
    },
    {
        name: "Guidde",
        description: "An AI-powered platform that helps teams create video documentation and step-by-step how-to guides in seconds.",
        categories: ["productivity", "business", "education"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6t1FLJC5phjkAdYfVAex63sN2f-VOVPr1w&s",
        url: "https://www.guidde.com/",
        badges: ["freemium"],
        tags: ["documentation", "tutorials", "video", "onboarding"]
    },
    {
        name: "Tango",
        description: "A browser extension that automatically creates beautiful step-by-step how-to guides with screenshots as you work.",
        categories: ["productivity", "business", "automation"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh0-RNTRorTjbNQ3Mqed7o9_LhayLl_IRFvg&s",
        url: "https://www.tango.us/",
        badges: ["freemium", "featured"],
        tags: ["how-to guide", "documentation", "workflow", "screenshots"]
    },
    {
        name: "Harvey AI",
        description: "An AI platform designed for elite law firms to handle complex legal work, from contract analysis to due diligence and litigation.",
        categories: ["business", "legal"],
        logo: "https://www.fahimai.com/wp-content/uploads/2024/08/CTA-1-2.png",
        url: "https://www.harvey.ai/",
        badges: ["paid", "enterprise"],
        tags: ["legal tech", "law", "automation", "research"]
    },
    {
        name: "Lavender",
        description: "An AI-powered sales email coach that helps you write better sales emails, improve response rates, and track email performance.",
        categories: ["marketing", "business", "productivity"],
        logo: "https://freeappsai.com/wp-content/uploads/2024/04/lavender.png",
        url: "https://www.lavender.ai/",
        badges: ["freemium", "paid"],
        tags: ["sales", "email", "copywriting", "assistant"]
    },
    {
        name: "Microsoft Designer",
        description: "A graphic design app that uses AI to help you create stunning designs, social media posts, invitations, and more from a text prompt.",
        categories: ["design", "marketing"],
        logo: "https://store-images.s-microsoft.com/image/apps.59519.14282385397322807.60151050-41c3-444e-98c5-303abbe5ca61.9171383a-0488-48f6-b2b9-ce81b097fbeb",
        url: "https://designer.microsoft.com/",
        badges: ["free", "featured"],
        tags: ["graphic design", "image generation", "social media", "microsoft"]
    },
    {
        name: "Andi",
        description: "A conversational search engine that uses generative AI to provide direct answers and summaries instead of just links.",
        categories: ["research", "productivity", "nlp"],
        logo: "https://andisearch.com/favicon.ico",
        url: "https://andisearch.com/",
        badges: ["free", "trending"],
        tags: ["search engine", "conversational", "answers", "research"]
    },
    {
        name: "Photoshop Generative Fill",
        description: "An AI feature within Adobe Photoshop that allows users to add, remove, or extend content in images using simple text prompts.",
        categories: ["design", "vision", "productivity"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
        url: "https://www.adobe.com/products/photoshop/generative-fill.html",
        badges: ["featured", "paid"],
        tags: ["image editing", "generative ai", "photo", "adobe"]
    },
    {
        name: "Stable Audio",
        description: "An AI music and sound effect generation tool by Stability AI for creating high-quality, royalty-free audio tracks and effects from text prompts.",
        categories: ["audio", "design", "creative"],
        logo: "https://stability.ai/favicon.ico",
        url: "https://www.stableaudio.com/",
        badges: ["freemium", "trending"],
        tags: ["music generation", "sound effects", "audio", "creative"]
    },
    {
        name: "Kore.ai",
        description: "An enterprise-grade conversational AI platform for building advanced virtual assistants and process automation for business.",
        categories: ["business", "nlp", "automation"],
        logo: "https://play-lh.googleusercontent.com/tDIiw4Mm7yndvcWuHS9aL9tBXsgYWswWy2zBw2ozM095vsuA-7xZAZAA_caJX-85xw",
        url: "https://kore.ai/",
        badges: ["enterprise", "paid"],
        tags: ["chatbot", "customer service", "automation", "enterprise"]
    },
    {
        name: "Roboflow",
        description: "An end-to-end computer vision platform for developers to build, train, and deploy custom vision models.",
        categories: ["vision", "developer-tools", "coding"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTTtGcu3CULhh1-vzeEZfq23gCXTVStR1bsg&s",
        url: "https://roboflow.com/",
        badges: ["freemium", "featured"],
        tags: ["computer vision", "machine learning", "datasets", "deployment"]
    },
    {
        name: "Topaz Labs AI Suite",
        description: "A suite of AI-powered applications (Gigapixel, DeNoise, Sharpen, Video AI) for upscaling, denoising, and sharpening photos and videos.",
        categories: ["vision", "design", "video"],
        logo: "https://i.pcmag.com/imagery/reviews/03i0OIGngA04fnfRKrm8lwR-13.fit_lim.size_1050x591.v1723743107.png",
        url: "https://www.topazlabs.com/",
        badges: ["paid", "featured"],
        tags: ["photo editing", "video enhancement", "upscaling", "denoise"]
    },
    {
        name: "LM Studio",
        description: "A popular desktop application for discovering, downloading, and running large language models locally on a personal computer.",
        categories: ["productivity", "developer-tools", "research"],
        logo: "https://lmstudio.ai/favicon.ico",
        url: "https://lmstudio.ai/",
        badges: ["free", "trending"],
        tags: ["llm", "local", "offline", "chatbot", "models"]
    },
    {
        name: "Ollama",
        description: "A lightweight, extensible tool for running large language models like Llama 3 and Mistral locally from the command line.",
        categories: ["developer-tools", "coding"],
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/ollama.png",
        url: "https://ollama.com/",
        badges: ["open source", "featured"],
        tags: ["llm", "local", "cli", "models", "development"]
    },
    {
        name: "AnythingLLM",
        description: "An open-source, private chatbot solution that allows you to chat with your documents and data securely on your own infrastructure.",
        categories: ["productivity", "business", "developer-tools"],
        logo: "https://pbs.twimg.com/profile_images/1689841935320797184/yMN81vNK_400x400.jpg",
        url: "https://anythingllm.com/",
        badges: ["open source", "freemium"],
        tags: ["chatbot", "documents", "rag", "privacy", "enterprise"]
    },
    {
        name: "Viggle AI",
        description: "A viral AI tool that animates static characters based on a reference video, creating character-to-video animations.",
        categories: ["video", "vision", "design"],
        logo: "https://viggle.ai/favicon.ico",
        url: "https://viggle.ai/",
        badges: ["freemium", "trending"],
        tags: ["animation", "video generation", "character", "creative"]
    },
    {
        name: "Together AI",
        description: "A cloud platform providing fast inference for leading open-source generative AI models and tools for fine-tuning.",
        categories: ["developer-tools", "infrastructure"],
        logo: "https://images.seeklogo.com/logo-png/61/1/together-ai-icon-logo-png_seeklogo-611708.png",
        url: "https://www.together.ai/",
        badges: ["paid", "featured"],
        tags: ["inference", "api", "cloud", "fine-tuning", "models"]
    },
    {
        name: "Anyscale",
        description: "An enterprise platform for scaling AI and Python applications, enabling developers to build and deploy complex AI workloads efficiently.",
        categories: ["developer-tools", "infrastructure", "data-science"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHRfC6VXvf5j8r8twtxb7IIeJV3Wdmvp3kw&s",
        url: "https://www.anyscale.com/",
        badges: ["enterprise", "paid"],
        tags: ["scaling", "python", "ray", "enterprise", "mlops"]
    },
    {
        name: "Gensler AI",
        description: "An AI image generator developed by the global architecture firm Gensler, trained on curated data for architectural and design concepts.",
        categories: ["design", "business"],
        logo: "https://www.gensler.com/favicon.ico",
        url: "https://www.gensler.com/blog/harnessing-the-power-of-ai-to-create-our-own-image-generator",
        badges: ["enterprise"],
        tags: ["architecture", "design", "image generation", "interior design"]
    },
    {
        name: "Finalsite AI",
        description: "A suite of AI tools integrated into the Finalsite platform to help schools generate website content, news, and communications.",
        categories: ["education", "marketing", "writing"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnY7F_B6f4CGdk-Lbu1eR8Vn8lqD64-a4Ng&s",
        url: "https://www.finalsite.com/ai-for-schools",
        badges: ["paid"],
        tags: ["education", "content creation", "schools", "communication"]
    },
    {
        name: "DiffusionBee",
        description: "A simple, one-click installer for running Stable Diffusion on Apple Silicon Macs for free, offline image generation.",
        categories: ["design", "vision"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvAahWlTNLRSLKZy2kWD0DiBNDxz81Klk26g&s",
        url: "https://diffusionbee.com/",
        badges: ["free", "open source"],
        tags: ["stable diffusion", "image generation", "mac", "local", "offline"]
    },
    {
        name: "Groq",
        description: "An AI inference company that provides ultra-low-latency access to large language models (LLMs) through its custom-built LPU (Language Processing Unit) hardware.",
        categories: ["developer-tools", "infrastructure", "productivity"],
        logo: "https://groq.com/favicon.ico",
        url: "https://groq.com/",
        badges: ["featured", "trending", "freemium"],
        tags: ["inference", "llm", "lpu", "developer", "speed"]
    },
    {
        name: "Luma Dream Machine",
        description: "A highly capable and scalable text-to-video generation model from Luma AI, known for creating realistic and imaginative video clips from prompts.",
        categories: ["video", "vision", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSuHat92wNVmfqc8GDH2xov3AFwnRqhIzrQ&s",
        url: "https://lumalabs.ai/dream-machine",
        badges: ["trending", "freemium", "featured"],
        tags: ["video generation", "text-to-video", "ai video", "creative"]
    },
    {
        name: "Janitor AI",
        description: "A popular platform for engaging in conversational chat with a wide variety of AI-powered characters (bots), with a focus on immersive and creative role-playing.",
        categories: ["nlp", "productivity", "chat"],
        logo: "https://janitorai.com/favicon.ico",
        url: "https://janitorai.com/",
        badges: ["trending", "freemium"],
        tags: ["chatbot", "character", "role-playing", "entertainment"]
    },
    {
        name: "Kimi",
        description: "An AI chatbot developed by Kuaishou Technology, famous for its exceptionally large context window, allowing it to process and analyze very long documents (up to 2 million words).",
        categories: ["nlp", "productivity", "research"],
        logo: "https://kimi.moonshot.cn/favicon.ico",
        url: "https://kimi.moonshot.cn/",
        badges: ["featured", "trending", "free"],
        tags: ["chatbot", "long context", "document analysis", "research"]
    },
    {
        name: "Warp",
        description: "A modern, high-performance terminal for developers, rebuilt from the ground up with AI command search, workflows, and team collaboration features.",
        categories: ["developer-tools", "coding", "productivity"],
        logo: "https://pbs.twimg.com/profile_images/1894734059160457216/fQoxAaVh_400x400.jpg",
        url: "https://www.warp.dev/",
        badges: ["free", "featured"],
        tags: ["terminal", "developer", "cli", "ai assistant", "coding"]
    },
    {
        name: "Rask AI",
        description: "An AI-powered video localization platform that offers translation, voice cloning, and automated lip-syncing for over 130 languages.",
        categories: ["video", "audio", "marketing"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBz0U0wK87LTl5c_Snq-9nuoM-WSJtbJIoQ&s",
        url: "https://www.rask.ai/",
        badges: ["trending", "freemium"],
        tags: ["video localization", "translation", "dubbing", "lip-sync", "voice cloning"]
    },
    {
        name: "Meshy AI",
        description: "A leading AI-powered 3D asset generation tool that creates high-quality 3D models and textures from text prompts or 2D images in minutes.",
        categories: ["3d", "design", "vision", "coding"],
        logo: "https://www.meshy.ai/favicon.ico",
        url: "https://www.meshy.ai/",
        badges: ["trending", "freemium", "featured"],
        tags: ["text-to-3d", "image-to-3d", "3d modeling", "game development", "vfx"]
    },
    {
        name: "Kaedim",
        description: "An AI-powered platform that transforms 2D images, sketches, or concept art into fully textured 3D models, with plugins for major game engines.",
        categories: ["3d", "design", "vision", "coding"],
        logo: "https://www.kaedim3d.com/favicon.ico",
        url: "https://www.kaedim3d.com/",
        badges: ["paid", "featured"],
        tags: ["image-to-3d", "3d modeling", "game development", "prototyping"]
    },
    {
        name: "CrewAI",
        description: "An open-source framework for orchestrating role-playing, autonomous AI agents to work together to accomplish complex tasks.",
        categories: ["developer-tools", "productivity", "automation"],
        logo: "https://images.seeklogo.com/logo-png/61/2/crew-ai-logo-png_seeklogo-619843.png",
        url: "https://www.crewai.com/",
        badges: ["open source", "featured", "trending"],
        tags: ["ai agents", "autonomous", "collaboration", "framework"]
    },
    {
        name: "Meta AI",
        description: "Meta's conversational AI assistant, integrated across Facebook, Instagram, WhatsApp, and Ray-Ban smart glasses, powered by Llama 3.",
        categories: ["nlp", "productivity", "chat"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPLRH_0dK5pOW6AApDtSpUFZij_DrFOpc3ww&s",
        url: "https://ai.meta.com/",
        badges: ["trending", "free"],
        tags: ["chatbot", "assistant", "llama 3", "social media", "integrated"]
    },
    {
        name: "Gemma 2",
        description: "A family of lightweight, state-of-the-art open models from Google, built from the same research and technology used to create the Gemini models.",
        categories: ["nlp", "research", "coding"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw-5wfIb3r0RvopPlUl7ofPu-1ngNAhPL2w&s",
        url: "https://ai.google.dev/gemma",
        badges: ["open source", "featured", "free"],
        tags: ["language model", "open source", "google", "gemini", "research"]
    },
    {
        name: "Amazon Q Developer",
        description: "A generative AI-powered conversational assistant from AWS that can help you understand, build, extend, and operate AWS applications. Integrated into the IDE and AWS console.",
        categories: ["coding", "productivity", "developer-tools"],
        logo: "https://aws.amazon.com/favicon.ico",
        url: "https://aws.amazon.com/q/developer/",
        badges: ["featured", "freemium", "enterprise"],
        tags: ["code assistant", "aws", "enterprise", "IDE", "development"]
    },
    {
        name: "Arc Search",
        description: "An AI-powered mobile browser app that searches for you, reading multiple webpages and creating a clean, summarized page with the answer.",
        categories: ["productivity", "research", "nlp"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBysSlxfQ2gfku-2xty4gVhVGejhGfNlJpKw&s",
        url: "https://arc.net/search",
        badges: ["free", "trending", "mobile"],
        tags: ["search", "mobile", "browser", "summarization", "answers"]
    },
    {
        name: "Julius.ai",
        description: "An AI data analyst that can analyze and visualize complex data, create forecasts, and generate insights from spreadsheets, PDFs, and articles using natural language.",
        categories: ["data-science", "productivity", "research"],
        logo: "https://julius.ai/favicon.ico",
        url: "https://julius.ai",
        badges: ["freemium", "featured"],
        tags: ["data analysis", "visualization", "statistics", "spreadsheets", "research"]
    },
    {
        name: "ChatPDF",
        description: "An AI tool that lets you chat with any PDF document. Ask questions, request summaries, or quickly find information. Ideal for students, researchers, and professionals.",
        categories: ["productivity", "research", "education"],
        logo: "https://www.chatpdf.com/apple-touch-icon.png",
        url: "https://www.chatpdf.com",
        badges: ["freemium", "featured", "popular"],
        tags: ["pdf", "documents", "chat", "summarization", "research"]
    },
    {
        name: "Winston AI",
        description: "An industry-leading AI detector with 99.98% accuracy for content from ChatGPT, GPT-4, Gemini, and other LLMs. Built for educators and publishers.",
        categories: ["research", "education", "productivity", "nlp"],
        logo: "https://gowinston.ai/favicon.ico",
        url: "https://gowinston.ai",
        badges: ["freemium", "featured"],
        tags: ["ai detection", "writing", "education", "plagiarism"]
    },
    {
        name: "GPTZero",
        description: "The leading AI detector for checking text from ChatGPT, GPT-5, Gemini, and more. Provides advanced insights, plagiarism checking, and writing feedback.",
        categories: ["research", "education", "productivity", "nlp"],
        logo: "https://gptzero.me/favicon.ico",
        url: "https://gptzero.me",
        badges: ["freemium", "featured", "popular"],
        tags: ["ai detection", "writing", "education", "plagiarism", "research"]
    },
    {
        name: "BypassGPT",
        description: "An AI-powered tool designed to rewrite and 'humanize' AI-generated text to make it bypass AI detectors, while maintaining quality and coherence.",
        categories: ["nlp", "writing", "productivity"],
        logo: "https://www.bypassgpt.ai/favicon.ico",
        url: "https://www.bypassgpt.ai",
        badges: ["paid", "trending", "freemium"],
        tags: ["writing", "humanizer", "paraphrasing", "ai detection", "seo"]
    },
    {
        name: "Flux.1",
        description: "State-of-the-art open-weights image generation model by Black Forest Labs, known for exceptional prompt adherence and text rendering.",
        categories: ["vision", "design"],
        logo: "https://blackforestlabs.ai/favicon.ico",
        url: "https://blackforestlabs.ai",
        badges: ["open source", "trending"],
        tags: ["image generation", "open source", "black forest labs", "art"]
    },
    {
        name: "ComfyUI",
        description: "The most powerful, modular, node-based GUI for running Stable Diffusion and Flux workflows.",
        categories: ["vision", "design", "developer-tools"],
        logo: "https://preview.redd.it/new-comfyui-logo-icon-v0-c05cowjywfze1.png?auto=webp&s=a2f9a1a7ec7cd9276b947c71beb1433cdf83e4a3",
        url: "https://www.comfy.org/",
        badges: ["open source", "popular"],
        tags: ["stable diffusion", "nodes", "workflow", "image generation"]
    },
    {
        name: "Vectorizer.ai",
        description: "AI tool that converts JPEG and PNG bitmap images into scalable SVG vectors with high color and shape accuracy.",
        categories: ["design", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsLRNbzoL0mhyzyOpYfpEaK1mhtfBRqG6ZA&s",
        url: "https://vectorizer.ai",
        badges: ["freemium", "featured"],
        tags: ["vector", "svg", "design", "conversion"]
    },
    {
        name: "Blockade Labs",
        description: "AI tool for generating high-quality 360° panoramic skyboxes and worlds for 3D environments and games.",
        categories: ["vision", "3d", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5wGqE0nP4gJV_Ad8FGzQJsNot0qnGxASA-A&s",
        url: "https://skybox.blockadelabs.com",
        badges: ["freemium", "trending"],
        tags: ["360", "skybox", "3d environment", "game dev"]
    },
    {
        name: "Haiper",
        description: "Generative AI platform for creating high-quality, lifelike videos from text and images.",
        categories: ["video", "design"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAX7ZPndFqFMoKjhto9o19_Gf8Te10o2lwAQ&s",
        url: "https://haiper.ai",
        badges: ["freemium", "trending"],
        tags: ["video generation", "creative", "animation", "text-to-video"]
    },
    {
        name: "Wonder Dynamics",
        description: "AI tool that automatically animates, lights, and composes CG characters into live-action scenes.",
        categories: ["video", "vision", "3d"],
        logo: "https://www.logo-designer.co/storage/2021/09/2021-autodesk-new-logo-design.png",
        url: "https://wonderdynamics.com",
        badges: ["paid", "featured"],
        tags: ["vfx", "animation", "character", "compositing"]
    },
    {
        name: "Vidu",
        description: "Powerful AI video generation model capable of creating high-definition, physically consistent video clips.",
        categories: ["video", "design"],
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/vidu.png",
        url: "https://www.vidu.studio",
        badges: ["freemium", "new"],
        tags: ["video generation", "creative", "physics", "text-to-video"]
    },
    {
        name: "Morph Studio",
        description: "AI filmmaking platform for generating consistent characters and meme-worthy video content.",
        categories: ["video", "design"],
        logo: "https://www.morphstudio.com/favicon.ico",
        url: "https://www.morphstudio.com",
        badges: ["freemium", "trending"],
        tags: ["video generation", "memes", "storytelling", "filmmaking"]
    },
    {
        name: "Hedra",
        description: "Generative AI for creating talking, singing, and expressive characters from a single image and audio.",
        categories: ["video", "audio", "vision"],
        logo: "https://www.hedra.com/favicon.ico",
        url: "https://www.hedra.com",
        badges: ["freemium", "trending"],
        tags: ["character", "lip-sync", "animation", "singing"]
    },
    {
        name: "Supermaven",
        description: "Ultra-fast AI coding assistant with a massive 1-million-token context window for understanding large codebases.",
        categories: ["coding", "developer-tools"],
        logo: "https://supermaven.com/favicon.ico",
        url: "https://supermaven.com",
        badges: ["freemium", "featured"],
        tags: ["code completion", "large context", "speed", "developer"]
    },
    {
        name: "Open Interpreter",
        description: "Open-source tool that lets LLMs run code (Python, Javascript, Shell, etc.) locally on your computer to complete tasks.",
        categories: ["coding", "productivity", "automation"],
        logo: "https://openinterpreter.com/favicon.ico",
        url: "https://openinterpreter.com",
        badges: ["open source", "trending"],
        tags: ["local", "automation", "terminal", "interpreter"]
    },
    {
        name: "AutoGPT",
        description: "Experimental open-source attempt to make GPT-4 fully autonomous, capable of self-prompting to achieve complex goals.",
        categories: ["developer-tools", "automation"],
        logo: "https://openuk.uk/wp-content/uploads/2024/12/AUTOgpt_Logo_dark_RGB.png",
        url: "https://agpt.co",
        badges: ["open source", "featured"],
        tags: ["agents", "autonomous", "automation", "goals"]
    },
    {
        name: "Pinokio",
        description: "A browser that lets you install, run, and control various AI applications and models locally with one click.",
        categories: ["developer-tools", "productivity"],
        logo: "https://pinokio.computer/favicon.ico",
        url: "https://pinokio.computer",
        badges: ["free", "open source"],
        tags: ["local ai", "installer", "browser", "automation"]
    },
    {
        name: "Jan",
        description: "Open-source alternative to ChatGPT that runs 100% offline on your computer using local AI models.",
        categories: ["productivity", "nlp", "developer-tools"],
        logo: "https://jan.ai/favicon.ico",
        url: "https://jan.ai",
        badges: ["open source", "free"],
        tags: ["offline", "local", "privacy", "chatbot"]
    },
    {
        name: "Voice.ai",
        description: "Real-time AI voice changer for gamers, streamers, and content creators.",
        categories: ["audio", "productivity"],
        logo: "https://voice.ai/favicon.ico",
        url: "https://voice.ai",
        badges: ["freemium", "popular"],
        tags: ["voice changer", "streaming", "gaming", "audio"]
    },
    {
        name: "Wondercraft",
        description: "AI-powered audio studio that turns blog posts and newsletters into studio-quality podcasts and audiobooks.",
        categories: ["audio", "marketing"],
        logo: "https://www.wondercraft.ai/favicon.ico",
        url: "https://www.wondercraft.ai",
        badges: ["paid", "freemium"],
        tags: ["podcast", "text-to-speech", "content creation", "audio"]
    },
    {
        name: "Riffusion",
        description: "An app for generating music from text prompts using visual spectrograms.",
        categories: ["audio", "design"],
        logo: "https://www.riffusion.com/favicon.ico",
        url: "https://www.riffusion.com",
        badges: ["free", "open source"],
        tags: ["music generation", "creative", "spectrogram", "audio"]
    },
    {
        name: "Sonauto",
        description: "A controllable AI music generator that creates full songs with lyrics, allowing high flexibility in style and composition.",
        categories: ["audio", "design"],
        logo: "https://sonauto.ai/favicon.ico",
        url: "https://sonauto.ai",
        badges: ["freemium", "trending"],
        tags: ["music generation", "songwriting", "lyrics", "audio"]
    },
    {
        name: "Limitless",
        description: "Personalized AI powered by what you've seen, said, and heard. Formerly known as Rewind AI.",
        categories: ["productivity", "life-assistant"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBS_Q76p_nPYrXo3EgPjqEgpWgPI6Tit0Gg&s",
        url: "https://limitless.ai",
        badges: ["paid", "featured"],
        tags: ["memory", "meeting assistant", "recording", "search"]
    },
    {
        name: "Taskade",
        description: "AI-powered productivity platform that combines tasks, notes, and mind maps with autonomous AI agents.",
        categories: ["productivity", "business"],
        logo: "https://www.taskade.com/favicon.ico",
        url: "https://www.taskade.com",
        badges: ["freemium", "featured"],
        tags: ["project management", "agents", "mind maps", "collaboration"]
    },
    {
        name: "Harpa.ai",
        description: "Chrome extension that integrates AI into your browser for web automation, summarization, and monitoring.",
        categories: ["productivity", "automation"],
        logo: "https://harpa.ai/favicon.ico",
        url: "https://harpa.ai",
        badges: ["freemium", "popular"],
        tags: ["browser extension", "automation", "web scraping", "monitoring"]
    },
    {
        name: "Monica",
        description: "All-in-one AI browser assistant that integrates GPT-4, Claude, and Gemini into a sidebar for search, writing, and summarization.",
        categories: ["productivity", "nlp"],
        logo: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F20ed0f19-a77d-4f4e-8e7e-38faf2317359%2Fef9d734c-3e79-4c9d-81c2-4f16679f52a4%2Fmonica-logo.png?table=block&id=1695e585-942f-81bf-912d-e40ab41cc079&t=1695e585-942f-81bf-912d-e40ab41cc079&width=360&cache=v2",
        url: "https://monica.im",
        badges: ["freemium", "trending"],
        tags: ["browser extension", "assistant", "writing", "sidebar"]
    },
    {
        name: "Sider",
        description: "ChatGPT sidebar for Chrome that lets you use AI tools alongside any website for translation, explanation, and writing.",
        categories: ["productivity", "nlp"],
        logo: "https://play-lh.googleusercontent.com/VghuZRn0-oLvbaGqptsM-9Qr6Ka7Pmw7lfmu6_UQ56mZS6bsXbET9Uf0wF0FECP8lEM",
        url: "https://sider.ai",
        badges: ["freemium", "popular"],
        tags: ["sidebar", "browser extension", "reading", "translation"]
    },
    {
        name: "ChatHub",
        description: "All-in-one chatbot client that allows you to chat with multiple LLMs (ChatGPT, Bing, Claude, etc.) simultaneously.",
        categories: ["productivity", "nlp", "chat"],
        logo: "https://chathub.gg/logo.png",
        url: "https://chathub.gg",
        badges: ["freemium", "open source"],
        tags: ["chatbot", "comparison", "multi-model", "client"]
    },
    {
        name: "Jenni AI",
        description: "AI writing assistant designed specifically for academic research, helping users write and cite papers faster.",
        categories: ["research", "education", "writing"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjWrS14D2yV6mMhSUlvKAra40BX1o0TFsIQ&s",
        url: "https://jenni.ai",
        badges: ["freemium", "featured"],
        tags: ["academic writing", "citations", "research", "essay"]
    },
    {
        name: "StealthGPT",
        description: "AI writing tool designed to generate human-like text that is undetectable by AI detection systems.",
        categories: ["writing", "productivity"],
        logo: "https://stealthgpt.ai/favicon.ico",
        url: "https://stealthgpt.ai",
        badges: ["paid", "trending"],
        tags: ["humanizer", "undetectable", "writing", "stealth"]
    },
    {
        name: "Hix.AI",
        description: "All-in-one AI writing copilot offering a vast suite of tools for content creation, email, and academic writing.",
        categories: ["writing", "productivity", "marketing"],
        logo: "https://hix.ai/favicon.ico",
        url: "https://hix.ai",
        badges: ["freemium", "featured"],
        tags: ["writing assistant", "content creation", "copilot", "marketing"]
    }
];

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const backToTopButton = document.getElementById('backToTop');
const toolCount = document.getElementById('toolCount');
const totalToolCount = document.getElementById('totalToolCount');
const featuredCount = document.getElementById('featuredCount');
const categoriesCount = document.getElementById('categoriesCount');
const categoryList = document.getElementById('categoryList');
const sortSelect = document.getElementById('sortSelect');
const loadingOverlay = document.getElementById('loadingOverlay');
const emptyState = document.getElementById('emptyState');
const viewButtons = document.querySelectorAll('.view-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreContainer = document.getElementById('loadMoreContainer');
const loadMoreInfo = document.getElementById('loadMoreInfo');

let currentCategory = 'all';
let currentCategoryGroup = null; // 'chatbots' | 'image' | 'video' | 'audio' | 'developer' | 'productivity'
let currentSearch = '';
let currentSort = 'default';
let currentView = 'grid';
let isAllToolsCollapsed = false;

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

// Show More preferences storage
const showMorePreferences = {
    descriptions: new Map(), // Store tool name -> expanded state
    tags: new Map(), // Store tool name -> expanded state
    
    save() {
        try {
            localStorage.setItem('showMoreDescriptions', JSON.stringify(Array.from(this.descriptions.entries())));
            localStorage.setItem('showMoreTags', JSON.stringify(Array.from(this.tags.entries())));
        } catch (e) {
            console.warn('Could not save Show More preferences:', e);
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
            console.warn('Could not load Show More preferences:', e);
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
    
    // Populate featured tool icons (top 3 featured tools)
    if (heroToolIcons) {
        const featuredTools = aiTools
            .filter(tool => tool.badges && tool.badges.includes('featured'))
            .slice(0, 3);
        
        featuredTools.forEach(tool => {
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
                this.src = 'logo/favicon.svg';
                this.onerror = null; // Prevent error loops
            };
            
            iconWrapper.appendChild(icon);
            
            // Make icon clickable to navigate to tool
            iconWrapper.addEventListener('click', () => {
                window.open(tool.url, '_blank');
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
            console.log('Hero CTA clicked - User exploring tools');
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
                renderTools();
                // Scroll to tools grid
                const toolsSection = document.querySelector('.tools-grid');
                if (toolsSection) toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }
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
        return matchesCategory && matchesSearch;
    });
    
    // Sort
    if (currentSort === 'name') {
        filteredTools.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === 'featured') {
        filteredTools.sort((a, b) => (b.badges?.includes('featured') ? 1 : 0) - (a.badges?.includes('featured') ? 1 : 0));
    }
    
    // Clear grid only if resetting
    if (resetPage) {
        toolsGrid.innerHTML = '';
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
        console.warn('Load already in progress');
        return;
    }
    
    const totalDisplayed = currentPage * itemsPerPage;
    if (totalDisplayed >= filteredTools.length) {
        console.info('All tools already loaded');
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
        
        // Simulate network delay for smooth UX (optional - remove in production if not needed)
        setTimeout(() => {
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
        }, 300); // 300ms delay for smooth loading animation
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
    console.info(`Successfully loaded ${itemsPerPage} more tools`);
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

function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    
    // Create header with logo and name
    const header = document.createElement('div');
    header.className = 'tool-header';
    
    const logo = document.createElement('img');
    logo.className = 'tool-logo';
    logo.src = tool.logo;
    logo.alt = `${tool.name} logo`;
    logo.loading = 'lazy'; // Optimize LCP: lazy load below-the-fold images
    logo.width = 48; // Prevent CLS: explicit dimensions
    logo.height = 48;
    logo.decoding = 'async'; // Enable async image decode for better performance
    logo.fetchPriority = 'low'; // Deprioritize below-fold images
    logo.onerror = function() {
        // Fallback for broken images with performance tracking
        this.src = 'logo/favicon.svg';
        this.onerror = null; // Prevent infinite error loops
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
        link.textContent = 'Visit Site';
        footer.appendChild(link);
        
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
        link.textContent = 'Visit Site';
        card.appendChild(link);
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

function updateCategoryListVisibility() {
    if (!categoryList) return;

    const categoryItems = categoryList.querySelectorAll('li');
    const showAllCategories = currentCategory === 'all' && !currentCategoryGroup;

    categoryItems.forEach(item => {
        const isAllToolsItem = item.dataset.category === 'all';
        const isActiveItem = item.classList.contains('active');

        if (showAllCategories) {
            item.style.display = '';
        } else {
            item.style.display = (isAllToolsItem || isActiveItem) ? '' : 'none';
        }
    });
}

// Sidebar category click
if (categoryList) {
    categoryList.addEventListener('click', e => {
        if (e.target.tagName === 'LI') {
            const clickedItem = e.target;
            const clickedCategory = clickedItem.dataset.category;
            const isAllToolsItem = clickedCategory === 'all';
            const wasActive = clickedItem.classList.contains('active');

            if (isAllToolsItem && wasActive && !currentCategoryGroup) {
                isAllToolsCollapsed = !isAllToolsCollapsed;
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

// Load More Button - Click-only (no auto-loading)
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadMoreTools();
    });
}

// Keyboard shortcuts for accessibility
document.addEventListener('keydown', (e) => {
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
            viewButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
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
    console.log('[Image Perf] Total loaded:', window.imageLoadSuccess);
    console.log('[Image Perf] Errors:', window.imageLoadErrors.length);
    console.log('[Image Perf] Load duration:', window.imageLoadMetrics.duration + 'ms');
    
    if (window.imageLoadErrors.length > 0) {
        console.warn('[Image Perf] Failed images:', window.imageLoadErrors);
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
    isAllToolsCollapsed = false;
    updateCategoryListVisibility();
    renderTools();
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
        console.warn('discoverFavicon error', e);
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
    const linkVal = (linkInputEl && linkInputEl.value.trim()) || '';
    if (!linkVal) {
        alert('Enter a Tool Link first');
        return;
    }
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
    } else {
        updateIconPreview(null);
        fetchLogoBtn.textContent = 'Not Found';
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

// Initialize with some default tools if empty
let myTools = JSON.parse(localStorage.getItem('myTools') || JSON.stringify([
  {
    name: 'ChatGPT',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    link: 'https://chat.openai.com'
  },
  {
    name: 'Gemini',
    icon: 'https://brandlogos.net/wp-content/uploads/2025/03/gemini_icon-logo_brandlogos.net_bqzeu-512x512.png',
    link: 'https://gemini.google.com'
  },
  {
    name: 'Perplexity',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJtpuSPxCai6OZE-p61Ivmz9A_QSa414g7Q&s',
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
      img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iMjQiIGZpbGw9IiNmMWY1ZjkiLz4KPHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIxMiIgeT0iMTIiPgo8cGF0aCBkPSJNMTIgMkw2IDhMMTIgMTRMMTggOEwxMiAyWiIgZmlsbD0iIzk0YTNiOCIvPgo8L3N2Zz4KPC9zdmc+';
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
      item.onclick = () => window.open(tool.link, '_blank');
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
        modal.style.display = 'flex';
        toolForm.reset();
        editIndex = idx;
        if (typeof idx === 'number') {
            modalTitle.textContent = 'Edit Tool';
            const t = myTools[idx];
            document.getElementById('tool-name').value = t.name;
            document.getElementById('tool-icon').value = t.icon;
            document.getElementById('tool-link').value = t.link || '';
            updateIconPreview(t.icon);
        } else {
            modalTitle.textContent = 'Add Tool';
            updateIconPreview(null);
        }
        if (fetchLogoBtn) { fetchLogoBtn.textContent = 'Auto Fetch Logo'; fetchLogoBtn.disabled = false; }
    }

    function closeModal() {
        modal.style.display = 'none';
        editIndex = null;
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
      alert('Form elements not found. Please refresh the page.');
      return;
    }

    // Show loading state
    submitBtn.textContent = 'Saving...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      const name = nameInput.value.trim();
      const icon = iconInput.value.trim();
      const link = linkInput.value.trim();
      
      if (!name) {
        alert('Please enter a tool name');
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
                    alert('A tool with this name already exists');
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
                    console.log('Tool saved successfully:', tool);
                } catch (error) {
                    console.error('Error saving tool:', error);
                    alert('Failed to save tool. Please try again.');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            };

            if (!finalIcon) {
                if (link) {
                    // Attempt auto fetch synchronously
                        discoverFavicon(link).then(found => {
                            finalIcon = found || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIGZpbGw9IiNmMWY1ZjkiIHJ4PSIxNCIvPjx0ZXh0IHg9IjM2IiB5PSI0MiIgZm9udC1mYW1pbHk9InN5c3RlbS1VSSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCI+Tk8gSUNPTjwvdGV4dD48L3N2Zz4=';
                            if (iconInput) iconInput.value = finalIcon;
                            updateIconPreview(finalIcon);
                            proceed();
                        });
                    return; // proceed will be called async
                } else {
                    finalIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIGZpbGw9IiNmMWY1ZjkiIHJ4PSIxNCIvPjx0ZXh0IHg9IjM2IiB5PSI0MiIgZm9udC1mYW1pbHk9InN5c3RlbS1VSSIgZm9udC1zaXplPSIxMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzk0YTNiOCI+Tk8gSUNPTjwvdGV4dD48L3N2Zz4=';
                }
            }

            // Continue if icon already present
            proceed();
      
        }, 300); // Small delay for better UX
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

    form.addEventListener('submit', function(e){
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

        // Simulate async submission (could be replaced with fetch to backend / form service)
        setTimeout(()=>{
            submitBtn.textContent='Submitted!';
            statusEl.textContent='Thank you! Your tool has been submitted for review.';
            statusEl.classList.add('success');
            // Store locally so user sees their submission (optional queue)
            const submissions = JSON.parse(localStorage.getItem('pendingSubmissions')||'[]');
            submissions.push({ name: nameInput.value.trim(), url: urlInput.value.trim(), ts: Date.now() });
            localStorage.setItem('pendingSubmissions', JSON.stringify(submissions));
            setTimeout(()=>{ submitBtn.disabled=false; submitBtn.textContent=originalText; form.reset(); }, 1600);
        }, 900);
    });

    resetBtn.addEventListener('click', ()=>{
        clearError(nameInput,errorName); clearError(urlInput,errorUrl); statusEl.textContent=''; statusEl.className='form-status';
    });
})();
