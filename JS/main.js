// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
close.onclick = function() {
    console.log("trying to close the mainframe")
    this.parentElement.style.display = "none";
}

//function that adds a new list item when Add is clicked
function newElement(){
    var inputValue = document.getElementById("input").value;
    //checking if client has entered a value
    if(inputValue === ''){
        alert("Please Enter a Task");
    }
    //if there is a value create a list object to store it in and append to un-ordered list
    var task = document.createElement("li");
    var text = document.createTextNode(inputValue);
    task.appendChild(text);
    document.getElementById("tasks").appendChild(task);
    //The item is now appended, need to add close option
    var cross = document.createElement("SPAN"); //it is SPAN so it is laid to the right/next to the task added
    var deleteMark = document.createTextNode("\u00D7") //generates cross symbol next to task
    //creating a class for the cross symbol and appending the cross symbol to the SPAN element
    cross.className = "close";
    cross.appendChild(deleteMark);
    task.appendChild(cross);
    
    for(i=0; i < close.length; i++){
        close[i].onClick = function() {
            console.log("closing the mainframe")
            var div = this.parentElement;
            div.style.display = "none";
        } 
    }
}

