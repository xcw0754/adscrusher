var styleTag = document.createElement("style");
var head = document.getElementsByTagName("head")[0];
head.appendChild(styleTag);
var sheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;


var removeElements = function(sth2remove, sender, sendResponse) {
    // remove id
    var ids = sth2remove[0];
    for(var key in ids) {
        var ele = document.getElementById(ids[key]);
        if(ele!=undefined) ele.remove();
    }

    // remove class
    var classes = sth2remove[1];
    for(var i=0; i<classes.length; i++) {
        var eles = document.querySelectorAll("div."+classes[i]);
        if(eles==undefined) continue;
        for(var i=0; i<eles.length; i++) {
            eles[i].remove();
        }
    }

    // class display: none
    classes = sth2remove[2];
    for(var i=0; i<classes.length; i++) {
        if(sheet.insertRule)
            sheet.insertRule(classes[i]+"{display:none !important;}", 0);
        else
            sheet.addRule(classes[i], "display:none !important;", 0);
    }

    // iframe display: none
    if(sth2remove[3]) {
        if(sheet.insertRule)
            sheet.insertRule("iframe" + "{display:none !important;}", 0);
        else
            sheet.addRule("iframe", "display:none !important;", 0);
    }
};


chrome.extension.onMessage.addListener(removeElements);
