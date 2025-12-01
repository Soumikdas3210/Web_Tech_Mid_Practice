document.getElementById("analyzeBtn").addEventListener("click", function () {
    let text = document.getElementById("inputText").value;

    let resultBox = document.getElementById("resultBox");

    if (text.trim() === "") {
        resultBox.innerHTML = "<p style='color:red;'>Please enter some text!</p>";
        return;
    }

    let charCount = text.length;

    let words = text.trim().split(/\s+/);  
    let wordCount = words.length;

    let reversedText = text.split("").reverse().join("");

    resultBox.innerHTML = "<p><strong>Total Characters:</strong>"+charCount+"</p><p><strong>Total Words:"+wordCount+"</p><p><strong>Reversed Text:</strong></p><p>"+reversedText+"</p>";
        
});