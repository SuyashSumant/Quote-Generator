console.log("Script is running..");
const quote=document.getElementById("quote");
const author=document.getElementById("author");
const api_url="https://api.quotable.io/random";
const l="https://www.instagram.com/?hl=en";

async function getquote(url){
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}
getquote(api_url);

function post(){
    
    window.open(l);
}