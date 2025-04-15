var m=document.querySelector(".sec").lastElementChild;
// console.log(m)

// m.addEventListener("click",oper);
// m.addEventListener("mousedown",oper);
// m.addEventListener("dblclick",oper);
// m.addEventListener("mouseup",oper);
// m.addEventListener("mouseenter",oper);
m.addEventListener("mouseleave",oper);


function oper(event)
{
    console.log(event);
    console.log(`event is : ${event.type}`);
}