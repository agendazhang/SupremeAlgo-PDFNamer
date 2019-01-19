console.log('background running');
//
// chrome.pageAction.onClicked.addListener(clickme);
//


chrome.runtime.onInstalled.addListener(function() {
   // Replace all rules ...
   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
     // With a new rule ...
     chrome.declarativeContent.onPageChanged.addRules([
       {
         // That fires when a page's URL contains a 'g' ...
         conditions: [
           new chrome.declarativeContent.PageStateMatcher({
             pageUrl: { urlContains: '.pdf' },
           })
         ],
         // And shows the extension's page action.
         actions: [ new chrome.declarativeContent.ShowPageAction() ]
       }
     ]);
   });
 });

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.call == "getPrevTitle") {
        chrome.history.getVisits({
                url: message.url
            },
            function (arrayVisitItems) {
                var currPageTime; // track from visited time of pdf
                for (var i = arrayVisitItems.length-1; i >= 0; i--) {
                    var visitItem = arrayVisitItems[i];
                    if (visitItem.transition == "link") { // visit must be from another link
                        currPageTime = visitItem.visitTime;
                        break;
                    }
                }

                // get last 10 visited pages, check if referrer matches url
                chrome.history.search({
                        text: "",
                        endTime: currPageTime,
                        maxResults: 10
                    },
                    function (arrayHistoryItems) {
                        var prevDomain = document.referrer;
                        for (var i = 0; i < arrayHistoryItems.length; i++) {
                            var historyItem = arrayHistoryItems[i];
                            if (historyItem.url.search(prevDomain) == 0) {
                                sendResponse(historyItem.title);
                            }
                        }
                    })
            });
    }
    return true; // very important for asynchronous requests
});
