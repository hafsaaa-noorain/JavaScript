const student={
    name:"Hafsa",
    marks:95.8,
    printMarks: function(){
        console.log("marks=",this.marks);
    },
    printMarks2 (){
        console.log("marks=",this.marks);
    }
};

const obj2={
    salary:50000,
};

obj2.__protype__=student;

//every object has by defaut an object named prototype
//evry object inherits from this prototype

//classes
// class MyClass {
//     constructor(){

//     }
//     myMethod() {

//     }
// }

// let myObj=new MyClass();

class MyCar {
    start() {
        console.log("start");
    }
    stop(){
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName=brand;
    }
}

let fortuner=new MyCar();
fortuner.start();
fortuner.stop();
fortuner.setBrand("fortuner");

// class Parent {

// } 

// class Child extends Parent {

// }

// if both parent and child have same methods, child's methods will be executed
//both properties and methods are inherited

//super keywords
// used to call constructo of its parent class to access the parents properties and methods
//super(args)
//super.parentMethod(args)

//error handling
//try {
    //nornal code
//}
//catch(error) {
    //console.log(error);
//}