function myFunc() {
    console.log("Welcome");
}
//function call-reduces redundancy
myFunc();
//NaN-not a number

//arrow functions, from modern js
const arrowSum=(a,b)=>{
    return a+b;
};

const printHello=()=>console.log();

//arr.forEach(callBackFunction)->value at each 
//special feature of js->functions can be passed as arguments
//forEach(val,idx,arrayitself)
//HIGHER ORDER FUNCTION, IMPORTANT!!!!
//HOF OR HOM-METHOD
//USE OTHER FUNC AS PARAMETER OR RETURN A FUNCTION
//FOR EACH IS A HOM

//array.map()-> returns a new array
//array.map(callback(val,idx,arrayitself))

//array.filter((val)=>{
//return {expression}
//})

//array.reduce((res,val)=>{
//return res+val
//})