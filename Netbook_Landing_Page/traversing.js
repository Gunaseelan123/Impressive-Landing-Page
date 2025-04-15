var cas=document.querySelector(".collection");//ul
var chil=document.querySelector("li:last-child");
console.log(chil);




// childnodes return the nodelist and it every content as node(space,comment)


// var kan=cas.childNodes;
// kan=cas.childNodes[0]
// kan=cas.childNodes[1].nodeName;
// kan=cas.childNodes[0].nodeType;

// console.log(kan);





// children return the HTML collection and it index can have a elements and it index dirctly take element


var raj=cas.children//HTML collection

// raj=cas.children[0];
// raj=cas.children[0].nodeName;
// raj=cas.children[1].nodeType;
// // children only return html collection and children index have a element
// raj=cas.children[0].children[0];





// raj.forEach(function(ele){
//     console.log(ele);
// })//not working method


// console.log(raj)





// var jam;
// jam=cas.firstElementChild;
// jam=cas.lastElementChild;
// jam=cas.childElementCount;
// jam=cas.parentElement.parentElement.parentElement;
// console.log(jam)




// // selecting previous sibiling

// var wap=chil.previousElementSibling.previousElementSibling.previousElementSibling;
// console.log(wap);



// // selecting next sibiling

// var hen=chil.nextElementSibling;
// console.log(hen);