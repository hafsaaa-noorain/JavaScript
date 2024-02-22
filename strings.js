let str="Hafsa";
//property
let size=str.length
let char=str[3];//f- 0 indexed
//template literals
let sen=`template literal`;
console.log(sen);
console.log(typeof sen);//string
let obj={
    item:'pen',
    price:10,
};

console.log("The cost of",obj.item," is ",obj.price," rupees ");
let output=`The cost of ${obj.item} is ${obj.price}`;
console.log(output);
//string interpolation
//to create strings by doing substitution of placeholders
//`string text ${expression} string text`

//escape cahracters
//"\n"<-next line
//"/t"<-tab space
//escape characters are counted as 1 character

//string methods - so many
//these return a new string and do not odify the existing one
//so store assign them again
//because strings are immutable
//str.toUpperCsae();
//str.toLowerCase();
//str.trim(); removes all white spaces in the beginning and end
//str.slice(start,end); end is non-inclusive
//str1.concat(str2);
//str.replace(searchVal,newVal);
//str.charAt(idx);
//refer mdn docs for all string methods

//Arrays
//same type of info in an array
//arr.length
//type of array
//gives object
//index->key
//value->value
//array indices
//arrays are mutable
//iterables-objects,strings,arrays
//array methods
//array.push()->push at end, more than one
//changes within the original array
//array.pop()->pop from end
//within original array
//array.toString()->comma seperated string
//returns a new string
//array.concat()->can take multiple arrays
//returns new array
//array.unshift()->add to start
//changes original array
//arr.shift()->delete from start and return
//changes original array
//arr.slice()
//exclusive of last index
//changes original array
//arr.splice(start,delCount,newElementsToAddthere)
//3rd is optional and DelCount can be 0
