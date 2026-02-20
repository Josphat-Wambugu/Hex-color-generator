const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorText = document.getElementById("color-text");

btn.addEventListener("click", function() {
    let hexColor = "#";
    
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexValues.length);
        hexColor += hexValues[randomIndex];
    }

    document.body.style.backgroundColor = hexColor;
    colorText.textContent = hexColor;
});