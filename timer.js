//retrieved from: https://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm

var timeoutID;
var totalTimeLeft;
var start;
 
function setup() {
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);
 
    startTimer();
}
setup();
 
function startTimer() {
    // wait 2 seconds before calling goInactive
    start = getTime();
    timeoutID = window.setTimeout(goInactive, 2000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
 
    goActive();
}
 
function goInactive() {
    // do something
    chrome.runtime.sendMessage({ userActive: false });
    resetTimer();
}
 
function goActive() {
    // do something
    totalTimeLeft = totalTimeLeft - (start - getTime())

    if(totalTimeLeft<=0)
        blockWebsite();

    chrome.runtime.sendMessage({ userActive: true });
    startTimer();
}

function block(){

}