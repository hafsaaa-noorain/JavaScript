//fetch api provides an interface for fetching(sending/receiving) resources.
//uses request,response objects
//fetch() method is used to fetch a resource(data)
//let promise=fetch(url,[options]);

const URL="";
let promise=fetch(URL);
console.log(promise);

const getFacts=async()=>{
    let response=await fetch(URL);//response object
    console.log(response.status);
    let data=await response.json();
    console.log(data[0].text);
}

//AJAX->asynchrounous JS and XML
//JSON->JavaScript Object Notation->AJAJ/AJAX
//json()method->returns a second promise that resolves with
//result of parsing the resonse body text.(input is json, output is js object)

function getFacts() {
    fetch(URL).then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data[2].text);
    });
}

//request, response
//http verbs->refer mdn docs
//GET,POST,PATCH,DELETE
//resonse status code
//200,404,500->mdn docs
//mdn-mozilla developer network
//http response headers also contain details about 
//resonse such as content type,HTTP status code ec