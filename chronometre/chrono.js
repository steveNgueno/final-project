const start_btn = document.getElementById('start-btn');
const sp = document.querySelectorAll('span');


let h = 0 , mn = 0, s = 0, ms = 0;
let t;

function chrono(){
    ms+=1;
    if(ms == 10){
        ms = 0;
        s +=1;
    }
    if(s == 60){
        s = 0;
        mn +=1;
    }
    if(mn == 60){
        mn =0;
        h +=1;
    }

    sp[0].innerHTML = h + " h";
    sp[1].innerHTML= mn + " min";
    sp[2].innerHTML= s + " s";
    sp[3].innerHTML= ms + " ms";
}

function start() {
    t = setInterval(chrono,100);
    start_btn.disabled = true;
}
 function stop(){
    clearInterval(t);
    start_btn.disabled = false;
 }
 
 function reset(){
    stop();
    mn=0 , h=0, s = 0 , ms= 0 ;

    sp[0].innerHTML = h + " h";
    sp[1].innerHTML= mn + " min";
    sp[2].innerHTML= s + " s";
    sp[3].innerHTML= ms + " ms";
 }
