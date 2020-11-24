let colCat = $('.column-cat');
let listElement = $('#list-elem');
let newElem = "";
let number = 1;


function newItem(item, desc){
    newElem = "elem" + number;
    let taskList = {
        "classDiv":"newElem "+newElem+"",
        "classObj":"elem "+newElem+"",
        "classCat":"cat-elem "+newElem+"",
        "classCol":"col-cat "+newElem+"",
        "deletClass":"deleted "+newElem+"",
        "title": item,
        "description": desc
    }
    let divListe = '<div class="'+taskList.classDiv+'">' + 
                   '<h1 class="'+taskList.classObj+'">'+taskList.title+'</h1>' + 
                   '<h4 class="'+taskList.classObj+'">'+taskList.description+'</h4>' +
                   '</div>';
    let divCol = '<div class="'+taskList.classCat+'">' + 
                   '<h1 class="'+taskList.classCol+'">'+taskList.title+'</h1>' + 
                   '<img src="minus.png" alt="moins" class="'+taskList.deletClass+'" onclick="delTask()"/>' +
                   '</div>';
    
    colCat.append(divCol);
    listElement.append(divListe);
    localStorage.setItem("tasktitle"+number+"",taskList.title);
    localStorage.setItem("taskdesc"+number+"",taskList.description);
    localStorage.setItem("numberid",number);
    number++;
}

function addTask(){
    if( !$("#addlist").val() || !$("#descadd").val() ){
            alert("Vous n'avez pas remplis les champs requis")
        } else{
            newItem($('#addlist').val(),$('#descadd').val());
            $('#addlist').val(''); $('#descadd').val('');
        }
}

function delTask(){
    let r = confirm("Veuillez confirmer votre choix");
    if (r) {
        let selectedItem = event.srcElement.className;
        let prevElem = $('.'+selectedItem);
        let classNames = selectedItem.split(' ');
        $('.'+classNames[1]).fadeOut(200);
        number--;
        localStorage.setItem("numberid",number);
    } else {
        alert("Vous avez annulé la suppression");
    }
}

function checkPrevTask(){
    let nbstorage = localStorage.getItem("numberid");
    let titlestorage = localStorage.getItem("tasktitle"+nbstorage+"");
    let descstorage = localStorage.getItem("taskdesc"+nbstorage+"");
    for(nbstorage; nbstorage > 0; nbstorage--){
        newItem(titlestorage,descstorage);
    }
    localStorage.clear();
}


$("form").keypress(function (e) {
  //Enter key
  if (e.which == 13) {
    addTask();
  }
});

checkPrevTask();