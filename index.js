// alert("Hello");
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.getElementsByTagName("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png");
document.getElementsByTagName("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Won,Congrats!!";
}
else if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Won,Congrats!!";
}
else
{
  document.querySelector("h1").innerHTML="It's a draw refresh again";
}
function myFunction(){
  location.reload();
}
