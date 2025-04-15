document.querySelector(".sec").lastElementChild.addEventListener("click",onclick);

var count=0;
function onclick(){
    count+=1;
    document.querySelector(".banner").firstElementChild.textContent=count;

    document.querySelector("main").classList.toggle("rest");
}






// var count=0;
// document.querySelector(".sec").lastElementChild.addEventListener("click",function(){
//     count+=1;
//     document.querySelector(".banner").firstElementChild.textContent=count;

//     document.querySelector("main").classList.toggle("rest");
// });













