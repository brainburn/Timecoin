
//^\d+(.\d{1,2})$

var priceMatcher = /\$\d+\.\d{1,2}/g
var matcher;

while(matcher = priceMatcher.exec(document.body.innerHTML)){
    console.log(matcher[0])
    document.body.innerHTML = document.body.innerHTML.replace(matcher[0], "POOP");
}
