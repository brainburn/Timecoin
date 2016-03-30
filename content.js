chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var priceMatcher = /\$\d+\.\d{1,2}/g
    var matcher;
    var textNode;

    var observer = new MutationObserver(function(mutations, observer){
        var treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
        while (textNode = treeWalker.nextNode()){
            if(textNode.parentElement.tagName !== 'SCRIPT'){
                while(matcher = priceMatcher.exec(textNode.nodeValue)){
                    price_in_hours = parseFloat(matcher[0].substring(1))/parseFloat(request.dph)
                    textNode.nodeValue = textNode.nodeValue.replace(matcher[0], price_in_hours.toFixed(2).toString() + " Hours");
                }
            }
        }
    })

    observer.observe(document, {
        subtree: true,
        attributes: true
    });
    
    return true;
});