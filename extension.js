document.addEventListener("DOMContentLoaded", function () {
  const installButton = document.getElementById("installExtensionButton");
  if (installButton) {
    installButton.addEventListener("click", function () {
      // Send message to background script to open a new tab
      chrome.runtime.sendMessage({ action: "openNewTab" });
    });
  } else {
    console.error("Button with ID 'installExtensionButton' not found.");
  }
});
