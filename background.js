// chrome.alarms.onAlarm.addListener(function( alarm ) {
//     console.log("Got an alarm!", alarm);
// });

var facts = ['The average person could\'ve typed 2400 words in the hour you wasted',
'Stop wasting time, you could\'ve read 13,500 words in that last hour',
'You could\'ve burned at least 210 calories by walking in the last hour, lazy bum',
'Disgraceful, you could\'ve made 12 bowls of instant ramen in the last hour',
'You could\'ve blown up 60 balloons in the time you wasted, but at least you\'re still a clown',
'You could\'ve made 20 origami cranes in the hour you spent doing nothing, but I guess you don\'t need one since your brain cells have already flown away',
'You could\'ve spent the last hour making 20 cups of coffee in a keurig, but I guess all that caffienation still wouldn\'t fixed your procrastination issues'
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

chrome.alarms.onAlarm.addListener(function(alarm) {
    
    alert(facts[getRandomInt(6)]);
    //alert('Beep')


    // chrome.webRequest.onBeforeRequest.addListener(
    //     function(details) { return {cancel: true}; },
    //     { urls: ["*://*.google.com/*"] },
    //     ["blocking"]
    //   );
  });




