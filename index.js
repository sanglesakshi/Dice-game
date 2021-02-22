
var player1=prompt("enter name of player1");
var player2=prompt("enter name of player2");
var randomNumber1 =Math.floor(Math.random()*6 + 1 );

var randomImageNo1="dice"+ randomNumber1 +".png" ;

var randomImageSource1="images/"+randomImageNo1 ;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSource1);

var randomNumber2 =Math.floor(Math.random()*6 + 1 );

var randomImageNo2="dice"+randomNumber2+".png" ;

var randomImageSource2="images/"+randomImageNo2 ;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="player1 wins!!" ;
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="player 2 wins !!" ;
}
else {
  document.querySelector("h1").innerHTML="Draw !!" ;
}
