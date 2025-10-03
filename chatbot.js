// // Chatbot powered by Gemini-2.5-Flash API

// class ToollyAIAdvisor {
//     constructor() {
//         this.isOpen = false;
//         this.apiKey = null; // Will be set by user or from environment
//         this.toolsData = [];
//         this.initChatbot();
//     }

//     initChatbot() {
//         // Create chatbot UI elements
//         this.createChatbotUI();
        
//         // Add event listeners
//         this.addEventListeners();
        
//         // Get tools data from the global aiTools variable
//         this.toolsData = window.aiTools || [];
//     }

//     createChatbotUI() {
//         // Create chatbot container
//         const chatbotContainer = document.createElement('div');
//         chatbotContainer.className = 'chatbot-container';
//         chatbotContainer.innerHTML = `
//             <div class="chatbot-toggle">
//                 <i class="fas fa-robot"></i>
//                 <span class="chatbot-badge">AI Advisor</span>
//             </div>
//             <div class="chatbot-panel size-default">
//                 <div class="chatbot-header">
//                     <div class="chatbot-size-controls">
//                         <button class="chatbot-size-btn" data-size="small" id="size-small-btn">S</button>
//                         <button class="chatbot-size-btn active" data-size="default" id="size-default-btn">M</button>
//                         <button class="chatbot-size-btn" data-size="large" id="size-large-btn">L</button>
//                     </div>
//                     <h3>AI Tool Advisor</h3>
//                     <button class="chatbot-close"><i class="fas fa-times"></i></button>
//                 </div>
//                 <div class="chatbot-messages">
//                     <div class="chatbot-message bot">
//                         <div class="chatbot-message-content">
//                             <p>👋 Hi there! I'm your AI Tool Advisor. I can help you discover the perfect AI tools for any task from our extensive collection.</p>
//                             <p>Just tell me what you're working on or what problem you're trying to solve. For example:</p>
//                             <ul>
//                                 <li>"I need an AI tool for generating marketing content"</li>
//                                 <li>"What's the best AI for coding assistance?"</li>
//                                 <li>"I'm looking for tools to help with data analysis"</li>
//                                 <li>"Recommend AI tools for video creation"</li>
//                             </ul>
//                             <p>I'll provide personalized recommendations based on our website's inventory!</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="chatbot-input-container">
//                     <input type="text" class="chatbot-input" placeholder="Describe your project or needs..." />
//                     <button class="chatbot-send"><i class="fas fa-paper-plane"></i></button>
//                 </div>
//                 <div class="chatbot-api-key-container">
//                     <input type="text" class="chatbot-api-key" placeholder="Enter your Gemini API key" />
//                     <button class="chatbot-save-key">Save Key</button>
//                     <p class="chatbot-api-note">Your API key is stored locally and never sent to our servers.</p>
//                 </div>
//             </div>
//         `;

//         document.body.appendChild(chatbotContainer);

//         // Store references to DOM elements
//         this.chatbotToggle = document.querySelector('.chatbot-toggle');
//         this.chatbotPanel = document.querySelector('.chatbot-panel');
//         this.chatbotClose = document.querySelector('.chatbot-close');
//         this.chatbotMessages = document.querySelector('.chatbot-messages');
//         this.chatbotInput = document.querySelector('.chatbot-input');
//         this.chatbotSend = document.querySelector('.chatbot-send');
//         this.chatbotApiKey = document.querySelector('.chatbot-api-key');
//         this.chatbotSaveKey = document.querySelector('.chatbot-save-key');
        
//         // Check for saved API key
//         const savedApiKey = localStorage.getItem('gemini_api_key');
//         if (savedApiKey) {
//             this.apiKey = savedApiKey;
//             this.chatbotApiKey.value = savedApiKey;
//             document.querySelector('.chatbot-api-key-container').style.display = 'none';
//         }
//     }

//     addEventListeners() {
//         // Toggle chatbot panel
//         this.chatbotToggle.addEventListener('click', () => this.toggleChatbot());
        
//         // Close chatbot panel
//         this.chatbotClose.addEventListener('click', () => this.toggleChatbot(false));
        
//         // Send message on button click
//         this.chatbotSend.addEventListener('click', () => this.sendMessage());
        
//         // Send message on Enter key
//         this.chatbotInput.addEventListener('keypress', (e) => {
//             if (e.key === 'Enter') {
//                 this.sendMessage();
//             }
//         });
        
//         // Save API key
//         this.chatbotSaveKey.addEventListener('click', () => this.saveApiKey());
        
