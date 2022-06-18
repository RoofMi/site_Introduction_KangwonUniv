var slides=document.querySelectorAll("#res_site_imgs>img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;

showSlides(current);
prev.onclick=prevSlide;
next.onclick=nextSlide;

function showSlides(n){
    for(var i=0; i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[n].style.display="block";
}

function prevSlide(){
    if(current>0)current-=1;
    else current = slides.length-1;
    showSlides(current);
}

function nextSlide(){
    if(current<slides.length-1)current+=1;
    else current = 0;
    showSlides(current);
}

var slides1=document.querySelectorAll("#res_site_imgs1>img");
var prev1 = document.getElementById("prev1");
var next1 = document.getElementById("next1");

var current1 = 0;

showSlides1(current1);
prev1.onclick=prevSlide1;
next1.onclick=nextSlide1;

function showSlides1(n){
    for(var i=0; i<slides1.length;i++){
        slides1[i].style.display="none";
    }
    slides1[n].style.display="block";
}

function prevSlide1(){
    if(current1>0)current1-=1;
    else current1 = slides1.length-1;
    showSlides1(current1);
}

function nextSlide1(){
    if(current1<slides1.length-1)current1+=1;
    else current1 = 0;
    showSlides1(current1);
}

var slides2=document.querySelectorAll("#res_site_imgs2>img");
var prev2 = document.getElementById("prev2");
var next2 = document.getElementById("next2");

var current2 = 0;

showSlides2(current2);
prev2.onclick=prevSlide2;
next2.onclick=nextSlide2;

function showSlides2(n){
    for(var i=0; i<slides2.length;i++){
        slides2[i].style.display="none";
    }
    slides2[n].style.display="block";
}

function prevSlide2(){
    if(current2>0)current2-=1;
    else current2 = slides2.length-1;
    showSlides2(current2);
}

function nextSlide2(){
    if(current2<slides2.length-1)current2+=1;
    else current2 = 0;
    showSlides2(current2);
}