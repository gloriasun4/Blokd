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
        var a = document.getElementById('btn1');
        a.addEventListener('click',alarmClock.onHandler);


        // var a = document.getElementById('alarmOn');
        // a.addEventListener('click',  alarmClock.onHandler );
        // var a = document.getElementById('alarmOff');
        // a.addEventListener('click',  alarmClock.offHandler );
    }
};

// document.addEventListener('DOMContentLoaded', function () {
// alarmClock.setup();
// });


// document.addEventListener('DOMContentLoaded',function(){
//     document.querySelector('button').addEventListener('click',onclick,false)

//     function onclick(){
//         chrome.alarms.create(
//             "timer", {periodInMinutes: 1}
//         )
        
        
//         //window.setTimeout(sendAfterTimeout,3000)
//         //sendAfterTimeout()
//         //alertScreenTime()
//     }

//     function sendAfterTimeout(){
//         chrome.tabs.query({currentWindow: true, active: true},function(tabs){
//             chrome.tabs.sendMessage(tabs[0].id,'hi')
//         })
//     }

//     function alertScreenTime(){
//         //const screenTime = document.querySelector('h1')
//         //screenTime.textContent = 'this is your screentime'

//     }
// })