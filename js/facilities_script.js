// 한빛관 관련 JS

var hb_bigImg = document.getElementById("hb_big");
var hb_smallImgs = document.getElementsByClassName("hb_small");

for(i = 0; i < hb_smallImgs.length; i++) {
    hb_smallImgs[i].addEventListener("click", hb_changeImg);
}

function hb_changeImg() {
    var hb_small = this.getAttribute("src");
    hb_bigImg.setAttribute("src", hb_small);
}

// 공6호관 관련 JS

var en_bigImg = document.getElementById("en_big");
var en_smallImgs = document.getElementsByClassName("en_small");

for(i = 0; i < en_smallImgs.length; i++) {
    en_smallImgs[i].addEventListener("click", en_changeImg);
}

function en_changeImg() {
    var en_small = this.getAttribute("src");
    en_bigImg.setAttribute("src", en_small);
}

// 60주년 관련 JS

var kw60_bigImg = document.getElementById("kw60_big");
var kw60_smallImgs = document.getElementsByClassName("kw60_small");

for(i = 0; i < kw60_smallImgs.length; i++) {
    kw60_smallImgs[i].addEventListener("click", kw60_changeImg);
}

function kw60_changeImg() {
    var kw60_small = this.getAttribute("src");
    kw60_bigImg.setAttribute("src", kw60_small);
}

