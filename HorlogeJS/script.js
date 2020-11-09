let timed = document.getElementById("horloge");
let timed2 = document.getElementById("date");

function dispDate(){
    let currentTime = new Date();
    let dd = currentTime.getDay() + 1;
    let mm = currentTime.getMonth() + 1;
    let yyyy = currentTime.getFullYear(); 
    let hh = currentTime.getHours();
    let m2 = currentTime.getMinutes();
    let ss = currentTime.getSeconds();
    timed2.innerHTML = 'Il est actuellement :' + hh + 'h' + m2 + 'm' + ss + 's';
    timed.innerHTML ='Nous sommes le : ' +dd+'/'+mm+'/'+yyyy ;
} 
setInterval(dispDate, 1000);