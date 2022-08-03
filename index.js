 var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImages1 = "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImages1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImages2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImages2);



//if player one Wins
if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML="plyer 1 wins!" ;
}
else if(randomNumber2 > randomNumber1){
document.querySelector("h1").innerHTML="player 2 wins!";
}
else{
document.querySelector("h1").innerHTML="Draw!";
}
