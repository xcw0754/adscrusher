var div = [
    [
        "http://blog.csdn.net/.*",
        [
            // 指定id
            [
                "homepageArticles",
                "layerd",
                "yd_a_d_feed_5",
                "rasss",
                "com-quick-QRcode"
            ],
            // 指定class的div
            [
                "recommend_list",
                "pulllog-box"
            ],
            // 指定class设置display=none
            [],
            // 隐藏所有iframe
            1
        ]
    ]
];

var regExpMatch = function(url, pattern) {
    try {
        return new RegExp(pattern).test(url); 
    } catch(ex) {
        return false; 
    }
}

var updateHandle = function(tabId, changeInfo, tab) {
    // if(changeInfo.status!='complete') return;
    for(var key in div) {
        if(regExpMatch(tab.url, div[key][0])) {
            chrome.tabs.sendMessage(
                tab.id, 
                div[key][1], 
                function(response) {}
            );
        }
    }
}

chrome.tabs.onUpdated.addListener(updateHandle)
