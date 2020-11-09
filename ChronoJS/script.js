let heures = document.getElementById("hour");
let minutes = document.getElementById("minutes");
let secondes = document.getElementById("seconds");
let hour = 0;
let minute = 0;
let second = 0;
let myLet;


function timer(){
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        if (minute >= 60) {
            minute = 0;
            hour++;
        }
    }
    secondes.innerHTML = second + " secondes ";
    minutes.innerHTML = minute + " minutes ";
    heures.innerHTML = hour + " heures ";
    myLet = setTimeout(timer,1000);
}

function stop(){
    clearTimeout(myLet);
}

function clearTimer(){
    clearTimeout(myLet);
    secondes.innerHTML ="0 secondes ";
    minutes.innerHTML ="0 minutes ";
    heures.innerHTML = "0 heures ";
    second = 0;
    minute = 0;
    hour = 0;
}

