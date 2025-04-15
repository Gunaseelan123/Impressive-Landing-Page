var hot=document.querySelectorAll(".design");


// hot[0].remove();
// hot[1].remove();
// console.log(hot);



// hot.forEach(function(ele,ind)
// {
//     if(ind<4){
//         ele.remove()
//     }
// }
// )









// class & attribute

var cle=document.querySelector("li:first-child");
// console.log(cle);
cle.className="design master"
var ln=cle.className;
// console.log(ln);
var p=cle.classList;
var j;
j=p.add("gunal");
j=p.remove("gunal")
// console.log(j)
p.replace("master","bigil")
// console.log(p);
j=p.contains("master");
// console.log(j)


// p.forEach(function(ele){
//     console.log(ele)
// })
// console.log(p);
