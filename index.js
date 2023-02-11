
var randomNumber1=Math.random()*6;
var randomNumber2=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
randomNumber2=Math.floor(randomNumber2)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

//if player1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Player1 Wins!";
}

//if player2 wins
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerText="Player2 Wins!";

}
//if it's a draw
else{
    document.querySelector("h1").innerText="Draw!";

}