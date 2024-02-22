console.dir(window.document.body);
console.dir(window.document.body);

console.log(document.body.childNodes[1]);
document.body.style.background="green";
document.body.childNodes[3].innerText="hello";

//DOM Manipulation

//htmlid="header";
//let h1=document.getElementbyId("header");
//styles=#id

//html class="class1";
//let h2=document.getElementsByClass("class1");
//returns an HTML Collection-array
//styles=.class

//non existing id  gives null
//non existing class gives empty HTML Collection

//let paras=document.getElementByTagName("p");

//query selector
//let elements=document.querySelector("#.p");
//returns only the first found element

//let elements=document.querySelectorAll("p");
//returns node list

//properties-get and set
//firstElem.tagName
//elem.innerText-its text as well as its childrens'
//.innerHTML
//.textContent-works even for hidden elements
//html style="visibility:hidden"

//firstChild, lastChild
//text nodes
//comment nodes
//element nodes
//document.querySelector("div").children;
//.children[0],[1],[2].....


//getAttribute(attr);
//setAttribute(attr,value);
//node.style

//let el=document.createElement("button");
//node.append(el)
//node.prepend(el)
//node.before(el)
//node.after(el)
//node.remove()
//appendChild()
//removeChild()
//.classList