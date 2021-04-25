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