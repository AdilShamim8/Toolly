// Chatbot powered by Gemini-2.5-Flash API

class ToollyAIAdvisor {
    constructor() {
        this.isOpen = false;
        this.apiKey = null; // Will be set by user or from environment
        this.toolsData = [];
        this.recommender = null; // Deterministic recommender
        this.initChatbot();
    }

    initChatbot() {
        // Create chatbot UI elements
        this.createChatbotUI();
        
        // Add event listeners
        this.addEventListeners();
        
        // Get tools data from the global aiTools variable
        this.toolsData = window.aiTools || [];
        
        // Initialize deterministic recommender
        if (typeof ToollyRecommender !== 'undefined') {
            this.recommender = new ToollyRecommender(this.toolsData);
        }
    }

    createChatbotUI() {
        // Create chatbot container
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container';
        chatbotContainer.innerHTML = `
            <div class="chatbot-toggle">
                <i class="fas fa-robot"></i>
                <span class="chatbot-badge">AI Advisor</span>
            </div>
            <div class="chatbot-panel size-default">
                <div class="chatbot-header">
                    <div class="chatbot-size-controls">
                        <button class="chatbot-size-btn" data-size="small" id="size-small-btn" title="Small size (Ctrl+1)" aria-label="Set chatbot to small size">S</button>
                        <button class="chatbot-size-btn active" data-size="default" id="size-default-btn" title="Medium size (Ctrl+2)" aria-label="Set chatbot to medium size">M</button>
                        <button class="chatbot-size-btn" data-size="large" id="size-large-btn" title="Large size (Ctrl+3)" aria-label="Set chatbot to large size">L</button>
                    </div>
                    <h3>AI Tool Advisor</h3>
                    <button class="chatbot-close" title="Close AI Advisor" aria-label="Close chatbot"><i class="fas fa-times"></i></button>
                </div>
                <div class="chatbot-messages">
                    <div class="chatbot-message bot">
                        <div class="chatbot-message-content">
                            <p>👋 Hi there! I'm your AI Tool Advisor. I can help you discover the perfect AI tools for any task from our extensive collection.</p>
                            <p>Just tell me what you're working on or what problem you're trying to solve. For example:</p>
                            <ul>
                                <li>"I need an AI tool for generating marketing content"</li>
                                <li>"What's the best AI for coding assistance?"</li>
                                <li>"I'm looking for tools to help with data analysis"</li>
                                <li>"Recommend AI tools for video creation"</li>
                            </ul>
                            <p>I'll provide personalized recommendations based on our website's inventory!</p>
                        </div>
                    </div>
                </div>
                <div class="chatbot-input-container">
                    <input type="text" class="chatbot-input" placeholder="Describe your project or needs..." />
                    <button class="chatbot-send"><i class="fas fa-paper-plane"></i></button>
                </div>
                <div class="chatbot-api-key-container">
                    <input type="text" class="chatbot-api-key" placeholder="Enter your Gemini API key" />
                    <button class="chatbot-save-key">Save Key</button>
                    <p class="chatbot-api-note">Your API key is stored locally and never sent to our servers.</p>
                </div>
            </div>
        `;

        document.body.appendChild(chatbotContainer);

        // Store references to DOM elements
        this.chatbotToggle = document.querySelector('.chatbot-toggle');
        this.chatbotPanel = document.querySelector('.chatbot-panel');
        this.chatbotClose = document.querySelector('.chatbot-close');
        this.chatbotMessages = document.querySelector('.chatbot-messages');
        this.chatbotInput = document.querySelector('.chatbot-input');
        this.chatbotSend = document.querySelector('.chatbot-send');
        this.chatbotApiKey = document.querySelector('.chatbot-api-key');
        this.chatbotSaveKey = document.querySelector('.chatbot-save-key');
        
        // Check for saved API key
        const savedApiKey = localStorage.getItem('gemini_api_key');
        if (savedApiKey) {
            this.apiKey = savedApiKey;
            this.chatbotApiKey.value = savedApiKey;
            document.querySelector('.chatbot-api-key-container').style.display = 'none';
        }
    }