//         // Size control buttons - using direct ID selectors for better reliability
//         const smallBtn = document.getElementById('size-small-btn');
//         const defaultBtn = document.getElementById('size-default-btn');
//         const largeBtn = document.getElementById('size-large-btn');
//         const sizeButtons = [smallBtn, defaultBtn, largeBtn];
//         const self = this; // Store reference to 'this' for use in event handlers
        
//         // Function to handle size button clicks
//         const handleSizeButtonClick = function(size) {
//             console.log('Size button clicked:', size);
            
//             // Remove active class from all buttons
//             sizeButtons.forEach(btn => {
//                 if (btn) btn.classList.remove('active');
//             });
            
//             // Add active class to clicked button
//             this.classList.add('active');
            
//             // Remove all size classes
//             self.chatbotPanel.classList.remove('size-small', 'size-default', 'size-large');
            
//             // Add the selected size class
//             self.chatbotPanel.classList.add(`size-${size}`);
            
//             // Save the selected size to localStorage
//             localStorage.setItem('chatbot_size', size);
            
//             // Log the current state for debugging
//             console.log('Applied size class:', `size-${size}`);
//             console.log('Current classes:', self.chatbotPanel.className);
//             console.log('Panel dimensions:', self.chatbotPanel.offsetWidth, 'x', self.chatbotPanel.offsetHeight);
//         };
        
//         // Add click handlers to each button
//         if (smallBtn) smallBtn.onclick = function() { handleSizeButtonClick.call(this, 'small'); };
//         if (defaultBtn) defaultBtn.onclick = function() { handleSizeButtonClick.call(this, 'default'); };
//         if (largeBtn) largeBtn.onclick = function() { handleSizeButtonClick.call(this, 'large'); };
        
//         // Track resize events
//         let resizeTimeout;
//         const resizeObserver = new ResizeObserver(entries => {
//             clearTimeout(resizeTimeout);
//             resizeTimeout = setTimeout(() => {
//                 // Save dimensions after resize completes
//                 localStorage.setItem('chatbot_width', this.chatbotPanel.style.width || this.chatbotPanel.offsetWidth + 'px');
//                 localStorage.setItem('chatbot_height', this.chatbotPanel.style.height || this.chatbotPanel.offsetHeight + 'px');
                
//                 // Ensure the panel stays within viewport
//                 this.ensurePanelInViewport();
//             }, 100);
//         });
        
//         // Observe the chatbot panel for resize events
//         resizeObserver.observe(this.chatbotPanel);
//     }
    
//     ensurePanelInViewport() {
//         const rect = this.chatbotPanel.getBoundingClientRect();
//         const viewportWidth = window.innerWidth;
//         const viewportHeight = window.innerHeight;
        
//         // Check if panel extends beyond right edge of viewport
//         if (rect.right > viewportWidth) {
//             const newRight = Math.max(0, viewportWidth - rect.width);
//             this.chatbotPanel.style.right = 'auto';
//             this.chatbotPanel.style.left = newRight + 'px';
//         }
        
//         // Check if panel extends beyond bottom edge of viewport
//         if (rect.bottom > viewportHeight) {
//             const newTop = Math.max(0, viewportHeight - rect.height);
//             this.chatbotPanel.style.top = newTop + 'px';
//         }
//     }

//     toggleChatbot(forceState = null) {
//         this.isOpen = forceState !== null ? forceState : !this.isOpen;
        
//         if (this.isOpen) {
//             // Restore saved size if available
//             const savedSize = localStorage.getItem('chatbot_size');
//             if (savedSize) {
//                 // Remove all size classes
//                 this.chatbotPanel.classList.remove('size-small', 'size-default', 'size-large');
                
//                 // Add the saved size class
//                 this.chatbotPanel.classList.add(`size-${savedSize}`);
                
//                 // Update the active button - using direct ID selectors for better reliability
//                 const smallBtn = document.getElementById('size-small-btn');
//                 const defaultBtn = document.getElementById('size-default-btn');
//                 const largeBtn = document.getElementById('size-large-btn');
                
//                 // Remove active class from all buttons
//                 if (smallBtn) smallBtn.classList.remove('active');
//                 if (defaultBtn) defaultBtn.classList.remove('active');
//                 if (largeBtn) largeBtn.classList.remove('active');
                
//                 // Add active class to the appropriate button
//                 if (savedSize === 'small' && smallBtn) smallBtn.classList.add('active');
//                 if (savedSize === 'default' && defaultBtn) defaultBtn.classList.add('active');
//                 if (savedSize === 'large' && largeBtn) largeBtn.classList.add('active');
                
