// content.js
const fetchRSS = async (url) => {
    try {
      const response = await axios.get(url);
      // Process the RSS feed data
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
    }
  };
  
  // Example: Fetch RSS feed when the extension is clicked
  browser.runtime.onMessage.addListener((message) => {
    if (message.action === 'fetchRss') {
      fetchRSS(message.url);
    }
  });
  