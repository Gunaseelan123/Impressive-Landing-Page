tit=document.getElementById("para");

// change style

// tit.style.color="red";
// tit.style.padding="50px";
// tit.style.margin="50px";




// change content

// tit.innerText="Hello world";
// tit.innerHTML="<span>guys are you ready</span>";




// using classname it can return html collection and foreach are not used, if foreach can need to use convert to array and use foreach and 

// var das=document.getElementsByClassName("design")
// for(i=0;i<das.length;i++){
//     das[i].style.color="#ffff"
//     das[i].style.backgroundColor="blue"
// }
// var sad=das[0]
// console.log(sad)




// using Queryselectorall foreach prototype canbe directly used and it has return nodelist and it operations are same as array but it is not array 

var bas=document.querySelectorAll(".design");
bas.forEach(function(items,ind,par)
{
    items.style.color="#ffff"
    items.style.backgroundColor="red"
}
)

var dd=bas[1]
console.log(dd)




