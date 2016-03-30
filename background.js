function store(key, value){
    chrome.storage.sync.set({key: value}, function() {
        console.log(key + " : " + value);
    });
}

function handleEnabler(){
    console.log('Enabler engaged...')
    if(document.getElementById("enabler").checked){
        store('ENABLE', true);
    }else{
        store('ENABLE', false);
    }
}

$(function() {
    console.log("here...")
    chrome.storage.sync.get('ENABLE', function(result){
        if(result.ENABLE){
            document.getElementById("enabler").checked = true;
        }else{
            document.getElementById("enabler").checked = false;
        }
    });
    
    window.addEventListener("load", store('ENABLE', false));
    document.getElementById("enabler").addEventListener("click", handleEnabler);
});