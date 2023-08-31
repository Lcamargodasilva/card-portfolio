document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("dark-theme");
    });
});

const typingTitle = document.getElementById("typing-title");
const titleText = "LUCAS CAMARGO";
let index = 0;

function typeTitle() {
    if (index < titleText.length) {
        typingTitle.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeTitle, 100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeTitle();
});
