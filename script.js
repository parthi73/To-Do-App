const inputBox=document.getElementById("input-Box");
const listContainer=document.getElementById("List-container");
const li=document.querySelector("li");

function myFunction(){
    if(inputBox.value==="")
    {
        alert("Enter your To Do list !");
        saveData();
        showList();

    }
    else{
        var li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

        li.addEventListener('click', makethrough);

        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);

        span.addEventListener('click', function() {
            this.parentElement.remove();
            showList();

        });
        
    }
    inputBox.value="";
    li.appendChild(span);
    saveData();
    
}

function makethrough() {
    this.classList.toggle('lineThrough');
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();
