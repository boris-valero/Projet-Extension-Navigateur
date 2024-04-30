
// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'blockUrls') {
        const urls = message.urls.filter(url => url.trim() !== '' && !url.startsWith('#'));
        
        chrome.scripting.executeScript({
            target: { tabId: sender.tab.id },
            function: blockPopups,
            args: [urls]
        });
    }
});

function blockPopups(urls) {
    const hostnameToBlock = urls.map(url => new URL(url).hostname);

    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'A') {
                    const hostname = new URL(node.href).hostname;
                    if (hostnameToBlock.includes(hostname)) {
                        node.addEventListener('click', (event) => {
                            event.preventDefault();
                            event.stopPropagation();
                        });
                    }
                }
            });
        });
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
}
