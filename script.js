const output = document.getElementById("output");
const input = document.getElementById("commandInput");

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        const question = input.value.trim();
        if (question) {
            processAI(question);
            input.value = "";
        }
    }
});

/* Simple AI logic with typing animation */
async function processAI(question) {
    const userLine = document.createElement("div");
    userLine.textContent = `> ${question}`;
    output.appendChild(userLine);

    let answer = "🤔 I’m not sure about that.";
    
    if (question.toLowerCase().includes("Jude")) answer = "Jude Maundu is a Software Developer with a passion for creating innovative solutions.";
    if (question.toLowerCase().includes("hello")) answer = "👋 Hi there! How can I help?";
    if (question.toLowerCase().includes("hey")) answer = "👋 Hi there! How can I help?";
    if (question.toLowerCase().includes("hi")) answer = "👋 Hi there! How can I help?";
    if (question.toLowerCase().includes("name")) answer = "My name is Jude AI. I’m here to assist you!";
    if (question.toLowerCase().includes("skills")) answer = "⚡ I know HTML, CSS, JavaScript, Python,.";
    if (question.toLowerCase().includes("portfolio")) answer = "📂 This portfolio was built with HTML, CSS, JS,";
    if (question.toLowerCase().includes("projects")) answer = "You can check out my projects on GitHub at Jude-Maundu. ";
    if (question.toLowerCase().includes("joke")) answer = "😂 Why don’t programmers like nature? Too many bugs.";
    if (question.toLowerCase().includes("help")) answer = "🤖 I’m here to assist you! What do you need help with?";
    if (question.toLowerCase().includes("education")) answer = "I did a certificate in Software Development at Emmobilis. Am currentyl doing a Diploma in Institute of Software Technology.";

    await typeResponse(`Jude AI: ${answer}`, 40);
}

/* Typewriter Effect */
function typeResponse(text, speed = 30) {
    return new Promise((resolve) => {
        let i = 0;
        const line = document.createElement("div");
        output.appendChild(line);

        function typeChar() {
            if (i < text.length) {
                line.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeChar, speed);
            } else {
                resolve();
            }
            output.scrollTop = output.scrollHeight;
        }
        typeChar();
    });
}

// ===== Scroll To Section =====
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ===== Elastic Draggable Profile Photo =====
const profilePhoto = document.getElementById("profilePhoto");
const startX = profilePhoto.offsetLeft;
const startY = profilePhoto.offsetTop;
let offsetX, offsetY, isDragging = false;

function onDragStart(e) {
  isDragging = true;
  offsetX = (e.clientX || e.touches[0].clientX) - profilePhoto.offsetLeft;
  offsetY = (e.clientY || e.touches[0].clientY) - profilePhoto.offsetTop;
  profilePhoto.style.transition = "none"; // Disable smooth snap while dragging
}

function onDragMove(e) {
  if (!isDragging) return;
  const x = (e.clientX || e.touches[0].clientX) - offsetX;
  const y = (e.clientY || e.touches[0].clientY) - offsetY;
  profilePhoto.style.left = x + "px";
  profilePhoto.style.top = y + "px";
}

function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;
  // Snap back with elastic bounce
  profilePhoto.style.transition = "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)";
  profilePhoto.style.left = startX + "px";
  profilePhoto.style.top = startY + "px";
}

// Mouse Events
profilePhoto.addEventListener("mousedown", onDragStart);
document.addEventListener("mousemove", onDragMove);
document.addEventListener("mouseup", onDragEnd);

// Touch Events (for mobile)
profilePhoto.addEventListener("touchstart", onDragStart);
document.addEventListener("touchmove", onDragMove);
document.addEventListener("touchend", onDragEnd);

