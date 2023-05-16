var a=''

async function cquery(){
    return await chrome.tabs.query({index:parseInt(a)})
}


    


chrome.runtime.onMessage.addListener( async function(request, sender, sendResponse){
    if(request.greeting==="Ctrl+n"){
        
        a+=request.keydown
        
    }

    if(request.greeting==="eCtrl+n"){
    
    var e=await chrome.tabs.query({});
    
        try{
    var aa=parseInt(a)
    a=''
    } catch{ var aa=0}
   
    if (aa>0){
    chrome.tabs.update(e[aa-1]['id'], {active:true});
        }
    if (aa<0){
    chrome.tabs.update(e[e.length+aa]['id'], {active:true});
    }
        
    
        
    
}
});

// next make it so that if you hold down a number it doesnt add it to the list
// make it work on google docs*, search page when you press ctrl+t, tabs for browser settings, and files
// if you open a hanime tab auto clear it from history and open in an incog window
// add a way to turn on and off features


