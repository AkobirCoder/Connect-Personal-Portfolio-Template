const textElement = document.getElementById("text");
const words = ["Connect with Innovation", "Elevate Your Interactive Stream", "Experience the Future"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    let displayText = currentWord.substring(0, charIndex);

    if (!isDeleting) {
        textElement.textContent = displayText;
        charIndex++;
    } else {
        textElement.textContent = displayText;
        charIndex--;
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 30 : 50);
    }
}

setTimeout(typeEffect, 1000);