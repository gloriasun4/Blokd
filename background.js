// chrome.alarms.onAlarm.addListener(function( alarm ) {
//     console.log("Got an alarm!", alarm);
// });

chrome.alarms.onAlarm.addListener(function(alarm) {
    alert("Beep");
  });