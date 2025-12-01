let isDark = false;
let themeBtn = document.getElementById("themeBtn");
let page = document.getElementById("page");

function applyTheme() {
    if (isDark) {
        page.style.background = "black";
        page.style.color = "white";
        themeBtn.innerText = "Switch to Light Mode";
    } else {
        page.style.background = "white";
        page.style.color = "black";
        themeBtn.innerText = "Switch to Dark Mode";
    }
}

themeBtn.addEventListener("click", function () {
    isDark = !isDark;
    applyTheme();
});

applyTheme();

function updateGreeting() {
    let hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) greeting = "Good Morning";
    else if (hour < 17) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    document.getElementById("greeting").innerText = greeting;
}

updateGreeting();

function showSection(id) {
    let sections = document.getElementsByClassName("section");

    for (let s of sections) {
        s.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}

showSection("about");

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");


    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";
    
    let valid = true;


    if (name === "") {
        nameError.innerText = "Name cannot be empty.";
        valid = false;
    }


    if (!email.includes("@") || !email.includes(".")) {
        emailError.innerText = "Enter a valid email address.";
        valid = false;
    }

    if (message.length < 10) {
        messageError.innerText = "Message must be at least 10 characters.";
        valid = false;
    }

    if (valid) {
        alert("Message Sent Successfully!");
        document.getElementById("contactForm").reset();
    }
});