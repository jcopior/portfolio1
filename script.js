const dynamicText = document.getElementById("myInfo");
const words = ["College Student", "Future Frontend Developer", "21 years old"];

let wordIndex = 0;
let charIndex = 0;
let isRemove = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop.blinking");

    if(!isRemove && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, 100);  
    } else if(isRemove && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isRemove = !isRemove;
        dynamicText.classList.remove("stop.blinking");
        wordIndex = !isRemove ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 900);
    }
}

typeEffect();