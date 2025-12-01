let body = document.getElementById("page");
let header = document.getElementById("header");
let content = document.getElementById("content");
let footer = document.getElementById("footer");
let toggleBtn = document.getElementById("toggleBtn");

let isDark = false;

let lightTheme = {
    background: "white",
    text: "black",
    border: "black"
};

let darkTheme = {
    background: "black",
    text: "white",
    border: "white"
};

function applyTheme(theme) {
    body.style.backgroundColor = theme.background;
    body.style.color = theme.text;

    header.style.borderBottom = "2px solid " + theme.border;
    content.style.border = "1px solid " + theme.border;
    footer.style.borderTop = "2px solid " + theme.border;
}

toggleBtn.addEventListener("click", function () {
    if (isDark) {
        applyTheme(lightTheme);
        toggleBtn.innerText = "Switch to Dark Mode";
        isDark = false;
    } else {
        applyTheme(darkTheme);
        toggleBtn.innerText = "Switch to Light Mode";
        isDark = true;
    }
});

applyTheme(lightTheme);