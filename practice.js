for(let num=0;num<=100;num++) {
    if(num%2!==0){ //===
        console.log(num);
    }
}

//game
let gnum=25;
let unum=prompt("Guess: ");
while(unum!=gnum) {
    unum=prompt("U entered wrong number, enter again");   
}
console.log("Congrats");