//                 console.log('Restored size:', savedSize);
//             }
            
//             // Restore saved custom dimensions if available
//             if (localStorage.getItem('chatbot_width') && localStorage.getItem('chatbot_height')) {
//                 this.chatbotPanel.style.width = localStorage.getItem('chatbot_width');
//                 this.chatbotPanel.style.height = localStorage.getItem('chatbot_height');
//                 console.log('Restored dimensions:', localStorage.getItem('chatbot_width'), 'x', localStorage.getItem('chatbot_height'));
//             }
            
//             this.chatbotPanel.style.display = 'flex';
//             setTimeout(() => {
//                 this.chatbotPanel.classList.add('open');
//                 this.chatbotToggle.classList.add('active');
//             }, 10);
//         } else {
//             // Save current dimensions before closing
//             localStorage.setItem('chatbot_width', this.chatbotPanel.style.width || '350px');
//             localStorage.setItem('chatbot_height', this.chatbotPanel.style.height || '500px');
            
//             this.chatbotPanel.classList.remove('open');
//             this.chatbotToggle.classList.remove('active');
//             setTimeout(() => {
//                 this.chatbotPanel.style.display = 'none';
//             }, 300);
//         }
//     }

//     saveApiKey() {
//         const key = this.chatbotApiKey.value.trim();
//         if (key) {
//             this.apiKey = key;
//             localStorage.setItem('gemini_api_key', key);
//             document.querySelector('.chatbot-api-key-container').style.display = 'none';
//             this.addBotMessage('Thanks! Your API key has been saved. You can now ask me about AI tools for your needs.');
//         } else {
//             this.addBotMessage('Please enter a valid API key to continue.');
//         }
//     }

//     sendMessage() {
//         const message = this.chatbotInput.value.trim();
//         if (!message) return;
        
//         // Check if API key is available
//         if (!this.apiKey) {
//             document.querySelector('.chatbot-api-key-container').style.display = 'block';
//             this.addBotMessage('To use the AI Tool Advisor, please enter your Gemini API key first.');
//             return;
//         }
        
//         // Add user message to chat
//         this.addUserMessage(message);
        
//         // Clear input
//         this.chatbotInput.value = '';
        
//         // Show typing indicator
//         this.showTypingIndicator();
        
//         // Process with Gemini API
//         this.processWithGemini(message);
//     }

//     addUserMessage(message) {
//         const messageElement = document.createElement('div');
//         messageElement.className = 'chatbot-message user';
//         messageElement.innerHTML = `
//             <div class="chatbot-message-content">
//                 <p>${this.escapeHtml(message)}</p>
//             </div>
//         `;
        
//         this.chatbotMessages.appendChild(messageElement);
//         this.scrollToBottom();
//     }

//     addBotMessage(message, isHtml = false) {
//         const messageElement = document.createElement('div');
//         messageElement.className = 'chatbot-message bot';
        
//         if (isHtml) {
//             messageElement.innerHTML = `
//                 <div class="chatbot-message-content">
//                     ${message}
//                 </div>
//             `;
//         } else {
//             messageElement.innerHTML = `
//                 <div class="chatbot-message-content">
//                     <p>${this.escapeHtml(message)}</p>
//                 </div>
//             `;
//         }
        
//         // Remove typing indicator if present
//         const typingIndicator = document.querySelector('.chatbot-message.bot.typing');
//         if (typingIndicator) {
//             typingIndicator.remove();
//         }
        
//         this.chatbotMessages.appendChild(messageElement);
//         this.scrollToBottom();
//     }

//     showTypingIndicator() {
//         const typingElement = document.createElement('div');
//         typingElement.className = 'chatbot-message bot typing';
//         typingElement.innerHTML = `
//             <div class="chatbot-message-content">
//                 <div class="typing-dots">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                 </div>
//                 <p class="typing-text">Searching for the best AI tool recommendations...</p>
//             </div>
//         `;
        
//         this.chatbotMessages.appendChild(typingElement);
//         this.scrollToBottom();
//         return typingElement;
//     }

//     scrollToBottom() {
//         this.chatbotMessages.scrollTop = this.chatbotMessages.scrollHeight;
//     }

//     escapeHtml(text) {
//         const map = {
//             '&': '&amp;',
//             '<': '&lt;',
//             '>': '&gt;',
//             '"': '&quot;',
//             "'": '&#039;'
//         };
        
//         return text.replace(/[&<>"']/g, (m) => map[m]);
//     }

//     async processWithGemini(userQuery) {
//         const typingIndicator = this.showTypingIndicator();
        
