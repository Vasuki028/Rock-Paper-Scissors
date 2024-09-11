let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".image");

const msg=document.querySelector(".message");

let scoreofuser=document.querySelector("#user-score");
let scoreofcomp=document.querySelector("#comp-score");

const drawgame=()=>{
console.log("the game is a draw");
msg.innerText="the game is a draw";
msg.style.backgroundColor="#081b31";
}

showwinner=(win,userchoice,gamechoice)=>{
if(win){
    msg.innerText=`you win! your ${userchoice} beats the ${gamechoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    scoreofuser.innerText=userScore;
}
else{
    msg.innerText=`you lose! ${gamechoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
    compScore++;
    scoreofcomp.innerText=compScore;
}
}

const GameChoice=()=>{
    let random=["rock","paper","scissors"];
    let randomindex=Math.floor(Math.random()*3);
    return random[randomindex];
}




const playGame=(userchoice)=>{
console.log("user choice =",userchoice);
let gamechoice = GameChoice();
console.log("computer's choice" ,gamechoice);
let win=true;
if(userchoice===gamechoice){
    drawgame();
}
else{
if(userchoice==="rock"){
    //in that case , the computer has an option to choose paper, or scissors , if rock is chosen, then it will become a draw
    win=gamechoice==="paper"?false:true;
}
else if(userchoice="paper"){
    //available options : rock or scissors
    win=gamechoice==="rock"?true:false;
}
else{
    //available options : rock or paper
    win=gamechoice==="paper"?true:false;
}
showwinner(win,userchoice,gamechoice);
}
};



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoiceid=choice.getAttribute("id");
        console.log("choice was clicked!",userchoiceid);
        playGame(userchoiceid);
    });
});