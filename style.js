"use strict";

let guess=document.querySelector(".guess");
let check=document.querySelector(".check");
let again=document.querySelector(".again");
let score=document.querySelector(".score");
let highscore=document.querySelector(".highscore");
let images=document.querySelector(".images");
let image=document.querySelector(".images img");

let curentscore=10;
let highs=0;

let showMesage=function(message){
    document.querySelector(".message").textContent=message;
}
let number=Math.trunc(Math.random()*100);
again.addEventListener("click",function(){
    images.style.display="none";
    document.querySelector(".message").style.color="white";
    showMesage("start guessing...");
    document.querySelector(".number").textContent="?";
    check.disabled=false;
    number=Math.trunc(Math.random()*100);
    score.textContent=`score ${curentscore=10}`;
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector(".number").style.width="70px";
    guess.value="";
})

check.addEventListener("click",function(){
    if(guess.value===""){
        showMesage("no number!");
    }
    else if(+guess.value===number){
        if(highs<curentscore)highs=curentscore;
        showMesage("bravo! correct number");
        highscore.textContent=`highscore:${highs}`;
        document.querySelector(".number").textContent=number;
        document.querySelector(".number").style.width="140px";
        check.disabled=true;
        document.querySelector("body").style.backgroundColor="#0a600a";
        images.style.display="block";
        image.setAttribute("src", "./images/image (1).jpeg");
        console.log(number,+guess.value,image,images);
    }
    else if(+guess.value!==number){
        if(curentscore===1){
            score.textContent=`score ${0}`;
            showMesage("you failed!");
            document.querySelector(".message").style.color="red";
            check.disabled=true;
            images.style.display="block";
            image.setAttribute("src", "./images/images(2).jpeg");
        }
        else{
            showMesage(guess.value<number ? "too low" : "too hight");
            score.textContent=`score ${--curentscore}`;
            console.log(number,+guess.value);
        }
        guess.value="";
    }
  
})