var sas=document.createElement("li");

// to create classname
sas.className="list";
// to create id
sas.id="01";

// add child using append child and another way using innerText, if use innertext as second time to add another child the second innertext is assigned for totally because innertext means that can take whole innertext 
tnode=document.createTextNode("hello");
sas.appendChild(tnode);


sas.innerHTML="<h1>sivan</h1>"
// console.log(sas)


var link=document.createElement("a");
// create i tag inside in a tag
link.innerHTML="<i>many</i>";
//appendchild p tag inside a tag 
link.appendChild(document.createElement("p"));



// appendchild a tag(link) inside li tag(sas)
sas.appendChild(link);


var unli=document.querySelector(".collection").appendChild(sas);
console.log(unli);



