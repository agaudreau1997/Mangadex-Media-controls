// Content script to control Mangadex pages

// TODO: make this hotload when you navigate to a chapter page instead of only on refresh

console.log("mangadex media controls script loaded");

setTimeout(()=> {
    const prevButton = document.querySelectorAll("[data-v-576d969b][data-v-6b3fd699]")[0];
    const nextButton = document.querySelectorAll("[data-v-576d969b][data-v-6b3fd699]")[1];

    var clickConfig = {
        bubbles: true,
        cancelable: false,
        view: window
    };
    
    var click = new MouseEvent('click', clickConfig);

    chrome.runtime.onMessage.addListener((request) => {
        console.log(request.command , "page");
    
        switch (request.command) {
            case "prev":
                prevButton.dispatchEvent(click);
                break;
    
            case "next":
                nextButton.dispatchEvent(click);
                break;
        }
    });
}, 2000)
