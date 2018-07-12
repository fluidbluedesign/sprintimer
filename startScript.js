var hours = 01;
var minutes = 30;
var totalSeconds = 90;

var unpack;
var understand;
var synthesize;
var ideate;
var prototype;
var refine;

//getting hours and minutes and converting to seconds
function startEverything(){
    
    hours = document.getElementById('hoursInput').value;
    minutes = document.getElementById('minutesInput').value;
    console.log(hours);
    console.log(minutes);

    totalSeconds = ((parseInt(hours)*60) + parseInt(minutes))*60;
    console.log(totalSeconds);
//launching splitter function with total seconds
    splitterFunction(totalSeconds);


}

function splitterFunction(){

//splitting into each variable

    unpack = totalSeconds*0.1;
    understand = totalSeconds*0.2;
    synthesize = totalSeconds*0.1;
    ideate = totalSeconds*0.2;
    prototype = totalSeconds*0.2;
    refine = totalSeconds*0.2;

    localStorage.setItem("unpackValue", unpack);
    localStorage.setItem("understandValue", understand);
    localStorage.setItem("synthesizeValue", synthesize);
    localStorage.setItem("ideateValue", ideate);
    localStorage.setItem("prototypeValue", prototype);
    localStorage.setItem("refineValue", refine);

    window.location = "first.html";

}