//operators
let a=5;
let b=2;

console.log("a=",a," b=",b);
console.log("a+b",a+b);
console.log("a-b",a-b);
console.log("a*b",a*b);
console.log("a/b",a/b);
console.log("a%b",a%b);
console.log("a**b",a**b);//5^2

//unary operators
//++, --
a++;
console.log(a);

//a++ and ++a
console.log(++a);
console.log(a++);

//assignment operators
a+=1;
a-=1;
a*=1;
a/=1;
a**=2;
a%=2;

//comparison operators
var com=a==b;
com=a!=b;
//true or false
//a=5
//b="5"
//a==b->true
//a===b->false
//>,<,<=,>=
//logical operators
//&&,||,!
//! false->true, true->false
//!(6==6)

//conditional statements
let color;
if(mode==="dark-mode") {
    color="black";
}

let age=25;
if(age>18) {
    console.log("VOTE!");
}

if(age<18) {
    console.log("DO NOT VOTE!");
}


//if-else
if(mode==="dark-mode") {
    color="black";
}
else {
    color="white";
}

let n=2;
if(n%2===0){
    console.log("yes");
}
else {
    console.log("no");
}

//else-if
if(age>18) {
    console.log("V");
}
else if(age<18) {
    console.log("N");
}
else{
    console.log("G");
}

if(mode==="dark") 
    console.log("Dark");

//ternary operator
var c=age>18 ? "adult":"not adult"; //compact if-else statement
//refer mdn docs 
//switch() {
//case '':
//case '':
//default;
//
//}

//alert
alert("");
//prompt
let name=prompt("Enter name");

//loops
//for(let i=0;i<=5;i++) {
//statments
//}
//initialization
//while(condition) {
//statements 
//updation   
//}
//initialization
//do {
//runs atleast once  
//updation    
//}while(condition);
//semicolon is IMPORTANT!!!!!!!
//for(let val of strVar/arrayVar) {
//iterates
//}
let str="Hafsa";
let size=0;
for(let i of str) {
    console.log(i);
    size++
}
console.log(size);

//for(let val in object) {
//iterates an object and returns keys    
//}
let student={
    name:"Hafsa",
    age:21,
    cgpa:9.16,
};
for(let key in student) {
    console.log(key,student[key]);
}