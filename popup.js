document.getElementById("googleSearch").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
      chrome.tabs.create({ url: googleSearchUrl });
    }
  });
  
  document.getElementById("mdnSearch").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
      const mdnSearchUrl = `https://developer.mozilla.org/fr/Search?q=${encodeURIComponent(
        query
      )}`;
      chrome.tabs.create({ url: mdnSearchUrl });
    }
  });
  
  document.getElementById("youtubeSearch").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
      const youtubeSearchUrl = `https://www.youtube.com/search?q=${encodeURIComponent(
        query
      )}`;
      chrome.tabs.create({ url: youtubeSearchUrl });
    }
  });
  
document.getElementById("chatGptSearch").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        const chatGptSearchUrl = `https://chat.openai.com/?q=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: chatGptSearchUrl });
    }
});

document.getElementById("translate").addEventListener("click", function () {
    const query = document.getElementById("searchBox").value;
    if (query) {
        const translateSearchUrl = `https://translate.google.com/?hl=fr&sl=auto&tl=fr&text=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: translateSearchUrl });
    }
});