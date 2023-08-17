// Example of using the Fetch API to get RSS feed data

// RSS_URLS = ['https://news.ycombinator.com/rss']

// for (var url in RSS_URLS) {
// fetch(url)
//   .then(response => response.text())
//   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//   .then(data => console.log(data))
//   .catch(error => console.error('Error fetching RSS data:', error));
// }

// // Parse the RSS data (implement this function)
// function parseRssData(data) {
//     console.log(data);
//   // Implement your RSS parsing logic here
// }

// popup.js
document.getElementById('fetchButton').addEventListener('click', async () => {
  // Send a message to the content script to fetch the RSS feed
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
  browser.tabs.sendMessage(tab.id, { action: 'fetchRss', url: 'https://news.ycombinator.com/rss' });
});
