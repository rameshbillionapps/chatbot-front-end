function initializeChat() {
    // Create chat container
    const chatContainer = document.createElement('div');
    chatContainer.classList.add('ba-chat-container');
    // Create chat header
    const chatHeader = document.createElement('div');
    chatHeader.classList.add('ba-chat-header');
    chatHeader.innerHTML = `
    <h3>GSBA Website Information</h3>
    <div id="ba-min-chat-btn" class="ba-min-chat-btn ba-minimize-btn" title="Minimize"></div>
    `;
    chatContainer.appendChild(chatHeader);
    // Create chat messages container
    const chatMessages = document.createElement('div');
    chatMessages.classList.add('ba-chat-messages');
    chatContainer.appendChild(chatMessages);
    
    // Create chat input container
    const chatInputContainer = document.createElement('div');
    chatInputContainer.classList.add('ba-chat-input-container');
    chatInputContainer.innerHTML = `<div class="inputwrapper">
    <input type="text" id="ba-chat-input" placeholder="Ask me anything..." autocomplete="off">
    <button id="ba-send-btn" title="Send"></button></div>
    <div class="beta">This is in beta and may make mistakes</div>
    `;
    chatContainer.appendChild(chatInputContainer);
    // Append chat container to the document body
    document.body.appendChild(chatContainer);
    const style = document.createElement('style');
 style.textContent = `
 .beta{
 width: 100%;
    font-size: 10px;
    color: #959595;
    text-align: center;
        margin: 10px 0px;
 }
    .ba-chat-header {
    background-color: #367bc0;
    color: #fff;
    padding: 15px 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-shadow: 0px 5px 10px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 10px -7px rgba(0,0,0,0.75);
    box-shadow: 0px 5px 10px -7px rgba(0,0,0,0.75);
    position:relative;
    z-index:99;
}

.ba-chat-header h3 {
    font-family: sans-serif;
    color: #fff;
    padding: 0;
    margin: 0;
    font-weight: normal;
    font-size: 16px;
}

.ba-chat-container {
    font-family: sans-serif;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
}

.ba-chat-container a {
   display: inline-block;
    color: #367bc1;
    font-weight: normal;
    text-decoration: none;
    margin: 5px 0px;
}
.ba-chat-container a:hover{
text-decoration:underline;
}

.ba-chat-messages {
    background-image: url(AI-Chat/icons/pattern.svg);
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 40%;
    position: relative;
    padding-top: 10px;
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 35vh;
    max-height: 55vh;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
}

.inputwrapper{
    display: flex;
    padding: 0px 15px;
    flex-direction: row;
    align-items: center;
    position: relative;
    flex-flow: wrap;
    border-radius:7px;
    border:1px solid #eee;
    margin:0px 10px;
    -webkit-box-shadow: 0px 1px 3px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 1px 3px -1px rgba(0,0,0,0.75);
box-shadow: 0px 1px 3px -1px rgba(0,0,0,0.75);
}
.ba-chat-input-container{
position:relative;
padding-top: 15px;
}
.ba-chat-input-container input[type="text"] {
color:#000;
    flex: 1;
    padding: 0;
    border: 0;
    border-radius: 3px;
    background-color: #fff;
    font-size: 14px;
    margin: 0 !important;
    height: 42px !important;
    font-family: sans-serif;
}

.ba-chat-input-container input[type="text"]:focus, .ba-chat-input-container button {
    outline: 0;
    border: 0;
}

.ba-chat-input-container button {
    background-image: url(AI-Chat/icons/submit.svg);
    background-repeat: no-repeat;
    background-color: #fff;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-size: contain;
}

#ba-min-chat-btn {
    color: #000;
}

.ba-message {
    padding: 5px 10px;
    margin: 10px 0px;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    word-break: break-word;
}

.ba-user .ba-message {
    background-color: #007bff;
    color: #fff;
    text-align: right;
}

.ba-bot .ba-message {
    background-color: #28a745;
    color: #fff;
    text-align: left;
}

.ba-chat-icon {
    width: 50px;
    height: 50px;
    background-image: url('AI-Chat/icons/bot.svg');
    background-size: cover;
    -webkit-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
    border-radius: 100%;
}

.ba-close-chat {
    width: 50px;
    height: 50px;
    background-image: url('AI-Chat/icons/close.svg');
    background-size: cover;
    -webkit-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
    border-radius: 100%;
}

.ba-close-chat.ba-down-minimize {
    background-image: url('AI-Chat/icons/bot.svg');
}

#ba-close-button {
    display: none;
}

#ba-close-button svg {
    display: block;
    margin: auto;
}

#ba-chat-icon-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999;
}

.ba-chat-container {
    position: fixed;
    bottom: 80px;
    right: 20px;
    min-width: 420px;
    width: 28%;
    background-color: #fff;
    border-radius: 10px;
    display: none;
    z-index: 1000;
    -webkit-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 24px -8px rgba(0,0,0,0.75);
}

.ba-chat-container.ba-show-chat {
    opacity: 1;
    -webkit-animation: slide-up .3s ease-out;
    -moz-animation: slide-up .3s ease-out;
}

@-webkit-keyframes slide-up {
    0% {
        opacity: 0;
        -webkit-transform: translateY(10%);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
    }
}

@-moz-keyframes slide-up {
    0% {
        opacity: 0;
        -moz-transform: translateY(10%);
    }
    100% {
        opacity: 1;
        -moz-transform: translateY(0);
    }
}

.plain-text {
    color: inherit;
    text-decoration: none;
    cursor: auto;
}

.plain-text a {
    color: inherit;
    text-decoration: none;
}

.ba-message.ba-user {
    align-self: flex-end;
    background-color: #367bc0;
    flex-direction: column;
    color: #fff;
    max-width: 70%;
    border-radius: 10px;
    padding: 10px 15px;
    border-bottom-right-radius: 0;
}

.ba-message.ba-user .ba-message-icon {
    display: none;
}

.ba-message.ba-user .ba-message-content {
    word-break: break-word;
}

.ba-message.ba-bot .ba-message-content {
    background-color: #f2f2f2;
    color: #000;
    max-width: 80%;
    border-radius: 10px;
    padding: 10px 10px;
    border-top-left-radius: 0;
    word-break: break-word;
}

.ba-chat-messages p {
    white-space: normal;
    margin:0px;
}

.ba-chat-input-container button:hover {
    opacity: 0.8;
}

.ba-message-content {
    display: inline-block;
}
    .ba-message-content ul{
padding-left: 15px;
}
.ba-message-content ul li{
 margin: 8px 0px;
 list-style: disc;
}

.ba-message-icon {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    align-self: flex-start;
}

.ba-message.ba-bot .ba-message-icon {
    background-image: url(AI-Chat/icons/bot-icon.svg);
    background-repeat: no-repeat;
    background-size: auto;
    width: 25px;
    height: 25px;
}

.ba-minimize-btn {
    background-image: url(AI-Chat/icons/min.svg);
    background-size: auto;
    background-repeat: no-repeat;
    width: 22px;
    height: 22px;
    cursor: pointer;
    display: block;
    background-position: center center;
}

.ba-chat-messages::-webkit-scrollbar-track {
    background-color: #F5F5F5;
}

.ba-chat-messages::-webkit-scrollbar {
    width: 7px;
    background-color: #F5F5F5;
}

.ba-chat-messages::-webkit-scrollbar-thumb {
    background-color: #9a9a9a;
    border-radius: 5px;
}

.ba-chat-icon, .ba-close-chat {
    transition: .3s;
}

.ba-chat-icon:hover, .ba-close-chat:hover {
    animation: ba-pulse 1s infinite;
    transition: .3s;
}
#ba-chat-input:disabled, #ba-send-btn:disabled, .ba-chat-input-container.disabled .inputwrapper {
            background-color:#f2f2f2;
}
.ba-chat-input-container.disabled button{
opacity:0.5;
cursor: auto;
}
.ba-chat-input-container.disabled .inputwrapper{
box-shadow:none;
}

.ba-questions-container{
    display: flex;
    flex-flow: column;
}
.ba-questions-container .ba-question {
 background-color: #ffffff;
    color: #000;
    border-radius: 10px;
    padding: 5px 15px;
    word-break: break-word;
    border: 2px dashed #dadada;
    margin-bottom: 10px;
    max-width: 73%;
    align-self: flex-start;
    margin-left: 40px;
}


.ba-question:hover {
    background-color:#f2f2f2;
    cursor:pointer;
    border:2px solid #dadada;
}
 .ba-message-content a::before {
            content: url('AI-Chat/icons/linkicon.svg');
            display: inline-block;
            margin-right: 5px;
            vertical-align: middle;
        }

@keyframes ba-pulse {
    0% {
        transform: scale(1);
    }
    70% {
        transform: scale(.9);
    }
    100% {
        transform: scale(1);
    }
}

.ba-chat-input-container input::placeholder {
    color: #626262 !important;
}

.ba-chat-input-container input:-moz-placeholder {
    color: #626262 !important;
}

.ba-loading-icon {
    margin: 0 auto;
    width: 40px;
    position: absolute;
    top: -5px;
    left: 10px;
    aspect-ratio: 2;
    --_g: no-repeat radial-gradient(circle closest-side, #82add8 90%, #0000);
    background: 
        var(--_g) 0% 50%, 
        var(--_g) 50% 50%, 
        var(--_g) 100% 50%;
    background-size: calc(100%/3) 50%;
    animation: l3 1s infinite linear;

    
}
    .ba-welcome-msg p{
    margin:10px 0px;}
     .ba-welcome-msg p:nth-child(1), .ba-welcome-msg p:nth-last-child(1){
     margin:0px 0px;
     }

@keyframes l3 {
    20% {background-position: 0% 0%, 50% 50%, 100% 50%}
    40% {background-position: 0% 100%, 50% 0%, 100% 50%}
    60% {background-position: 0% 50%, 50% 100%, 100% 0%}
    80% {background-position: 0% 50%, 50% 50%, 100% 100%}
}

@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}

.fade-out {
    animation: fadeOut 2s ease-in-out;
}
@media only screen and (min-width: 1600px) {
        .ba-chat-container, .ba-chat-container {
            font-size:16px;
        }
        .ba-chat-input-container input[type="text"] {
            font-size: 16px;
        }
        #ba-chat-icon-container, .ba-chat-icon, .ba-close-chat{
            width: 60px;
            height: 60px;
        }
            .ba-chat-container{
            bottom: 95px;
            }
      }
      @media only screen and (min-width: 1920px) {
        .ba-chat-container, .ba-chat-container{
            font-size:16px;
        }
        .ba-chat-input-container input[type="text"] {
            font-size: 16px;
        }
        #ba-chat-icon-container, .ba-chat-icon, .ba-close-chat{
            width: 70px;
            height: 70px;
        }
             .ba-chat-container{
            bottom: 110px;
            }
      }
  @media only screen and (max-width: 480px) {
        #ba-chat-icon-container {
    right: 15px;
}
      .ba-chat-container {
        width: 95%;
        max-width: 100%;
        min-width: unset;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

}
     @media only screen and (min-width: 481px) and (max-width: 767px) {
        #ba-chat-icon-container {
    right: 15px;
    bottom: 15px;
    
}
      .ba-chat-container {
        width: 95%;
        max-width: 100%;
        min-width: unset;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: 75px;
    }
        .ba-chat-messages {
    max-height: 48vh;
}

}
    `;
    document.head.appendChild(style);


// Function to add welcome message and questions from the API
function addWelcomeMessage() {
    // Check if the welcome message already exists
    const existingWelcomeMessage = document.querySelector('.ba-welcome-msg');
    if (existingWelcomeMessage) {
        // If it exists, do nothing
        return;
    }

    // Fetch welcome message and questions from the API
    fetch('https://dashboard.billionapps.net/api/chatbot-settings-api')
        .then(response => response.json())
        .then(data => {
            // Get current time and determine the greeting
            const now = new Date();
            const hours = now.getHours();
            let greeting;
            let emoji;

            if (hours < 12) {
                greeting = "Good morning!";
                emoji = "☀️";
            } else if (hours < 18) {
                greeting = "Good afternoon!";
                emoji = "🌞";
            } else {
                greeting = "Good evening!";
                emoji = "🌙";
            }

            const chatMessages = document.querySelector('.ba-chat-messages');
            const welcomeMessage = document.createElement('div');
            welcomeMessage.classList.add('ba-message', 'ba-bot', 'ba-welcome-msg');
            welcomeMessage.innerHTML = `
                <div class="ba-message-icon"><span></span></div>
                <div class="ba-message-content">
                    <p>${greeting} ${emoji}</p>
                    <p>${data.welcome_message}</p>
                </div>`;
            chatMessages.appendChild(welcomeMessage);
            
            const questionsContainer = document.createElement('div');
            questionsContainer.classList.add('ba-questions-container');
            questionsContainer.innerHTML = `
                <div class="ba-question" data-question="${data.query_1}">${data.query_1}</div>
                <div class="ba-question" data-question="${data.query_2}">${data.query_2}</div>`;
            chatMessages.appendChild(questionsContainer);

            scrollToBottom();

            // Add event listeners to the question links
            const questionLinks = document.querySelectorAll('.ba-question');
            questionLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    const question = event.target.getAttribute('data-question');
                    sendMessage(question);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching welcome message and questions:', error);
        });

}



    // Call the function to add the welcome message when the page loads
    addWelcomeMessage();
    
    // Call the function to add local session response
    loadMessagesFromLocalStorage();
    
    // Add event listener for chat icon container click
    const chatIconContainer = document.getElementById('ba-chat-icon-container');
    chatIconContainer.addEventListener('click', function() {
    const chatContainer = document.querySelector('.ba-chat-container');
    const downArrow = document.getElementById('ba-close-button');
    
    // Check if the down arrow has the ba-down-minimize class
    const isArrowMinimized = downArrow.classList.contains('ba-down-minimize');
    if (!isArrowMinimized) {
    //const chatMessages = document.querySelector('.ba-chat-messages');
    //chatMessages.innerHTML = '';
    //console.log('Reseted chat conversation');
    } 
    // Toggle visibility of chat container
    if (chatContainer.style.display === 'block') {
    chatContainer.style.display = 'none';
    chatContainer.classList.remove('ba-show-chat');
    // Update transform and opacity when chat container is hidden
    //chatContainer.style.transform = 'scale(0.5)';
    //chatContainer.style.opacity = '0';
    } else {
    chatContainer.style.display = 'block';
    chatContainer.classList.add('ba-show-chat');
    downArrow.classList.remove('ba-down-minimize');
    chatContainer.classList.remove('ba-minimize-chat');
    // Update transform and opacity when chat container is shown
    //chatContainer.style.transform = 'scale(1)';
    //chatContainer.style.opacity = '1';
    }
    // Toggle visibility of down arrow SVG
    downArrow.style.display = chatContainer.style.display === 'block' ? 'block' : 'none';
    // Toggle visibility of chat icon
    const chatIcon = document.getElementById('ba-chat-icon');
    chatIcon.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
    
    // Focus on the chat input
    const chatInput = document.getElementById('ba-chat-input');
    chatInput.focus();
    
    });
    // Ensure that chat container is hidden by default and has the initial transform and opacity styles
    const defaultChatContainer = document.querySelector('.ba-chat-container');
    defaultChatContainer.style.display = 'none';
    //defaultChatContainer.style.transform = 'scale(0.5)';
    //defaultChatContainer.style.opacity = '0';
    // Add event listener for close button click
    const closeChatBtn = document.getElementById('ba-min-chat-btn');
    closeChatBtn.addEventListener('click', function() {
    const chatContainer = document.querySelector('.ba-chat-container');
    const downArrow = document.getElementById('ba-close-button');
    // Add class to the down arrow
    downArrow.classList.add('ba-down-minimize');
    chatContainer.classList.add('ba-minimize-chat');
    chatContainer.style.display = 'none';
    chatContainer.classList.remove('ba-show-chat');
    //chatContainer.style.transform = 'scale(0.5)';
    //chatContainer.style.opacity = '0';
    });
    // Add event listener for send button click
    const sendBtn = document.getElementById('ba-send-btn');
    if (sendBtn) {
    sendBtn.addEventListener('click', function() {
    sendMessage();
    });
    }
    // Add event listener for keypress event on chat input
    const userInput = document.getElementById('ba-chat-input');
    if (userInput) {
    userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
    sendMessage();
    }
    });
    }

     // Function to display loading icon and hide chat input and submit button
    function displayLoading() {
    // Hide chat input
    const chatInput = document.getElementById('ba-chat-input');
    if (chatInput) {
    chatInput.disabled = true;
    }
    
    // Hide submit button
    const sendBtn = document.getElementById('ba-send-btn');
    if (sendBtn) {
    sendBtn.disabled = true;
    }

    // Show loading GIF
    const loadingIcon = document.createElement('gifloader');
    loadingIcon.classList.add('ba-loading-icon');
    const chatInputContainer = document.querySelector('.ba-chat-input-container');
    chatInputContainer.classList.add('disabled');
    chatInputContainer.appendChild(loadingIcon);
    }
    // Function to hide loading icon and show chat input and submit button
    function hideLoading() {
    // Remove loading GIF
    const loadingIcon = document.querySelector('.ba-loading-icon');
    if (loadingIcon) {
    loadingIcon.remove();
    }
    // Show chat input
    const chatInput = document.getElementById('ba-chat-input');
    if (chatInput) {
    chatInput.disabled = false;
    chatInput.focus();
    }
    // Show submit button
    const sendBtn = document.getElementById('ba-send-btn');
    if (sendBtn) {
    sendBtn.disabled = false;
    }
    chatInputContainer.classList.remove('disabled');
    }
    // Event listener for send button
    sendBtn.addEventListener('click', function() {
    sendMessage();
    });
    // Event listener for pressing Enter key
    userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
    sendMessage();
    }
    });
    
    function hideloadericon() {
        // Remove loading GIF
        const loadingIcon = document.querySelector('.ba-loading-icon');
        if (loadingIcon) {
            loadingIcon.remove();
        }
    }

    // Function to send messages
    function sendMessage(message) {
        const userMessage = message || userInput.value.trim();
        if (userMessage !== '') {
            displayMessage('ba-user', userMessage); // Display user message
            // Display loading icon
            displayLoading();
    
            // Save user message to local storage
            saveMessageToLocalStorage('ba-user', userMessage);
    
            // Send message to API endpoint
            fetch('https://www.blnapps.com/api/chat_v2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ user_message: userMessage })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json(); // Directly return JSON response
            })
            .then(data => {
                console.log('Response data:', data);
    
                // Check if the response contains the message property
                if (data) {
                    // Display API response message
                    displayMessage('ba-bot', JSON.stringify(data));
                    // Save bot response to local storage
                    saveMessageToLocalStorage('ba-bot', JSON.stringify(data));
                    console.log('Response message:', data);
                } else {
                    console.error('Response does not contain message property:', data);
                    throw new Error('Invalid response format');
                }
            })
            .catch(error => {
                // Display error message for API connection issue or invalid response
                console.error('Error:', error);
                displayMessage('ba-bot', 'Error: Failed to fetch response');
                // Save error message to local storage
                saveMessageToLocalStorage('ba-bot', 'Error: Failed to fetch response');
            })
            .finally(() => {
                // Hide loading icon once response is received or error occurs
                hideLoading();
            });
    
            userInput.value = ''; // Clear input field
        }
    }

    // Function to display messages
    function displayMessage(sender, message, fromSessionStorage = false) {
        const chatMessages = document.querySelector('.ba-chat-messages');
        const messageElement = document.createElement('div');
        messageElement.classList.add('ba-message', sender);
        
        // Apply the sliding effect only for bot messages
        if (sender === 'ba-bot' && !fromSessionStorage) {
            messageElement.classList.add('ba-slide-in-left');
        }
        
        // Create message content element
        const messageContent = document.createElement('div');
        messageContent.classList.add('ba-message-content');
        messageElement.appendChild(messageContent);
        
        // Create and append message icon
        const messageIcon = document.createElement('div');
        messageIcon.classList.add('ba-message-icon');
        const iconImg = document.createElement('span');
        messageIcon.appendChild(iconImg);
        messageElement.insertBefore(messageIcon, messageContent);
        
        chatMessages.appendChild(messageElement);
        scrollToBottom(); // Scroll to the bottom after adding the message container
        
        // Save message to session storage if not from session storage
        if (!fromSessionStorage) {
            saveMessageToSessionStorage(sender, message);
        }
        
        // If the sender is 'ba-bot', parse the message
        let structuredMessage = '';
        
        if (sender === 'ba-bot') {
            try {
                const response = JSON.parse(message);
        
                // Ensure correct order and handle missing properties
                if (response.Summary) {
                    structuredMessage += `<p>${response.Summary}</p>`;
                }
                if (response.Details && response.Details.length > 0) {
                    if (Array.isArray(response.Details)) {
                        structuredMessage += '<ul>';
                        response.Details.forEach(detail => {
                            structuredMessage += `<li>${detail}</li>`;
                        });
                        structuredMessage += '</ul>';
                    } else {
                        structuredMessage += `<ul><li>${response.Details}</li></ul>`;
                    }
                }
                if (response.Link) {
                    structuredMessage += `<a href="${response.Link}" target="_blank">${response.Link}</a>`;
                }
            } catch (e) {
                console.error('Error parsing JSON response:', e);
                structuredMessage = message;
            }
        
            // Directly set the structured message
            messageContent.innerHTML = structuredMessage;
    
        } else {
            // Show the full message instantly for user prompts and session storage messages
            message = message.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
            messageContent.innerHTML = message.replace(/\n/g, '<br>');
            
        }
        
        scrollToBottom(); // Scroll to the bottom after message is displayed
    
    }

    // Function to save message to session storage
    function saveMessageToSessionStorage(sender, message) {
        const chatHistory = JSON.parse(sessionStorage.getItem('chatHistory')) || [];
        chatHistory.push({ sender, message });
        sessionStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
    
    // Function to save messages to local storage
    function saveMessageToLocalStorage(sender, message) {
        const sessionId = getSessionId();
        let chatHistory = JSON.parse(localStorage.getItem(sessionId)) || [];
        chatHistory.push({ sender, message });
        localStorage.setItem(sessionId, JSON.stringify(chatHistory));
    }
    
    // Function to get session ID
    function getSessionId() {
        let sessionId = localStorage.getItem('chatSessionId');
        if (!sessionId) {
            sessionId = 'session-' + Date.now();
            localStorage.setItem('chatSessionId', sessionId);
        }
        return sessionId;
    }
    
    // Function to load messages from local storage
    function loadMessagesFromLocalStorage() {
        console.log("loading history from session");
        const sessionId = getSessionId();
        const chatHistory = JSON.parse(localStorage.getItem(sessionId)) || [];
        chatHistory.forEach(({ sender, message }) => {
            displayMessage(sender, message, true);
        });
        setTimeout(() => scrollToBottom(), 100); // Ensure scrolling to the bottom after loading messages
    }


    // Function to scroll to the bottom of the chat container
    function scrollToBottom() {
        const chatMessages = document.querySelector('.ba-chat-messages');
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 100); // Adjust the timeout delay if needed
    }
    
    // Function to createChatIcon
    function createChatIcon() {
        const chatIconContainer = document.createElement('div');
        chatIconContainer.id = 'ba-chat-icon-container';
        chatIconContainer.classList.add('ba-chat-icon'); 
        document.body.appendChild(chatIconContainer);
        const chatContainer = document.querySelector('.ba-chat-container');
        chatIconContainer.addEventListener('click', () => {
            chatContainer.classList.add('ba-show-chat');
            chatContainer.style.display = 'flex';
            chatIconContainer.style.display = 'none';
            const chatMessages = document.querySelector('.ba-chat-messages');
            scrollToBottom();
        });
    }

}