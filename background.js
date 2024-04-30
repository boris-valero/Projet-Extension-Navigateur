chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'blockUrls') {
        const urls = message.urls.filter(url => url.trim() !== '' && !url.startsWith('#'));
        chrome.webRequest.onBeforeRequest.addListener(
            (details) => {
                if (urls.includes(details.url)) {
                    return { cancel: true };
                }
            },
            { urls: urls },
            ["blocking"]
        );
    }
});
