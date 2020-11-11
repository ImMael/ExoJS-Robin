let liste = document.getElementById("liste");
let colCat = $('.column-cat');
let listElement = $('#list-elem');
let newElem = "elem";
let number = 1;

function newItem(item, desc){
    newElem = "elem" + number;
    
    let divListe = '<div class="newElem '+newElem+'">' + 
                   '<h1 class="elem '+newElem+'">'+item+'</h1>' + 
                   '<h4 class="elem '+newElem+'">'+desc+'</h4>' +
                   '</div>';
    let divCol = '<div class="cat-elem '+newElem+'">' + 
                   '<h1 class="col-cat '+newElem+'">'+item+'</h1>' + 
                   '<img src="minus.png" alt="moins" class="deleted '+newElem+'" onclick="delTask()"/>' +
                   '</div>';
    
    colCat.append(divCol);
    listElement.append(divListe);
    number++;
}

function addTask(){
    if( !$('#addlist').val() || !$('#descadd').val() ){
            alert("Vous n'avez pas remplis les champs requis")
        } else{
            newItem($('#addlist').val(),$('#descadd').val());
        }
}

function delTask(){
    let r = confirm("Veuillez comfirmer votre choix");
    if (r == true) {
        let selectedItem = event.srcElement.className;
        let prevElem = $('.'+selectedItem);
        let classNames = selectedItem.split(' ');
        $('.'+classNames[1]).fadeOut(200);
        
    } else {
        alert("Vous avez annulé");
    }
}

