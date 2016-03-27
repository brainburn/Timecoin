
//^\d+(.\d{1,2})$

var priceMatcher = /\$\d+\.\d{1,2}/g
var matcher;

var textNode;

var observer = new MutationObserver(function(mutations, observer){
    var treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
    while (textNode = treeWalker.nextNode()){
        if(textNode.parentElement.tagName !== 'SCRIPT'){
            while(matcher = priceMatcher.exec(textNode.nodeValue)){
                console.log(matcher[0])
                textNode.nodeValue = textNode.nodeValue.replace(matcher[0], "POOP");
            }
        }
    }
})

observer.observe(document, {
  subtree: true,
  attributes: true
});