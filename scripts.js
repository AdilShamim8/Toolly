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
        name: "Mistral AI",
        description: "Open-source AI model provider offering powerful language models and APIs for developers. Known for efficient and high-performance models.",
        categories: ["nlp", "coding"],
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/800px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png",
        url: "https://mistral.ai",
        badges: ["featured"],
        tags: ["language model", "open source", "API", "development"]
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
        logo: "https://www.perplexity.ai/favicon.ico",
        url: "https://www.perplexity.ai",
        badges: ["featured","trending", "freemium"],
        tags: ["search", "research", "answers"]
    },
    {
        name: "Grok",
        description: "X's AI assistant with real-time knowledge and a rebellious streak. Known for its witty responses and ability to access current information.",
        categories: ["nlp", "productivity"],
        logo: "https://images.seeklogo.com/logo-png/61/1/grok-logo-png_seeklogo-613403.png",
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
        logo: "https://openai.com/favicon.ico",
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
        logo: "https://www.quadratichq.com/images/og-image.png",
        url: "https://app.quadratichq.com/",
        badges: ["featured", "freemium"],
        tags: ["spreadsheet", "data analysis", "automation", "productivity"]
    },
    {
        name: "HeyGen",
        description: "AI video creation with talking avatars.",
        categories: ["vision", "audio"],
        logo: "https://images.seeklogo.com/logo-png/61/1/heygen-logo-png_seeklogo-617924.png",
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
        name: "Grammarly",
        description: "AI-powered writing assistant that helps improve your writing.",
        categories: ["nlp", "productivity"],
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM34CCdspT0QP8vyW66b_Dred0jfmSgQosyw&s",
        url: "https://www.grammarly.com",
        badges: ["freemium"],
        tags: ["writing", "grammar", "assistant"]
    },
    {
        name: "Google Bard",
        description: "Conversational generative AI chatbot developed by Google.",
        categories: ["nlp", "productivity"],
        logo: "https://logowik.com/content/uploads/images/google-bard3872.logowik.com.webp",
        url: "https://bard.google.com",
        badges: ["trending", "freemium"],
        tags: ["chatbot", "google", "language model"]
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
        logo: "https://www.shortlyai.com/favicon.ico",
        url: "https://www.shortlyai.com",
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
        name: "ElevenLabs",
        description: "Advanced AI voice generation and cloning platform with ultra-realistic voices.",
        categories: ["audio"],
        logo: "https://elevenlabs.io/favicon.ico",
        url: "https://elevenlabs.io",
        badges: ["featured", "trending"],
        tags: ["voice", "audio", "generation"]
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
        name: "Leonardo.AI",
        description: "Advanced AI image generation platform with specialized models for different styles.",
        categories: ["vision", "design"],
        logo: "https://app.leonardo.ai/favicon.ico",
        url: "https://leonardo.ai",
        badges: ["featured", "freemium"],
        tags: ["image generation", "art", "creative"]
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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShirXl4FhieiUSy5vtV3qedpTHLgtm6RzlFw&s",
        url: "https://inflection.ai",
        badges: ["featured", "freemium"],
        tags: ["assistant", "conversation", "personal"]
    },
    {
        name: "DataRobot",
        description: "Enterprise AI platform for automated machine learning and model deployment.",
        categories: ["data-science"],
        logo: "https://www.datarobot.com/favicon.ico",
        url: "https://www.datarobot.com",
        badges: ["featured", "paid"],
        tags: ["machine learning", "automation", "enterprise"]
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
        name: "Gong",
        description: "AI-powered revenue intelligence platform that analyzes sales conversations and provides insights.",
        categories: ["business"],
        logo: "https://www.gong.io/favicon.ico",
        url: "https://www.gong.io",
        badges: ["featured", "paid"],
        tags: ["sales", "revenue intelligence", "conversation analytics", "business"]
    },
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
        logo: "https://www.gumloop.com/favicon.ico",
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
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZ4QQfxaDvEIaDN90a36K5qwFJ16I6H4Jpw&s",
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
    }

];

