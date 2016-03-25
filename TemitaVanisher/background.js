
// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
console.log("checkForValidUrl");
	if (tab.url.indexOf("www.nicovideo") >= 0 || tab.url.indexOf("youtube.com") >= 0) {
		// ... show the page action.
		chrome.pageAction.show(tabId);
	}
};
 
// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);


