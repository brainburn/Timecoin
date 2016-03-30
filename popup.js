function sendTabMessage(message){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function(response) {});
    });
}

$(function() {
    $('#b_poop').click(function(){
        var ys = parseFloat($('#yearly_salary').val());
        var hpw = parseFloat($('#hours_per_week').val());
        var dph = ys/(hpw*52);


        sendTabMessage({
            "dph":dph
        });
    });
});