// DOM Elements
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');
const backToTopButton = document.getElementById('backToTop');
const toolCount = document.getElementById('toolCount');
const totalToolCount = document.getElementById('totalToolCount');
const featuredCount = document.getElementById('featuredCount');
const categoryList = document.getElementById('categoryList');
const sortSelect = document.getElementById('sortSelect');
const loadingOverlay = document.getElementById('loadingOverlay');
const emptyState = document.getElementById('emptyState');
const viewButtons = document.querySelectorAll('.view-btn');

let currentCategory = 'all';
let currentSearch = '';
let currentSort = 'default';
let currentView = 'grid';

// Initialize stats
function initializeStats() {
    if (totalToolCount) {
        totalToolCount.textContent = aiTools.length;
    }
    
    if (featuredCount) {
        const featuredTools = aiTools.filter(tool => tool.badges && tool.badges.includes('featured'));
        featuredCount.textContent = featuredTools.length;
    }
}

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
    
    // Show/hide empty state
    if (filtered.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        filtered.forEach(tool => toolsGrid.appendChild(createToolCard(tool)));
    }
    
    // Update count
    if (toolCount) {
        toolCount.textContent = `Showing ${filtered.length} tool${filtered.length !== 1 ? 's' : ''}`;
    }
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
    logo.onerror = function() {
        // Fallback for broken images
        this.src = 'logo/favicon.svg';
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
        
        // Description
        const desc = document.createElement('p');
        desc.className = 'tool-description';
        desc.textContent = tool.description;
        card.appendChild(desc);
        
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
        
        // Regular tags
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
    }
    
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
        case 'life-assistant': return 'Life Assistant';
        case 'marketing': return 'Marketing';
        case 'business': return 'Business';
        case 'video': return 'Video Generator';
        case 'education': return 'Education';
        case 'data-science': return 'Data Science & Analytics';
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

// Loading animation
window.addEventListener('load', () => {
    // Hide loading overlay after a short delay
    setTimeout(() => {
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }
    }, 800);
    
    // Initialize stats
    initializeStats();
    
    // Initial render
    renderTools();
});

// --- My Tools Feature ---
const toolsListEl = document.getElementById('tools-list');
const editBtn = document.getElementById('edit-tools-btn');
const modal = document.getElementById('tool-modal');
const closeModalBtn = document.getElementById('close-modal');
const toolForm = document.getElementById('tool-form');
const modalTitle = document.getElementById('modal-title');

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
    icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.png',
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
      editButton.title = 'Edit';
      editButton.innerHTML = '✏️';
      editButton.onclick = (e) => {
        e.stopPropagation();
        openModal(idx);
      };
      
      const deleteButton = document.createElement('button');
      deleteButton.className = 'tool-delete';
      deleteButton.title = 'Delete';
      deleteButton.innerHTML = '🗑️';
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
        } else {
            modalTitle.textContent = 'Add Tool';
        }
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
    editBtn.textContent = editMode ? 'Done' : '✏️ Edit';
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
      
      if (!icon) {
        alert('Please enter an icon URL');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        iconInput.focus();
        return;
      }
      
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
      
      const tool = { name, icon, link };
      
      if (typeof editIndex === 'number') {
        myTools[editIndex] = tool;
      } else {
        myTools.push(tool);
      }
      
      try {
        saveTools();
        renderMyTools();
        closeModal();
        
        // Show success feedback
        submitBtn.textContent = 'Saved!';
        submitBtn.style.background = '#4ade80';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
        }, 1000);
        
        console.log('Tool saved successfully:', tool);
      } catch (error) {
        console.error('Error saving tool:', error);
        alert('Failed to save tool. Please try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    }, 300); // Small delay for better UX
  };

  // Initial render
  renderMyTools();
} else {
  console.error('My Tools: Cannot set up event handlers - required elements missing');
}