//         try {
//             // Prepare tools data for context
//             const toolsContext = this.prepareToolsContext();
            
//             // Construct prompt for Gemini
//             const prompt = `You are an AI Tool Advisor for the Toolly website. Your job is to provide personalized AI tool recommendations based on the user's specific task or need.

// Here's information about the available AI tools on our platform:
// ${toolsContext}

// User query: ${userQuery}

// Based on the user's query, provide tailored recommendations for AI tools from our website's inventory that best fit their needs. Follow these guidelines:

// 1. Understand the user's specific task, goal, or requirement
// 2. Recommend 3-5 most appropriate AI tools from our website's inventory
// 3. For each recommendation:
//    - Explain why it's the best fit for their specific needs
//    - Provide a brief description of the tool's key capabilities
//    - Mention any relevant features, limitations, or pricing considerations
//    - Include the tool's URL from our website

// 4. If the user's query is vague, ask clarifying questions to better understand their needs
// 5. ONLY recommend tools that are in our website's inventory (listed above)
// 6. Format your response with clear headings and bullet points for readability

// Remember: Your recommendations must be strictly based on the AI tools listed on our website rather than generic external suggestions.`;

//             // Call Gemini API
//             const response = await this.callGeminiAPI(prompt);
            
//             // Format and display the response
//             this.displayFormattedResponse(response);
            
//         } catch (error) {
//             console.error('Error processing with Gemini:', error);
            
//             // Remove typing indicator if it still exists
//             if (typingIndicator) {
//                 typingIndicator.remove();
//             }
            
//             // Provide more specific error messages based on the error type
//             if (error.message.includes('API key')) {
//                 this.addBotMessage('Your API key seems to be invalid or has expired. Please update your Gemini API key to continue using the AI Tool Advisor.');
//                 document.querySelector('.chatbot-api-key-container').style.display = 'block';
//             } else if (error.message.includes('quota')) {
//                 this.addBotMessage('You have reached your Gemini API quota limit. Please try again later or use a different API key.');
//             } else if (error.message.includes('network') || error.message.includes('timeout')) {
//                 this.addBotMessage('There seems to be a network issue. Please check your internet connection and try again.');
//             } else {
//                 this.addBotMessage('Sorry, I encountered an error while processing your request. Please try again later.');
//             }
//         }
//     }

//     prepareToolsContext() {
//         // Create a comprehensive version of the tools data for better context
//         return this.toolsData.map(tool => {
//             // Format categories for better readability
//             const formattedCategories = tool.categories.map(cat => {
//                 switch(cat) {
//                     case 'nlp': return 'Chatbot/NLP';
//                     case 'productivity': return 'Productivity';
//                     case 'coding': return 'Developer Tools';
//                     case 'research': return 'Research';
//                     case 'education': return 'Education';
//                     case 'data-science': return 'Data Science & Analytics';
//                     case 'audio': return 'Audio Generator';
//                     case 'video': return 'Video Generator';
//                     case 'vision': return 'Image Generator';
//                     case 'design': return 'Design & Art';
//                     case 'business': return 'Business';
//                     case 'marketing': return 'Marketing';
//                     case 'life-assistant': return 'Life Assistant';
//                     default: return cat;
//                 }
//             }).join(', ');
            
//             // Format badges for better understanding
//             const formattedBadges = tool.badges.map(badge => {
//                 switch(badge) {
//                     case 'featured': return 'Featured Tool';
//                     case 'trending': return 'Trending';
//                     case 'freemium': return 'Free/Freemium';
//                     case 'paid': return 'Paid';
//                     case 'beta': return 'Beta';
//                     case 'open source': return 'Open Source';
//                     default: return badge;
//                 }
//             }).join(', ');
            
//             return `Tool: ${tool.name}
// Description: ${tool.description}
// Categories: ${formattedCategories}
// Tags: ${tool.tags.join(', ')}
// Status: ${formattedBadges}
// URL: ${tool.url}
// `;
//         }).join('\n');
//     }

//     async callGeminiAPI(prompt) {
//         try {
//             const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
            
