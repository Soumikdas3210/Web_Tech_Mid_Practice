let userType = document.getElementById("userType");

let rollDiv = document.getElementById("rollDiv");
let deptDiv = document.getElementById("deptDiv");

userType.addEventListener("change", function () {
    if (userType.value === "student") {
        rollDiv.style.display = "block";
        deptDiv.style.display = "none";
    } 
    else if (userType.value === "teacher") {
        deptDiv.style.display = "block";
        rollDiv.style.display = "none";
    }
    else {
        rollDiv.style.display = "none";
        deptDiv.style.display = "none";
    }
});