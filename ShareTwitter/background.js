chrome.browserAction.onClicked.addListener(function(tab){
	var posturl = 'http://twitter.com/intent/tweet?text=' +
		encodeURIComponent( ' ' + tab.title + ' ' + tab.url ) +
		'&source=ShareTwitter';
	window.open(posturl,null);
	void(0);
});
