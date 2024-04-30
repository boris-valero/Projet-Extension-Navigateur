// popup.js
document.getElementById("stop-popup").addEventListener("click", () => {
    fetch('https://raw.githubusercontent.com/StevenBlack/hosts/master/data/StevenBlack/hosts')
        .then(response => {
            return response.text();
        })
        .then(data => {
            chrome.runtime.sendMessage({ action: 'blockUrls', urls: data.split('\n') });
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
});

