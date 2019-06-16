
function time(a){    
    setTimeout(function (){
       console.log(a);
    },1000);
}

function ret(a,callback){
    callback(a);    
}
ret(6,time);



