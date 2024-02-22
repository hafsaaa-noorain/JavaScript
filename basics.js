alert("Hi!");
//ctrl+k to clear
console.log("Hi"); 

name="Hafsa";
age=21;
gender="Female";
x=null;
y=undefined
console.log(y);
console.log(x);
console.log(name);

isFollow=true
console.log(isFollow);

//JS is a dynamically typed language -  no need to
//specify datatype, decided on runtime
//=assignment operator
//variable names are case-sensitive
//no space allowed in variable name, $_,123 allowed
//can start with a $ or _
//cannot start with number
//reserved words cannot be variable names
//follow camelCase
//var,let,const
//let and const have block scope
//ES6-ecmascript6-2015
//var-can be redeclared and updated, is a global scope variable
//let-cannot be redeclared, but can be updated, has block scope
//const-cannot be redeclared, updated, has a block scope, generally in block letters
let a;
console.log(a);
//undefined

//const b;
//console.log(b);
//gives error

var c;
console.log(c);

//datatypes in js
//primitive(7)->number, 
//non-primitive->objects
//typeof age
//boolean-true and false
//let x;
//x -> undefined
//typeof x - undefined
//let x=null
//x -> null
//typeof x - object
//let c=BigInt("123")
//c -> 123n
//typeof c
//BigInt
//let y=Symbol("hello");
//y -> Symbol(hello)
//typeof y
//symbol

//objects
//arrays and functions

//objects-collection of values
//object -> {
//    key:value pairs
//}

const student={
    name:"Hafsa",
    age:20,
    isPass:true
};

console.log(student);
typeof student;
//op-object

console.log(student["name"]);
//op-Hafsa

console.log(student.name);
//op-Hafsa

student["age"]=student["age"]+1;
console.log(student.age);
//op-21

//const object keys can be changed