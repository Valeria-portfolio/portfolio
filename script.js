let bgState = 0;

document.getElementById("colorBtn").onclick = function () {
    const body = document.body;
    const btn = document.getElementById("colorBtn");

    body.classList.remove("red","blue","green");
    btn.classList.remove("red","blue","green");

    bgState++;

    if(bgState===1){
        body.classList.add("red");
        btn.classList.add("red");
    }
    else if(bgState===2){
        body.classList.add("blue");
        btn.classList.add("blue");
    }
    else if(bgState===3){
        body.classList.add("green");
        btn.classList.add("green");
    }
    else{
        bgState=0;
    }
};

/* СЛАЙДЕР */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i){
    slides.forEach(s=>s.classList.remove("active"));
    slides[i].classList.add("active");
}

document.querySelector(".next").onclick = function(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

document.querySelector(".prev").onclick = function(){
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};
