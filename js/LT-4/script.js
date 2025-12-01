document.getElementById("addBtn").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value.trim();
    let roll = document.getElementById("rollInput").value.trim();
    let dept = document.getElementById("deptInput").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    errorMessage.innerText = "";

    if (name === "" || roll === "" || dept === "") {
        errorMessage.innerText = "All fields are required!";
        return;
    }

    
    let table = document.getElementById("studentTable");

   
    let row = document.createElement("tr");

    
    let nameCell = document.createElement("td");
    nameCell.innerText = name;

   
    let rollCell = document.createElement("td");
    rollCell.innerText = roll;

    
    let deptCell = document.createElement("td");
    deptCell.innerText = dept;

  
    let actionCell = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    
    deleteBtn.addEventListener("click", function () {
        row.remove();
    });

    actionCell.appendChild(deleteBtn);

   
    row.appendChild(nameCell);
    row.appendChild(rollCell);
    row.appendChild(deptCell);
    row.appendChild(actionCell);


    table.appendChild(row);


    document.getElementById("nameInput").value = "";
    document.getElementById("rollInput").value = "";
    document.getElementById("deptInput").value = "";
});