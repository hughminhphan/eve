document.getElementById('analyzeBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: analyzePage
    });
  });
});

function analyzePage() {
  alert('EVE is analyzing this page for eco-friendly content!');
  // Additional analysis logic will go here
}
