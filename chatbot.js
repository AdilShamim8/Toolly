// Chatbot powered by Gemini-2.5-Flash API

class ToollyAIAdvisor {
    constructor() {
        this.isOpen = false;
        this.apiKey = null; // Will be set by user or from environment
        this.toolsData = [];
        this.initChatbot();
    }

    initChatbot() {
        // Create chatbot UI elements
        this.createChatbotUI();
        
        // Add event listeners
        this.addEventListeners();
        
        // Get tools data from the global aiTools variable
        this.toolsData = window.aiTools || [];
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
            <div class="chatbot-panel">
                <div class="chatbot-header">
                    <h3>AI Tool Advisor</h3>
                    <button class="chatbot-close"><i class="fas fa-times"></i></button>
                </div>
                <div class="chatbot-messages">
                    <div class="chatbot-message bot">
                        <div class="chatbot-message-content">
                            <p>👋 Hi there! I'm your AI Tool Advisor. Tell me what you're working on, and I'll recommend the best AI tools for your needs.</p>
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
    }

    toggleChatbot(forceState = null) {
        this.isOpen = forceState !== null ? forceState : !this.isOpen;
        
        if (this.isOpen) {
            this.chatbotPanel.style.display = 'flex';
            setTimeout(() => {
                this.chatbotPanel.classList.add('open');
                this.chatbotToggle.classList.add('active');
            }, 10);
        } else {
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

    sendMessage() {
        const message = this.chatbotInput.value.trim();
        if (!message) return;
        
        // Check if API key is available
        if (!this.apiKey) {
            document.querySelector('.chatbot-api-key-container').style.display = 'block';
            this.addBotMessage('To use the AI Tool Advisor, please enter your Gemini API key first.');
            return;
        }
        
        // Add user message to chat
        this.addUserMessage(message);
        
        // Clear input
        this.chatbotInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Process with Gemini API
        this.processWithGemini(message);
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
        const typingIndicator = document.querySelector('.chatbot-typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        
        this.chatbotMessages.appendChild(messageElement);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const typingElement = document.createElement('div');
        typingElement.className = 'chatbot-message bot chatbot-typing-indicator';
        typingElement.innerHTML = `
            <div class="chatbot-message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        
        this.chatbotMessages.appendChild(typingElement);
        this.scrollToBottom();
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
        try {
            // Prepare tools data for context
            const toolsContext = this.prepareToolsContext();
            
            // Construct prompt for Gemini
            const prompt = `You are an AI Tool Advisor for the Toolly website. Your job is to recommend the most suitable AI tools based on the user's requirements.

Here's information about the available AI tools on our platform:
${toolsContext}

User query: ${userQuery}

Based on the user's query, recommend the most suitable AI tools from our list. For each recommendation:
1. Explain why it's a good fit for their needs
2. Provide a brief description of the tool's capabilities
3. Mention any limitations or considerations

Format your response with clear headings and bullet points for readability. If you need more information to make better recommendations, ask specific questions.`;

            // Call Gemini API
            const response = await this.callGeminiAPI(prompt);
            
            // Format and display the response
            this.displayFormattedResponse(response);
            
        } catch (error) {
            console.error('Error processing with Gemini:', error);
            this.addBotMessage('Sorry, I encountered an error while processing your request. Please try again later.');
        }
    }

    prepareToolsContext() {
        // Create a condensed version of the tools data for the context
        return this.toolsData.map(tool => {
            return `Tool: ${tool.name}
Description: ${tool.description}
Categories: ${tool.categories.join(', ')}
Tags: ${tool.tags.join(', ')}
Badges: ${tool.badges.join(', ')}
URL: ${tool.url}
`;
        }).join('\n');
    }

    async callGeminiAPI(prompt) {
        const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
        
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
            }
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
            throw new Error(`Gemini API error: ${errorData.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
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
        
        // Convert line breaks
        text = text.replace(/\n/g, '<br>');
        
        // Fix nested lists issue
        text = text.replace(/<\/ul><br><ul>/g, '');
        
        return text;
    }

    addToolLinks(html) {
        // For each tool in our data, add a link if it appears in the response
        this.toolsData.forEach(tool => {
            const regex = new RegExp(`(?<!<[^>]*)(${tool.name})(?![^<]*>)`, 'g');
            html = html.replace(regex, `<a href="${tool.url}" target="_blank" class="tool-link">$1</a>`);
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