// Content script to control Mangadex pages

console.log("mangadex media controls script loaded");

chrome.runtime.onMessage.addListener((request) => {
    console.log(request.command , "page");

    switch (request.command) {
        case "prev":
            prevPage();
            break;

        case "next":
            nextPage();
            break;
    }
});

function prevPage() {
    const prevButton = document.querySelectorAll("[data-v-576d969b][data-v-6b3fd699]")[0];

    var clickConfig = {
        bubbles: true,
        cancelable: false,
        view: window
    };
    
    var click = new MouseEvent('click', clickConfig);

    console.log(prevButton);
    
    prevButton.dispatchEvent(click);
}

function nextPage() {
    const nextButton = document.querySelectorAll("[data-v-576d969b][data-v-6b3fd699]")[1];

    var clickConfig = {
        bubbles: true,
        cancelable: false,
        view: window
    };
    
    var click = new MouseEvent('click', clickConfig);

    console.log(nextButton);

    nextButton.dispatchEvent(click);
}
