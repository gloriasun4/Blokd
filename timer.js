//retrieved from: https://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm

var timeoutID;
var totalTime;
 
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
    // wait 8 seconds before calling goInactive
    now = date()
    timeoutID = window.setTimeout(goInactive, 8000);
}
 
function resetTimer(e) {
    window.clearTimeout(timeoutID);
 
    goActive();
}
 
function goInactive() {
    // do something
    chrome.runtime.sendMessage({ userActive: false });
}
 
function goActive() {
    // do something
    

    chrome.runtime.sendMessage({ userActive: true });
    startTimer();
}

function checkURL(){

}