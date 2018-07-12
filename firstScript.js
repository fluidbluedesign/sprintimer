//get value for unpack from localstorage and convert into Integer

var unpackValue = localStorage.getItem("unpackValue");
console.log(unpackValue);
var timerValue = parseInt(unpackValue);
console.log(timerValue);
if (timerValue == 0) {timerValue = 60; }




//variables for progress bar
var progBarPerc = 0;
var currentTicker = 1;
var actualBar = document.getElementById("progressBar");
var totalTimeCount = document.getElementById("totalTime");

//first timer

//assign firsttimerseconds to current timer
var firstTimer = new Timer();
firstTimer.start({precision: 'seconds', countdown: true, startValues: {seconds: timerValue}});
$('#timerContainer #timer').html(firstTimer.getTimeValues().toString());
firstTimer.addEventListener('secondsUpdated', function (e) {
    $('#timerContainer #timer').html(firstTimer.getTimeValues().toString());
});

firstTimer.addEventListener('secondTenthsUpdated', function (e) {
    //runs the progress bar updater every second
    progressBarUpdater();
});

firstTimer.addEventListener('targetAchieved', function (e) {
    //reset the currentTicker and update the progress bar
    currentTicker = 0;
    progressBarUpdater();
    launchSecTimer();
    //launch notification sound
    audioAlert();
});

$('#pauseButton').click(function () {
    firstTimer.pause();
});

$('#skipAheadButton').click(function () {
    firstTimer.pause();
    launchSecTimer();
});




//updates progress bar
function progressBarUpdater(){
    
    //updates currentTicker every second
    if (currentTicker < timerValue){
    currentTicker = currentTicker + 0.1;
    }
    
    var progBarPerc = (currentTicker/timerValue)*100;
    actualBar.style.width = progBarPerc + '%';

}

function audioAlert(){
var audio = new Audio('notification.wav');
audio.play();
    
}

