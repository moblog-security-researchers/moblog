const eleveText = document.querySelector(".eleve");
const words = eleveText.textContent.trim().split("");

function animateWords(words) {
    let index = 0;
    let forward = true;

    function animationStep() {
        eleveText.textContent = words.slice(0, index).join("");

        if (forward) {
            index++;
        } else {
            index--;
        }

        if (index === words.length) {
            forward = false;
        }

        if (index === 0) {
            forward = true;
        }
    }
    setInterval(animationStep, 70); // Adjust the time interval as needed
}

animateWords(words);
