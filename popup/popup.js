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


// document.getElementById("stop-popup").addEventListener("click", () => {
//     fetch('https://raw.githubusercontent.com/StevenBlack/hosts/master/data/StevenBlack/hosts')
//         .then(response => {
//             return response.text();
//         })
//         .then(data => {
//             const lines = data.split('\n'); // Split the text into lines
//             const hosts = {};

//             lines.forEach(line => {
//                 // Ignore comment lines and empty lines
//                 if (!line.startsWith('#') && line.trim() !== '') {
//                     const parts = line.trim().split(/\s+/); // Split the line by whitespace
//                     const ipAddress = parts.shift(); // Extract the IP address
//                     parts.forEach(hostname => {
//                         // Add the hostname to the list of hosts associated with the IP address
//                         hosts[hostname] = ipAddress;
//                     });
//                 }
//             });

//             // Convert the object to JSON and set it as the innerHTML
//             document.getElementById("result").innerHTML = JSON.stringify(hosts, null, 2);
//         })
//         .catch(error => {
//             console.error('There was a problem with your fetch operation:', error);
//         });
// });
