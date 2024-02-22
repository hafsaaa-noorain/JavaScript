//async await
//promise await
//callback hell

//setTimeout()
// function hello() {
//     console.log('hello');
// }

// setTimeout(hello,2000);//2s=2000ms
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('hello');
},4000);

console.log(3);
console.log(4);

//output
//1
//2
//3
//4
//hello

//callbacks
//passing a function as an argument
//setTimeout(function,time);

//call back hell
//nested call backs

//promises
// let promise=new Promise((resolve,reject)=>{

// });
//Promise is class

let promise=new Promise((resolve,reject)=>{
    resolve();
    reject();
});
//promise has 3 stages
//1.pending
//2.fullfill-resolve
//3.reject

//promise state and promise result

//.then() and.catch()
//promise.then((res)=>{

//});
//promise.catch((err)=>{

//});

//promise chain
function asyncFun1() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

function asyncFun1() {
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

console.log("Fetching datat1....");
asyncFunc1().then((res)=>{
    console.log(res);
    console.log("Fetching datat2....");
    asyncFunc2().then((res)=>{
    console.log(res);
    });
});

// console.log("Fetching datat2....");
// let p2=asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// });

// getData(1)
// .then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     return getData(3)
// }).them((res)=>{
//     console.log("success");
// })

//async await
//async-this function always returns a promise

await async function hello() {
    console.log("hello");
}
//await-pauses execution of its surrounding asunc function until the promise
//is settled
//can use await only with async

function api(){
    return new Promise((resole,reject)=> {
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api();
    await api();
}

//async await
//then and catch

//IIFE-Immediately Invoked Function Expression
//it is a function that is called immediately as soon as it is defined
//(function_definition)();
//refer mdn docs
//function definition
// (function () {
    //
// })();

//arrow function
// (()=>{
    //
// })();

//async function
// (async()={
    //
// })();