function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    // Display user message
    let chatBox = document.getElementById("chatBox");
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Auto-scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Generate bot response
    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = botResponse;
        chatBox.appendChild(botMessage);

        // Auto-scroll
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    // Display user message
    let chatBox = document.getElementById("chatBox");
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Clear input field
    document.getElementById("userInput").value = "";

    // Auto-scroll to latest message
    chatBox.scrollTop = chatBox.scrollHeight;

    // Generate bot response
    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = botResponse;
        chatBox.appendChild(botMessage);

        // Auto-scroll
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}


// Simple predefined responses
function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! How can I help you?",
        "hi": "Hello! What can I do for you?",
        "hey": "Hey! How’s it going?",
        "how are you": "I'm just a bot, but I'm doing great! 😊",
        "what is your name": "I'm a chatbot here to assist you!",
        "who created you": "I was created by a developer to help answer your questions.",
        "what can you do": "I can chat with you, answer simple questions, and help you with basic tasks!",
        "how old are you": "I'm as old as the code that runs me!",
        "where are you from": "I live in the digital world, inside your browser!",
        "tell me a joke": "Why don't programmers like nature? Too many bugs! 😂",
        "what is ai": "AI stands for Artificial Intelligence, which helps machines think and learn like humans.",
        "what is your purpose": "My purpose is to assist you and answer your questions!",
        "who is your boss": "You are! I exist to serve you.",
        "bye": "Goodbye! Have a great day! 👋",
        "goodbye": "See you later! Take care!",
        "thank you": "You're welcome! 😊",
        "thanks": "No problem! Happy to help! 👍",
        "what's up": "Not much! Just here to chat with you. 😊",
        "do you like humans": "Of course! You created me after all. 😊",
        "can you help me": "Yes! Let me know what you need help with.",
        "are you real": "I'm as real as the screen you're looking at! 😉",
        "can you learn": "Right now, I only respond with predefined answers, but I can be upgraded to learn!"
    };

    let lowerInput = input.toLowerCase();
    return responses[lowerInput] || "Sorry, I don't understand that.";
}
