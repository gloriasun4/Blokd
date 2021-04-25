// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  //TODO If count down reaches 5 minutes, change color to yellow
  if (distance < 5) {
    //document.getElementById("demo").
  }
  //TODO If count down reaches 1 minutes, change color to red
  if (distance < 1) {

  }
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Time's up!";
  }
}, 1000);

//TODO add random meme generation


var alarmClock = {

    onHandler : function(e) {
        chrome.alarms.create("myAlarm", {delayInMinutes: 0.1, periodInMinutes: 0.2} );
                window.close();
    },

    offHandler : function(e) {
        chrome.alarms.clear("myAlarm");
                window.close();
    },

    setup: function() {
        // var a = document.getElementById('btn1');
        // a.addEventListener('click',alarmClock.onHandler);
        //chrome.tabs.onUpdated.addListener(alarmClock.onHandler);
        alarmClock.onHandler('click');

        // var a = document.getElementById('alarmOn');
        // a.addEventListener('click',  alarmClock.onHandler );
        // var a = document.getElementById('alarmOff');
        // a.addEventListener('click',  alarmClock.offHandler );
    }
};

document.addEventListener('DOMContentLoaded', function () {
alarmClock.setup();
});


document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').addEventListener('click',onclick,false)

    function onclick(){
        chrome.alarms.create(
            "timer", {periodInMinutes: 1}
        )
        
        
        //window.setTimeout(sendAfterTimeout,3000)
        //sendAfterTimeout()
        //alertScreenTime()
    }

    function sendAfterTimeout(){
        chrome.tabs.query({currentWindow: true, active: true},function(tabs){
            chrome.tabs.sendMessage(tabs[0].id,'hi')
        })
    }

    function alertScreenTime(){
        //const screenTime = document.querySelector('h1')
        //screenTime.textContent = 'this is your screentime'

    }
})