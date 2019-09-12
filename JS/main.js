
//function that adds a new element, and 
function newElement(){
    var inputValue = document.getElementById("input").value;
    //checking if client has entered a value
    if(inputValue === ''){
        alert("Please Enter a Task");
    }
    
    //if there is a value create a list object to store it in and append to un-ordered list
    var task = document.newElement("li");
    var text = document.createTextNode(inputValue);
    task.appendChild(text);
    document.getElementById("tasks").appendChild(tassk);
    //The item is now appended, need to add close option
    var cross = document.newElement("SPAN"); //it is SPAN so it is laid to the right/next to the task added
    var deleteMark = document.createTextNode("\u00D7") //generates cross symbol next to task
    //creating a class for the cross symbol and appending the cross symbol to the SPAN element
    cross.className("close");
    cross.appendChild(deleteMark);
    
    for(i=0; i < close.length; i++){
        close[i].onClick() = function() {
            this.parentElement.display = "none";
        } 
    }
}