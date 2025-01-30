var randNum=Math.floor(Math.random()*6)+1;

var randimg = "dice" + randNum +".png";

var  randsource= "images/" + randimg;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", randsource);

var randNum2=Math.floor(Math.random()*6)+1;

var randimg2 = "dice" + randNum2 +".png";

var  randsource2= "images/" + randimg2;

document.querySelectorAll("img")[1].setAttribute("src", randsource2);

if(randNum>randNum2){
    document.querySelector("h1").innerHTML="🚩Player 1 Win!";
}else if (randNum<randNum2){
    document.querySelector("h1").innerHTML="Player 2 Win!🚩";
}else {
    document.querySelector("h1").innerHTML="It's a Draw!";
}