    addEventListeners() {
        // Toggle chatbot panel
        this.chatbotToggle.addEventListener('click', () => this.toggleChatbot());
        
        // Close chatbot panel
        this.chatbotClose.addEventListener('click', () => this.toggleChatbot(false));
        
        // Send message on button click
        this.chatbotSend.addEventListener('click', () => this.sendMessage());
        
        // Send message on Enter key
        this.chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
        
        // Save API key
        this.chatbotSaveKey.addEventListener('click', () => this.saveApiKey());
        
        // Size control buttons - using direct ID selectors for better reliability
        const smallBtn = document.getElementById('size-small-btn');
        const defaultBtn = document.getElementById('size-default-btn');
        const largeBtn = document.getElementById('size-large-btn');
        const sizeButtons = [smallBtn, defaultBtn, largeBtn];
        const self = this; // Store reference to 'this' for use in event handlers
        
        // Function to handle size button clicks
        const handleSizeButtonClick = function(size) {
            console.log('Size button clicked:', size);
            
            // Add transitioning class for smooth animation
            self.chatbotPanel.classList.add('size-transitioning');
            
            // Remove active class from all buttons
            sizeButtons.forEach(btn => {
                if (btn) btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Remove all size classes
            self.chatbotPanel.classList.remove('size-small', 'size-default', 'size-large');
            
            // Add the selected size class with a slight delay for smoother transition
            setTimeout(() => {
                self.chatbotPanel.classList.add(`size-${size}`);
                
                // Ensure the panel stays within viewport bounds
                self.ensurePanelInViewport();
                
                // Remove transitioning class after animation completes
                setTimeout(() => {
                    self.chatbotPanel.classList.remove('size-transitioning');
                }, 400);
            }, 10);
            
            // Save the selected size to localStorage
            localStorage.setItem('chatbot_size', size);
            
            // Log the current state for debugging
            console.log('Applied size class:', `size-${size}`);
            console.log('Current classes:', self.chatbotPanel.className);
            
            // Add a subtle visual feedback
            self.showSizeChangeConfirmation(size);
        };
        
        // Add click handlers to each button
        if (smallBtn) smallBtn.onclick = function() { handleSizeButtonClick.call(this, 'small'); };
        if (defaultBtn) defaultBtn.onclick = function() { handleSizeButtonClick.call(this, 'default'); };
        if (largeBtn) largeBtn.onclick = function() { handleSizeButtonClick.call(this, 'large'); };
        
        // Track resize events
        let resizeTimeout;
        const resizeObserver = new ResizeObserver(entries => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                // Save dimensions after resize completes
                localStorage.setItem('chatbot_width', this.chatbotPanel.style.width || this.chatbotPanel.offsetWidth + 'px');
                localStorage.setItem('chatbot_height', this.chatbotPanel.style.height || this.chatbotPanel.offsetHeight + 'px');
                
                // Ensure the panel stays within viewport
                this.ensurePanelInViewport();
            }, 100);
        });
        
        // Observe the chatbot panel for resize events
        resizeObserver.observe(this.chatbotPanel);
        
        // Add keyboard shortcuts for size controls
        document.addEventListener('keydown', (e) => {
            // Only handle shortcuts when chatbot is open and focused
            if (!this.isOpen || !this.chatbotPanel.contains(document.activeElement)) return;
            
            // Ctrl/Cmd + 1/2/3 for size shortcuts
            if ((e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
                let targetSize = null;
                let targetButton = null;
                
                switch(e.key) {
                    case '1':
                        targetSize = 'small';
                        targetButton = smallBtn;
                        break;
                    case '2':
                        targetSize = 'default';
                        targetButton = defaultBtn;
                        break;
                    case '3':
                        targetSize = 'large';
                        targetButton = largeBtn;
                        break;
                }
                
                if (targetSize && targetButton) {
                    e.preventDefault();
                    handleSizeButtonClick.call(targetButton, targetSize);
                }
            }
        });
    }
    
    ensurePanelInViewport() {
        const rect = this.chatbotPanel.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const containerRect = this.chatbotToggle.getBoundingClientRect();
        
        // Reset position to default (top-right alignment)
        this.chatbotPanel.style.left = 'auto';
        this.chatbotPanel.style.right = '0';
        this.chatbotPanel.style.top = '70px';
        
        // Get the updated rect after reset
        const updatedRect = this.chatbotPanel.getBoundingClientRect();
        
        // Check if panel extends beyond right edge of viewport
        if (updatedRect.right > viewportWidth) {
            const newRight = Math.max(10, viewportWidth - updatedRect.width - 10);
            this.chatbotPanel.style.right = 'auto';
            this.chatbotPanel.style.left = newRight + 'px';
        }
        
        // Check if panel extends beyond bottom edge of viewport
        if (updatedRect.bottom > viewportHeight) {
            const newTop = Math.max(10, viewportHeight - updatedRect.height - 10);
            this.chatbotPanel.style.top = newTop + 'px';
        }
        
        // Ensure minimum distance from edges
        const finalRect = this.chatbotPanel.getBoundingClientRect();
        if (finalRect.left < 10) {
            this.chatbotPanel.style.left = '10px';
            this.chatbotPanel.style.right = 'auto';
        }
        if (finalRect.top < 10) {
            this.chatbotPanel.style.top = '10px';
        }
    }

