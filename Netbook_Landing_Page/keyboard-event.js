var t=document.querySelector("#ide");
// t.addEventListener("keydown",fun);
// t.addEventListener("keyup",fun);//***
t.addEventListener("keypress",fun);

function fun(event){
    // console.log(event);
    // console.log(`event is :${event.type}`);
    console.log(event.target.value);
}