// Background script to send commands to pages

chrome.commands.onCommand.addListener(function (command) {
    console.log('Command :', command);

    // sends command to current page
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{command: command});  
    });
});
