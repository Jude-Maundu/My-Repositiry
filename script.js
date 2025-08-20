//  <!-- JavaScript -->

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.add('active');
    });
    closeMenuBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // AI Assistant functionality
    const aiLinkDesktop = document.getElementById('ai-link-main');
    const aiLinkMobile = document.getElementById('ai-link');
    const aiCard = document.getElementById('ai-card');
    const closeAiBtn = document.getElementById('close-ai-btn');
    const aiInput = document.getElementById('ai-input');
    const aiSendBtn = document.getElementById('ai-send-btn');
    const aiOutput = document.getElementById('ai-output');

    const toggleAICard = () => {
        aiCard.classList.toggle('scale-0');
        aiCard.classList.toggle('opacity-0');
    };

    aiLinkDesktop.addEventListener('click', toggleAICard);
    aiLinkMobile.addEventListener('click', toggleAICard);
    closeAiBtn.addEventListener('click', toggleAICard);

    const appendMessage = (sender, message) => {
        const messageEl = document.createElement('div');
        messageEl.classList.add('rounded-lg', 'p-3');
        if (sender === 'user') {
            messageEl.classList.add('bg-teal-700', 'bg-opacity-40', 'ml-auto');
            messageEl.textContent = message;
        } else {
            messageEl.classList.add('bg-gray-700', 'bg-opacity-30');
            messageEl.textContent = message;
        }
        aiOutput.appendChild(messageEl);
        aiOutput.scrollTop = aiOutput.scrollHeight;
    };

    // === Custom AI logic (from your first script) ===
    async function processAI(question) {
        let answer = "🤔 I’m not sure about that.";

        if (question.toLowerCase().includes("jude")) answer = "Jude Maundu is a Software Developer with a passion for creating innovative solutions.";
        if (question.toLowerCase().includes("hello")) answer = "👋 Hi there! How can I help?";
        if (question.toLowerCase().includes("hey")) answer = "👋 Hi there! How can I help?";
        if (question.toLowerCase().includes("hi")) answer = "👋 Hi there! How can I help?";
        if (question.toLowerCase().includes("name")) answer = "My name is Jude AI. I’m here to assist you!";
        if (question.toLowerCase().includes("skills")) answer = "⚡ I know HTML, CSS, JavaScript for frontend and Backend and Python for Backend Using Django.";
        if (question.toLowerCase().includes("portfolio")) answer = "📂 This portfolio was built with HTML, CSS, JS.";
        if (question.toLowerCase().includes("projects")) answer = "You can check out my projects on GitHub at Jude-Maundu.";
        if (question.toLowerCase().includes("joke")) answer = "😂 Why don’t programmers like nature? Too many bugs.";
        if (question.toLowerCase().includes("help")) answer = "🤖 I’m here to assist you! What do you need help with?";
        if (question.toLowerCase().includes("education")) answer = "I did a certificate in Software Development at Emmobilis. Am currently doing a Diploma at Institute of Software Technology.";
        if (question.toLowerCase().includes("school")) answer = "I did my KCPE at Valley View Academy, My KCSE at ST Martin Kathonzweni.";
        if (question.toLowerCase().includes("anything else")) answer = "Call Jude and Ask Him :0793945789 😁😁😁";

        return answer;
    }

    const handleUserInput = async () => {
        const userInput = aiInput.value.trim();
        if (userInput === '') return;

        appendMessage('user', userInput);
        aiInput.value = '';

        // Show "Thinking..." animation
        const thinkingMessage = document.createElement('div');
        thinkingMessage.classList.add('bg-gray-700', 'bg-opacity-30', 'rounded-lg', 'p-3', 'animate-pulse');
        thinkingMessage.textContent = 'Thinking...';
        aiOutput.appendChild(thinkingMessage);
        aiOutput.scrollTop = aiOutput.scrollHeight;

        // Process with local AI logic
        const aiResponse = await processAI(userInput);

        // Remove thinking message
        aiOutput.removeChild(thinkingMessage);

        // Append AI response
        appendMessage('ai', aiResponse);
    };

    aiSendBtn.addEventListener('click', handleUserInput);
    aiInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});
