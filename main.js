let btn=document.querySelector('#btn');

btn.addEventListener('click', value);

function value(a){
    a=document.querySelector('input').value;
    setTimeout(function (){
       return a;        
    },1000);
}

function ret(a,callback){
    callback(a);
}
ret(a,function(){
    console.log(a);
});
