
// Project1: 
// code for current time: 
let gettime = document.getElementById('time');
setInterval(() => {
    function currenttime ()
{
   let now = new Date();
   let currdate = now.toLocaleTimeString();
   gettime.innerHTML = `${currdate}`;
}
currenttime();
}, 1000);


// Project 2: 
// code for countdowntime: 



let startingtime = 5;
let time = 5 *60;      //converting first time inot seconds: 300seconds

function count()
{
    let minute = Math.floor(time/60);
    let second = time%60;
    time--; 
    document.getElementById('countthetimer').innerHTML = `${minute}:${second}`;
    
}

setInterval(() => {
      count();
}, 1000);


// Project 3: code for stopwatch(MOST IMPORTANT)

let [seconds, minutes, hours]= [0,0,0];
let displaytime = document.getElementById('watch');
let counter =null;

// logic for stopwatch: 

function stopwatch()
{
    seconds++;
    if(seconds==60)
    {
        seconds=0;
        minutes++;
        if(minutes==60)
        {
            minutes=0;
            hours++;
        }
    }

    let h = hours<10 ? "0"+hours : hours;
    let m= minutes<10? "0"+minutes: minutes;
    let s= seconds<10? "0"+seconds : seconds;
displaytime.innerHTML = h+":"+m+":"+"s";    

}


function startwatch() {
    if (counter !== null) {
        clearInterval(counter);
    }
    counter = setInterval(stopwatch, 1000);   
}

// 4.stopwatch 
function stopw()
{
    clearInterval(counter);
}

//    5 reset
function resetwatch()
{
    clearInterval(counter);
    [seconds, minutes, hours]=[0,0,0];
}





