//retrieved from: https://www.kirupa.com/html5/detecting_if_the_user_is_idle_or_inactive.htm

var timeoutID;
var totalTimeLeft;
var start;
 
function setup() {
    totalTimeLeft = 60000;
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false);
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);

    // chrome.tabs.onActivated.addListener(function(activeInfo){
    //     checkURL();
    // }) 
 
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
    checkURL()

    chrome.runtime.sendMessage({ userActive: true });
    startTimer();
}

function checkURL(){
    totalTimeLeft = totalTimeLeft - (getTime() - start);

    if(totalTimeLeft<=0){
        blockWebsite();
    }
    
}

function blockWebsite(){
    
        chrome.alarms.create("myAlarm", {delayInMinutes: 0.5, periodInMinutes: 0.5} ); // annoying alarm will go off every minute
                window.close();
}