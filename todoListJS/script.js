let liste = document.getElementById("liste");
let inputItem=document.getElementById("addlist");
let newElem = "elem";
let number = 1;

function counter(){
    number = number + 1;
}


function newItem(item){
    newElem = "elem" + number;
	let divItem = document.createElement("div");
    
	let textItem = document.createElement("h3");
    
	let delItem = document.createElement("img");
    
    textItem.innerHTML = item;
    
    divItem.classList.add("elem1");
    divItem.setAttribute("id", newElem);
    
    delItem.setAttribute("id",newElem)
    delItem.src = "minus.png";
    delItem.classList.add("deleted");
    delItem.setAttribute("onclick", "delTask()");
    
    liste.appendChild(divItem);
	divItem.appendChild(textItem);
	divItem.appendChild(delItem);
    counter();
}

function addTask(){
	let item = newItem(inputItem.value);
}

function delTask(){
    let r = confirm("Veuillez comfirmer votre choix");
    if (r == true) {
        let prevElem = document.getElementById(event.srcElement.id);
        prevElem.remove();
    } else {
        alert("Vous avez annulé");
    }
}