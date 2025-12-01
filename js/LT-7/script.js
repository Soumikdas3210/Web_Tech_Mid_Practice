let para = document.getElementById("textPara");
let currentFontSize = 16;

function changeBg() {
    para.style.backgroundColor = "lightblue";
}

function increaseFont() {
    currentFontSize += 2;
    para.style.fontSize = currentFontSize + "px";
}

function centerText() {
    para.style.textAlign = "center";
}

function resetStyle() {
    para.style.backgroundColor = "white";
    para.style.fontSize = "16px";
    para.style.textAlign = "left";
    currentFontSize = 16;
}