//             // Create a more structured request with system instructions
//             const requestBody = {
//                 contents: [{
//                     parts: [{
//                         text: prompt
//                     }]
//                 }],
//                 generationConfig: {
//                     temperature: 0.4,
//                     topK: 32,
//                     topP: 0.95,
//                     maxOutputTokens: 8192,
//                 },
//                 safetySettings: [
//                     {
//                         category: 'HARM_CATEGORY_HARASSMENT',
//                         threshold: 'BLOCK_MEDIUM_AND_ABOVE'
//                     },
//                     {
//                         category: 'HARM_CATEGORY_HATE_SPEECH',
//                         threshold: 'BLOCK_MEDIUM_AND_ABOVE'
//                     },
//                     {
//                         category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
//                         threshold: 'BLOCK_MEDIUM_AND_ABOVE'
//                     },
//                     {
//                         category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
//                         threshold: 'BLOCK_MEDIUM_AND_ABOVE'
//                     }
//                 ]
//             };
            
//             const response = await fetch(`${apiUrl}?key=${this.apiKey}`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(requestBody)
//             });
            
//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(`Gemini API error: ${errorData.error?.message || 'Unknown error'}`);
//             }
            
//             const data = await response.json();
            
//             // Check if we have a valid response
//             if (!data.candidates || data.candidates.length === 0 || !data.candidates[0].content) {
//                 throw new Error('Invalid response from Gemini API');
//             }
            
//             return data.candidates[0].content.parts[0].text;
//         } catch (error) {
//             console.error('Error calling Gemini API:', error);
//             throw error;
//         }
//     }

//     displayFormattedResponse(response) {
//         // Convert markdown-like syntax to HTML
//         const formattedHtml = this.markdownToHtml(response);
        
//         // Add links to tool names
//         const htmlWithLinks = this.addToolLinks(formattedHtml);
        
//         // Add the formatted response to the chat
//         this.addBotMessage(htmlWithLinks, true);
//     }

//     markdownToHtml(text) {
//         // Convert headers
//         text = text.replace(/^### (.*$)/gm, '<h4>$1</h4>');
//         text = text.replace(/^## (.*$)/gm, '<h3>$1</h3>');
//         text = text.replace(/^# (.*$)/gm, '<h2>$1</h2>');
        
//         // Convert bold
//         text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
//         // Convert italic
//         text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
//         // Convert bullet points
//         text = text.replace(/^- (.*$)/gm, '<li>$1</li>');
//         text = text.replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>');
        
//         // Convert images - must be done before links
//         text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" class="chatbot-image">');
        
//         // Convert line breaks
//         text = text.replace(/\n/g, '<br>');
        
//         // Fix nested lists issue
//         text = text.replace(/<\/ul><br><ul>/g, '');
        
//         return text;
//     }

//     addToolLinks(html) {
//         // Add links to tool names in the response
//         this.toolsData.forEach(tool => {
//             // Create a regex that handles variations in tool name capitalization
//             const escapedName = tool.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//             const regex = new RegExp(`(?<!<[^>]*)(${escapedName})(?![^<]*>)`, 'gi');
            
//             // Replace tool names with linked versions
//             html = html.replace(regex, match => {
//                 return `<a href="${tool.url}" target="_blank" rel="noopener" class="tool-link" title="Visit ${tool.name}">${match}</a>`;
//             });
//         });
        
//         // Improved URL detection and linking
//         // This regex handles URLs more comprehensively, including those with query parameters and fragments
//         const urlRegex = /\b(https?:\/\/[^\s<>"']+[^\s.,;:!?)<>"'])/g;
//         html = html.replace(urlRegex, (match) => {
//             // Only replace if not already in an anchor tag or image tag
//             if (!match.includes('<a') && !match.includes('<img')) {
//                 // Clean the URL if it has trailing punctuation
//                 let cleanUrl = match;
//                 if (cleanUrl.endsWith('.') || cleanUrl.endsWith(',') || cleanUrl.endsWith(';') || cleanUrl.endsWith(':')) {
//                     cleanUrl = cleanUrl.slice(0, -1);
//                 }
//                 return `<a href="${cleanUrl}" target="_blank" rel="noopener" class="tool-link">${match}</a>`;
//             }
//             return match;
//         });
        
//         // Verify all links have proper attributes for security and usability
//         html = html.replace(/<a ([^>]*)>/g, (match, attributes) => {
//             if (!attributes.includes('target="_blank"')) {
//                 match = match.replace('>', ' target="_blank">');
//             }
//             if (!attributes.includes('rel="noopener"')) {
//                 match = match.replace('>', ' rel="noopener">');
//             }
//             return match;
//         });
        
//         return html;
//     }
// }

// // Initialize the chatbot when the page is fully loaded
// document.addEventListener('DOMContentLoaded', () => {
//     // Wait a bit to ensure all other scripts are loaded
//     setTimeout(() => {
//         window.toollyAIAdvisor = new ToollyAIAdvisor();
//     }, 1000);
// });

