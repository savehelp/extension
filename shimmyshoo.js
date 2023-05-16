var a=''

function sdjf(){

}




addEventListener('keydown', (e) => {
    if(e['ctrlKey'] && !(e['shiftKey']) && !(e['altKey']) && e['key']!=='Control'){
        a+=(e['key'])
        sdjf()
        console.log(e)
        chrome.runtime.sendMessage({greeting: "Ctrl+n",
                                    keydown: e['key']})
    }
   
});

addEventListener('keyup', (e) => {
    if(e['key']==='Control'){
        console.log(a)
        chrome.runtime.sendMessage({greeting: "eCtrl+n",
                                    keydown: e['key']})
        a=''
    }

});