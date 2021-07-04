const slidePage = document.querySelector(".slide-page");
const firstNextBtn = document.querySelector(".nextbtn");
const prevBtnSec = document.querySelector(".pr1");
const nextBtnSec = document.querySelector(".nxt1");
const prevBtnThird = document.querySelector(".pr2");
const nextBtnThird = document.querySelector(".nxt2");
const prevBtnFourth = document.querySelector(".pr3");
const submitBtn = document.querySelector(".submit");
const progrssTxt = document.querySelectorAll(".step p");
const progrssCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");

let max = 4;
let current =1;



firstNextBtn.addEventListener("click",function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current -1].classList.add("active");
    progrssTxt[current -1].classList.add("active");
    progrssCheck[current -1].classList.add("active");
    current += 1;

});
nextBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft = "-50%";
    bullet[current -1].classList.add("active");
    progrssTxt[current -1].classList.add("active");
    progrssCheck[current -1].classList.add("active");
    current += 1;

});
nextBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft = "-75%";
    bullet[current -1].classList.add("active");
    progrssTxt[current -1].classList.add("active");
    progrssCheck[current -1].classList.add("active");
    current += 1;

});
submitBtn.addEventListener("click",function(){
    
    bullet[current -1].classList.add("active");
    progrssTxt[current -1].classList.add("active");
    progrssCheck[current -1].classList.add("active");
    current += 1;
    setTimeout(function(){
        alert("Thanks");
        location.reload();

    },800);

});


prevBtnSec.addEventListener("click",function(){
    slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click",function(){
    slidePage.style.marginLeft = "-25%";
    
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click",function(){
    slidePage.style.marginLeft = "-50%";
    
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});