    showSizeChangeConfirmation(size) {
        // Create a temporary notification element
        const notification = document.createElement('div');
        notification.className = 'size-change-notification';
        notification.textContent = `Size: ${size.charAt(0).toUpperCase() + size.slice(1)}`;
        notification.style.cssText = `
            position: absolute;
            top: -30px;
            right: 50%;
            transform: translateX(50%);
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: bold;
            z-index: 10001;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        `;
        
        this.chatbotPanel.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.style.opacity = '1';
        }, 10);
        
        // Hide and remove notification after delay
        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 1500);
    }

    toggleChatbot(forceState = null) {
        this.isOpen = forceState !== null ? forceState : !this.isOpen;
        
        if (this.isOpen) {
            this.chatbotPanel.style.display = 'flex';
            
            // Restore saved size if available
            const savedSize = localStorage.getItem('chatbot_size') || 'default';
            
            // Remove all size classes first
            this.chatbotPanel.classList.remove('size-small', 'size-default', 'size-large');
            
            // Add the saved size class
            this.chatbotPanel.classList.add(`size-${savedSize}`);
            
            // Update the active button - using direct ID selectors for better reliability
            const smallBtn = document.getElementById('size-small-btn');
            const defaultBtn = document.getElementById('size-default-btn');
            const largeBtn = document.getElementById('size-large-btn');
            
            // Remove active class from all buttons
            [smallBtn, defaultBtn, largeBtn].forEach(btn => {
                if (btn) btn.classList.remove('active');
            });
            
            // Add active class to the appropriate button
            const activeBtn = savedSize === 'small' ? smallBtn : 
                             savedSize === 'large' ? largeBtn : defaultBtn;
            if (activeBtn) activeBtn.classList.add('active');
            
            console.log('Restored size:', savedSize);
            
            // Restore saved custom dimensions if available (but prioritize size classes)
            if (localStorage.getItem('chatbot_width') && localStorage.getItem('chatbot_height') && !savedSize) {
                this.chatbotPanel.style.width = localStorage.getItem('chatbot_width');
                this.chatbotPanel.style.height = localStorage.getItem('chatbot_height');
                console.log('Restored custom dimensions:', localStorage.getItem('chatbot_width'), 'x', localStorage.getItem('chatbot_height'));
            }
            
            // Show the panel with animation
            setTimeout(() => {
                this.chatbotPanel.classList.add('open');
                this.chatbotToggle.classList.add('active');
                
                // Ensure proper viewport positioning after opening
                setTimeout(() => {
                    this.ensurePanelInViewport();
                }, 100);
            }, 10);
        } else {
            // Save current size preference before closing
            const currentSizeClass = this.chatbotPanel.classList.contains('size-small') ? 'small' :
                                   this.chatbotPanel.classList.contains('size-large') ? 'large' : 'default';
            localStorage.setItem('chatbot_size', currentSizeClass);
            
            // Save current dimensions if they were manually resized
            if (this.chatbotPanel.style.width && this.chatbotPanel.style.height) {
                localStorage.setItem('chatbot_width', this.chatbotPanel.style.width);
                localStorage.setItem('chatbot_height', this.chatbotPanel.style.height);
            }
            
            this.chatbotPanel.classList.remove('open');
            this.chatbotToggle.classList.remove('active');
            setTimeout(() => {
                this.chatbotPanel.style.display = 'none';
            }, 300);
        }
    }

    saveApiKey() {
        const key = this.chatbotApiKey.value.trim();
        if (key) {
            this.apiKey = key;
            localStorage.setItem('gemini_api_key', key);
            document.querySelector('.chatbot-api-key-container').style.display = 'none';
            this.addBotMessage('Thanks! Your API key has been saved. You can now ask me about AI tools for your needs.');
        } else {
            this.addBotMessage('Please enter a valid API key to continue.');
        }
    }

    // Enhanced: Try to answer direct queries using local dataset before Gemini API
    async sendMessage() {
        const message = this.chatbotInput.value.trim();
        if (!message) return;

        // Add user message to chat
        this.addUserMessage(message);
        this.chatbotInput.value = '';

        // Try deterministic recommender first (no API key needed)
        if (this.recommender) {
            const recommendation = this.getDeterministicRecommendation(message);
            if (recommendation) {
                this.displayRecommendationJSON(recommendation);
                return;
            }
        }

        // Try local dataset answer
        const localAnswer = this.answerFromLocalDataset(message);
        if (localAnswer) {
            this.addBotMessage(localAnswer, true);
            return;
        }

        // Check if API key is available for Gemini
        if (!this.apiKey) {
            document.querySelector('.chatbot-api-key-container').style.display = 'block';
            this.addBotMessage('For more advanced queries, please enter your Gemini API key.');
            return;
        }

        // Otherwise, process with Gemini API
        this.processWithGemini(message);
    }

    // New: Answer direct queries using aiTools dataset
    answerFromLocalDataset(query) {
        const q = query.toLowerCase();
        // Tool count queries
        if (q.includes('how many') && q.includes('tool')) {
            return `<strong>Total AI Tools:</strong> ${this.toolsData.length}`;
        }
        // Featured count
        if (q.includes('how many') && q.includes('featured')) {
            const featured = this.toolsData.filter(t => t.badges && t.badges.includes('featured')).length;
            return `<strong>Featured Tools:</strong> ${featured}`;
        }
        // Category count
        if (q.includes('how many') && q.includes('category')) {
            const cats = new Set(this.toolsData.flatMap(t => t.categories));
            return `<strong>Categories:</strong> ${cats.size}`;
        }
        // List all tools in a category
        const catMatch = q.match(/show me all (.+?) tools/);
        if (catMatch) {
            const cat = catMatch[1].replace(/ai|generator|assistant/g, '').trim();
            const found = this.toolsData.filter(t => t.categories.some(c => c.includes(cat)));
            if (found.length) {
                return `<strong>${found.length} tools found in category '${cat}':</strong><ul>` + found.map(t => `<li><a href='${t.url}' target='_blank'>${t.name}</a></li>`).join('') + '</ul>';
            }
        }
        // Tool info by name
        for (const tool of this.toolsData) {
            if (q.includes(tool.name.toLowerCase())) {
                return `<strong>${tool.name}</strong><br>${tool.description}<br><a href='${tool.url}' target='_blank'>Visit Tool</a>`;
            }
        }
        // Tag search
        const tagMatch = q.match(/tools? for (.+)/);
        if (tagMatch) {
            const tag = tagMatch[1].trim();
            const found = this.toolsData.filter(t => t.tags.some(tg => tg.toLowerCase().includes(tag)));
            if (found.length) {
                return `<strong>Tools for '${tag}':</strong><ul>` + found.map(t => `<li><a href='${t.url}' target='_blank'>${t.name}</a></li>`).join('') + '</ul>';
            }
        }
        return null;
    }

    // New: Deterministic recommendation system
    getDeterministicRecommendation(query) {
        if (!this.recommender) return null;

        // Check if this is a recommendation query
        const isRecommendationQuery = /best|recommend|suggest|top|need|looking for|want|help.*with|tool.*for|ai.*for/i.test(query);
        
        if (!isRecommendationQuery) {
            return null; // Let other handlers deal with non-recommendation queries
        }

        try {
            const result = this.recommender.recommend(query);
            
            // Only return if we have recommendations
            if (result.recommendations && result.recommendations.length > 0) {
                return result;
            }
            
            return null;
        } catch (error) {
            console.error('Error in deterministic recommender:', error);
            return null;
        }
    }

    // Display recommendation as formatted HTML (from JSON)
    displayRecommendationJSON(jsonResponse) {
        let html = '<div class="recommendation-response">';
        
        if (jsonResponse.recommendations && jsonResponse.recommendations.length > 0) {
            html += '<p><strong>Here are my recommendations:</strong></p>';
            
            jsonResponse.recommendations.forEach((rec, index) => {
                html += `
                    <div class="tool-recommendation">
                        <h4>${index + 1}. <a href="${rec.url}" target="_blank" rel="noopener">${this.escapeHtml(rec.name)}</a></h4>
                        <p><strong>Description:</strong> ${this.escapeHtml(rec.short_description)}</p>
                        <p><strong>Why recommended:</strong> ${this.escapeHtml(rec.why_recommended)}</p>
                        <p><strong>Tags:</strong> ${rec.tags.map(t => `<span class="tag">${this.escapeHtml(t)}</span>`).join(' ')}</p>
                        <p><strong>Confidence:</strong> ${(rec.confidence * 100).toFixed(0)}%</p>
                    </div>
                `;
            });
            
            // Show intent tags if any
            if (jsonResponse.intent_tags && jsonResponse.intent_tags.length > 0) {
                html += `<p class="intent-tags"><em>Detected categories: ${jsonResponse.intent_tags.join(', ')}</em></p>`;
            }
        } else {
            html += `<p>${this.escapeHtml(jsonResponse.note || 'No recommendations found.')}</p>`;
        }
        
        html += '</div>';
        
        this.addBotMessage(html, true);
    }

    addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chatbot-message user';
        messageElement.innerHTML = `
            <div class="chatbot-message-content">
                <p>${this.escapeHtml(message)}</p>
            </div>
        `;
        
        this.chatbotMessages.appendChild(messageElement);
        this.scrollToBottom();
    }

    addBotMessage(message, isHtml = false) {
        const messageElement = document.createElement('div');
        messageElement.className = 'chatbot-message bot';
        
        if (isHtml) {
            messageElement.innerHTML = `
                <div class="chatbot-message-content">
                    ${message}
                </div>
            `;
        } else {
            messageElement.innerHTML = `
                <div class="chatbot-message-content">
                    <p>${this.escapeHtml(message)}</p>
                </div>
            `;
        }
        
        // Remove typing indicator if present
        const typingIndicators = document.querySelectorAll('.chatbot-message.bot.typing');
        typingIndicators.forEach(indicator => indicator.remove());
        
        this.chatbotMessages.appendChild(messageElement);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        // Check if typing indicator already exists
        const existingTyping = document.querySelector('.chatbot-message.bot.typing');
        if (existingTyping) {
            return existingTyping;
        }
        
        const typingElement = document.createElement('div');
        typingElement.className = 'chatbot-message bot typing';
        typingElement.innerHTML = `
            <div class="chatbot-message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p class="typing-text">Searching for the best AI tool recommendations...</p>
            </div>
        `;
        
        this.chatbotMessages.appendChild(typingElement);
        this.scrollToBottom();
        return typingElement;
    }

    scrollToBottom() {
        this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        
        return text.replace(/[&<>"']/g, (m) => map[m]);
    }

    async processWithGemini(userQuery) {
        const typingIndicator = this.showTypingIndicator();
        
        try {
            // Directly answer factual queries using local tools dataset when possible
            const directAnswer = this.answerFactualQuery(userQuery);
            if (directAnswer) {
                // If a direct answer is found, display it and skip Gemini API call
                this.addBotMessage(directAnswer, true);
                return;
            }
            
            // Prepare tools data for context
            const toolsContext = this.prepareToolsContext();
            
            // Construct prompt for Gemini
            const prompt = `You are an AI Tool Advisor for the Toolly website. Your job is to provide personalized AI tool recommendations based on the user's specific task or need.

Here's information about the available AI tools on our platform:
${toolsContext}

User query: ${userQuery}

Based on the user's query, provide tailored recommendations for AI tools from our website's inventory that best fit their needs. Follow these guidelines:

1. Understand the user's specific task, goal, or requirement
2. Recommend 3-5 most appropriate AI tools from our website's inventory
3. For each recommendation:
   - Explain why it's the best fit for their specific needs
   - Provide a brief description of the tool's key capabilities
   - Mention any relevant features, limitations, or pricing considerations
   - IMPORTANT: Reference tools by NAME only (e.g., "ChatGPT", "DALL-E", "GitHub Copilot")
   - DO NOT include raw URLs in your response - the system will automatically add the correct links

4. If the user's query is vague, ask clarifying questions to better understand their needs
5. ONLY recommend tools that are in our website's inventory (listed above)
6. Format your response with clear headings and bullet points for readability
7. CRITICAL: Always use tool NAMES, never raw URLs. The system will automatically link tool names to their official URLs from our database.

Remember: Your recommendations must be strictly based on the AI tools listed on our website rather than generic external suggestions. Reference tools by their exact names as shown in the inventory above.`;

            // Call Gemini API
            const response = await this.callGeminiAPI(prompt);
            
            // Format and display the response
            this.displayFormattedResponse(response);
            
        } catch (error) {
            console.error('Error processing with Gemini:', error);
            
            // Remove typing indicator if it still exists
            if (typingIndicator) {
                typingIndicator.remove();
            }
            
            // Provide more specific error messages based on the error type
            if (error.message.includes('API key')) {
                this.addBotMessage('Your API key seems to be invalid or has expired. Please update your Gemini API key to continue using the AI Tool Advisor.');
                document.querySelector('.chatbot-api-key-container').style.display = 'block';
                // Clear the current API key field so user can enter a new one
                this.chatbotApiKey.value = '';
                this.chatbotApiKey.focus();
            } else if (error.message.includes('quota') || error.message.includes('rate limit')) {
                this.addBotMessage('⚠️ You have reached your Gemini API quota limit. Please enter a different API key below to continue using advanced AI features.');
                // Show API key input box so user can enter a different key
                document.querySelector('.chatbot-api-key-container').style.display = 'block';
                // Clear the current API key field so user can easily enter a new one
                this.chatbotApiKey.value = '';
                this.chatbotApiKey.focus();
                // Clear the saved API key from localStorage
                localStorage.removeItem('gemini_api_key');
                this.apiKey = null;
            } else if (error.message.includes('network') || error.message.includes('timeout')) {
                this.addBotMessage('There seems to be a network issue. Please check your internet connection and try again.');
            } else {
                this.addBotMessage('Sorry, I encountered an error while processing your request. Please try again later.');
            }
        }
    }

    answerFactualQuery(query) {
        // Simple keyword-based matching for direct answers
        const lowerQuery = query.toLowerCase();
        
        // Example: Directly answer questions about tool categories
        if (
            lowerQuery.includes('what ai tools') ||
            lowerQuery.includes('ai tools for') ||
            lowerQuery.includes('popular ai tools') ||
            lowerQuery.includes('best ai tools') ||
            lowerQuery.includes('recommend ai tools')
        ) {
            // Build a structured, categorized recommendation list with robust fallbacks
            return this.buildCategorizedRecommendations(lowerQuery);
        }
        
        // Example: Directly answer questions about specific tools
        for (const tool of this.toolsData) {
            if (lowerQuery.includes(tool.name.toLowerCase())) {
                return `The AI tool **${this.escapeHtml(tool.name)}** is designed for ${this.escapeHtml(tool.description)}.`;
            }
        }
        
        // Add more direct answer patterns as needed
        
        return null; // No direct answer found
    }

    /**
     * Build a structured, categorized recommendations block.
     * - Guarantees at least 5 tools with short descriptions
     * - Adds section headers and bullet lists
     * - Includes links when available
     * - Conversational tone with a follow-up question
     * - Robust fallback when dataset is empty or filters return nothing
     */
    buildCategorizedRecommendations(lowerQuery = '') {
        // Helper: Friendly names for sections
        const sectionTitles = {
            coding: 'For coding assistance',
            image: 'For image generation',
            research: 'For search and research',
            data: 'For data science & machine learning',
            media: 'For video & audio creation',
            productivity: 'For productivity & automation'
        };

        // Helper: Map Data.json category to our sections
        const mapCategoryToSection = (cat) => {
            switch (cat) {
                case 'coding': return 'coding';
                case 'vision':
                case 'design': return 'image';
                case 'research':
                case 'nlp': return 'research';
                case 'data-science': return 'data';
                case 'video':
                case 'audio': return 'media';
                case 'productivity': return 'productivity';
                default: return null;
            }
        };

        // If tools dataset is available, prepare categorized picks
        const categorized = {
            coding: [], image: [], research: [], data: [], media: [], productivity: []
        };

        const scoreTool = (t) => {
            // Simple scoring to push featured/trending/freemium to top
            let s = 0;
            if (t.badges) {
                if (t.badges.includes('featured')) s += 3;
                if (t.badges.includes('trending')) s += 2;
                if (t.badges.includes('freemium') || t.badges.includes('open source')) s += 1;
            }
            return s;
        };

        try {
            (this.toolsData || []).forEach(t => {
                (t.categories || []).forEach(c => {
                    const sec = mapCategoryToSection(c);
                    if (sec) categorized[sec].push(t);
                });
            });
        } catch (e) {
            console.warn('Error categorizing tools, will use fallback list.', e);
        }

        // Sort and de-dup within categories
        const seen = new Set();
        Object.keys(categorized).forEach(sec => {
            categorized[sec] = (categorized[sec] || [])
                .sort((a, b) => scoreTool(b) - scoreTool(a))
                .filter(t => {
                    const key = t.name + '|' + (t.url || '');
                    if (seen.has(key)) return false;
                    seen.add(key);
                    return true;
                })
                .slice(0, 3); // keep lists compact per section
        });

        // Curated fallback entries in case dataset is empty or too sparse
        const curated = [
            { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'Conversational AI for brainstorming, writing help, and Q&A across many topics.', sec: 'research' },
            { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', desc: 'AI pair programmer inside your IDE that suggests code and tests in real time.', sec: 'coding' },
            { name: 'Hugging Face', url: 'https://huggingface.co', desc: 'Hub of open-source ML models and datasets; great for experimentation and deployment.', sec: 'data' },
            { name: 'Midjourney', url: 'https://www.midjourney.com', desc: 'High‑quality image generation from text prompts; strong for concept art and mood boards.', sec: 'image' },
            { name: 'Perplexity', url: 'https://www.perplexity.ai', desc: 'Answer engine that cites sources; excellent for research with quick, verifiable results.', sec: 'research' },
            { name: 'Runway', url: 'https://runwayml.com', desc: 'Creative suite for video editing and text‑to‑video effects powered by generative AI.', sec: 'media' }
        ];

        // If any section is empty, backfill from curated list
        Object.keys(categorized).forEach(sec => {
            if (categorized[sec].length === 0) {
                curated.filter(c => c.sec === sec).forEach(c => {
                    categorized[sec].push({ name: c.name, url: c.url, description: c.desc, badges: ['freemium'], tags: [] });
                });
            }
        });

        // Compose HTML
        const sectionsOrder = ['coding', 'image', 'research', 'data', 'media', 'productivity'];
        let totalCount = 0;
        let html = '<div class="recommendation-response">';
        html += '<p><strong>Here are some popular AI tools you might find interesting:</strong></p>';

        sectionsOrder.forEach(sec => {
            const items = categorized[sec];
            if (!items || items.length === 0) return;
            html += `<h4>${sectionTitles[sec]}:</h4>`;
            html += '<ul>';
            items.forEach(t => {
                const name = this.escapeHtml(t.name);
                const url = t.url ? t.url : '#';
                const desc = this.escapeHtml((t.description || '').split(/\s+/).slice(0, 30).join(' '));
                html += `<li><strong><a href="${url}" target="_blank" rel="noopener">${name}</a></strong> — ${desc}</li>`;
                totalCount += 1;
            });
            html += '</ul>';
        });

        // Ensure at least 5 entries overall; if not, pad from curated list
        if (totalCount < 5) {
            const needed = 5 - totalCount;
            let added = 0;
            html += '<h4>More options:</h4><ul>';
            for (const c of curated) {
                if (added >= needed) break;
                const key = `${c.name}|${c.url}`;
                if (seen.has(key)) continue;
                html += `<li><strong><a href="${c.url}" target="_blank" rel="noopener">${this.escapeHtml(c.name)}</a></strong> — ${this.escapeHtml(c.desc)}</li>`;
                added++;
            }
            html += '</ul>';
            totalCount += added;
        }

        // Safety: in the unlikely event we still have nothing, return a simple fallback
        if (totalCount === 0) {
            return '<p>Here are some popular AI tools you might find interesting:</p>'+
                   '<ul>'+
                   curated.slice(0, 5).map(c => `<li><strong><a href="${c.url}" target="_blank" rel="noopener">${this.escapeHtml(c.name)}</a></strong> — ${this.escapeHtml(c.desc)}</li>`).join('')+
                   '</ul>'+
                   '<p>Would you like more details about any of these?</p>';
        }

        html += '<p>Would you like more details about any of these, or help narrowing down by features or budget?</p>';
        html += '</div>';
        return html;
    }

    prepareToolsContext() {
        // Create a comprehensive version of the tools data for better context
        return this.toolsData.map(tool => {
            // Format categories for better readability
            const formattedCategories = tool.categories.map(cat => {
                switch(cat) {
                    case 'nlp': return 'Chatbot/NLP';
                    case 'productivity': return 'Productivity';
                    case 'coding': return 'Developer Tools';
                    case 'research': return 'Research';
                    case 'education': return 'Education';
                    case 'data-science': return 'Data Science & Analytics';
                    case 'audio': return 'Audio Generator';
                    case 'video': return 'Video Generator';
                    case 'vision': return 'Image Generator';
                    case 'design': return 'Design & Art';
                    case 'business': return 'Business';
                    case 'marketing': return 'Marketing';
                    case 'life-assistant': return 'Life Assistant';
                    default: return cat;
                }
            }).join(', ');
            
            // Format badges for better understanding
            const formattedBadges = tool.badges.map(badge => {
                switch(badge) {
                    case 'featured': return 'Featured Tool';
                    case 'trending': return 'Trending';
                    case 'freemium': return 'Free/Freemium';
                    case 'paid': return 'Paid';
                    case 'beta': return 'Beta';
                    case 'open source': return 'Open Source';
                    default: return badge;
                }
            }).join(', ');
            
            return `Tool: ${tool.name}
Description: ${tool.description}
Categories: ${formattedCategories}
Tags: ${tool.tags.join(', ')}
Status: ${formattedBadges}
URL: ${tool.url}
`;
        }).join('\n');
    }

    async callGeminiAPI(prompt) {
        try {
            const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
            
            // Create a more structured request with system instructions
            const requestBody = {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.4,
                    topK: 32,
                    topP: 0.95,
                    maxOutputTokens: 8192,
                },
                safetySettings: [
                    {
                        category: 'HARM_CATEGORY_HARASSMENT',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                    },
                    {
                        category: 'HARM_CATEGORY_HATE_SPEECH',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                    },
                    {
                        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                    },
                    {
                        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
                        threshold: 'BLOCK_MEDIUM_AND_ABOVE'
                    }
                ]
            };
            
            const response = await fetch(`${apiUrl}?key=${this.apiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.error?.message || 'Unknown error';
                
                // Enhance error message to better identify quota issues
                if (errorMessage.toLowerCase().includes('quota') || 
                    errorMessage.toLowerCase().includes('rate limit') ||
                    errorMessage.toLowerCase().includes('exceeded') ||
                    response.status === 429) {
                    throw new Error(`quota: ${errorMessage}`);
                }
                
                throw new Error(`Gemini API error: ${errorMessage}`);
            }
            
            const data = await response.json();
            
            // Check if we have a valid response
            if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content) {
                throw new Error('Invalid response from Gemini API');
            }
            
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            throw error;
        }
    }

    displayFormattedResponse(response) {
        // Convert markdown-like syntax to HTML
        const formattedHtml = this.markdownToHtml(response);
        
        // Add links to tool names
        const htmlWithLinks = this.addToolLinks(formattedHtml);
        
        // Add the formatted response to the chat
        this.addBotMessage(htmlWithLinks, true);
    }

    markdownToHtml(text) {
        // Convert headers
        text = text.replace(/^### (.*$)/gm, '<h4>$1</h4>');
        text = text.replace(/^## (.*$)/gm, '<h3>$1</h3>');
        text = text.replace(/^# (.*$)/gm, '<h2>$1</h2>');
        
        // Convert bold
        text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        // Convert italic
        text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Convert bullet points
        text = text.replace(/^- (.*$)/gm, '<li>$1</li>');
        text = text.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
        
        // Convert images - must be done before links
        text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="chatbot-image">');
        
        // Convert line breaks
        text = text.replace(/\n/g, '<br>');
        
        // Fix nested lists issue
        text = text.replace(/<\/ul><br><ul>/g, '');
        
        return text;
    }

    addToolLinks(html) {
        // Create a map of valid tool URLs from Data.json for validation
        const validToolUrls = new Set(this.toolsData.map(tool => tool.url.toLowerCase()));
        
        // Add links to tool names in the response (ONLY using URLs from Data.json)
        this.toolsData.forEach(tool => {
            // Validate that tool has a proper URL from Data.json
            if (!tool.url) {
                console.warn(`Tool ${tool.name} is missing URL in Data.json`);
                return;
            }
            
            // Create a regex that handles variations in tool name capitalization
            const escapedName = tool.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(?<!<[^>]*)(${escapedName})(?![^<]*>)`, 'gi');
            
            // Replace tool names with linked versions using ONLY Data.json URLs
            html = html.replace(regex, match => {
                return `<a href="${tool.url}" target="_blank" rel="noopener" class="tool-link" title="Visit ${tool.name}">${match}</a>`;
            });
        });
        
        // Improved URL detection and linking - BUT ONLY for URLs that exist in Data.json
        // This ensures we NEVER link to URLs outside of our Data.json database
        const urlRegex = /\b(https?:\/\/[^\s<>"']+[^\s.,;:!?)<>"'])/g;
        html = html.replace(urlRegex, (match) => {
            // Only replace if not already in an anchor tag or image tag
            if (!match.includes('<a') && !match.includes('<img')) {
                // Clean the URL if it has trailing punctuation
                let cleanUrl = match;
                if (cleanUrl.endsWith('.') || cleanUrl.endsWith(',') || cleanUrl.endsWith(';') || cleanUrl.endsWith(':')) {
                    cleanUrl = cleanUrl.slice(0, -1);
                }
                
                // CRITICAL: Only link if URL exists in our Data.json
                if (validToolUrls.has(cleanUrl.toLowerCase())) {
                    return `<a href="${cleanUrl}" target="_blank" rel="noopener" class="tool-link">${match}</a>`;
                } else {
                    // URL not in Data.json - return as plain text (no link)
                    console.warn(`URL not in Data.json, not linking: ${cleanUrl}`);
                    return match;
                }
            }
            return match;
        });
        
        // Verify all links have proper attributes for security and usability
        html = html.replace(/<a ([^>]*)>/g, (match, attributes) => {
            if (!attributes.includes('target="_blank"')) {
                match = match.replace('>', ' target="_blank">');
            }
            if (!attributes.includes('rel="noopener"')) {
                match = match.replace('>', ' rel="noopener">');
            }
            return match;
        });
        
        return html;
    }
}

// Initialize the chatbot when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure all other scripts are loaded
    setTimeout(() => {
        window.toollyAIAdvisor = new ToollyAIAdvisor();
    }, 1000);
});
