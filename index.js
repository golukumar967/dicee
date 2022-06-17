var randomnNumber1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","dice"+randomnNumber1+".png");
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png");
if(randomnNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins🚩";
}
else if(randomnNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else{
    document.querySelector("h1").innerHTML="Match drawn 🤷‍♂️";
}