const inputBox = document.getElementById("input-box");

function myFunction() {
    if (inputBox.value === "") {
        alert("Enter your To Do list !");
    }
    else {
        const listContainer = document.getElementById("list-container");
        let listItem = document.createElement("div");
        listItem.classList.add("list-item");


        let itemText = document.createElement("p");
        let data = inputBox.value;
        itemText.textContent = data;
        itemText.addEventListener("click", function () {
            this.classList.toggle("lineThrough");
        });
        listItem.appendChild(itemText);


        inputBox.value = "";


        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function () {
            listItem.remove();

        });

     
        listItem.appendChild(deleteButton);
        listContainer.appendChild(listItem);
    }
}
