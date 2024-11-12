// Basic alert test to ensure JavaScript is running
function helloWorld() {
    alert("Hello, world!");
}

// Function to increase text size when "Bigger!" button is clicked
function makeTextBigger() {
    const textArea = document.getElementById("text-area");
    textArea.style.fontSize = "24pt";
}

// Function to apply styling based on selected radio button
function applyFancyStyle() {
    const textArea = document.getElementById("text-area");
    const fancyRadio = document.getElementById("fancy");
    
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to uppercase text and add "-Moo" to the end of each sentence
function addMoo() {
    const textArea = document.getElementById("text-area");
    let text = textArea.value.toUpperCase();
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] += "-Moo";
    }
    textArea.value = sentences.join(".");
}
