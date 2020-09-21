var slideIndex = 1;
showSlides(slideIndex);

//next/previous control
function plusSlide(n) {
    showSlides(slideIndex +=n);
}

// thumbnail Image controls
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var dot = document.getElementsByClassName("dot");
    console.log(dot.length);
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n< 1) {slideIndex = slides.length;}

    for (i = 0;i<slides.length;i++) {
        slides[i].style.display = "none";
    }
    for (i = 0;i<dot.length;i++) {
        dot[i].className = dot[i].className.replace("active", "");
        console.log(i);
    }
    slides[slideIndex-1].style.display = "block";
   // dot[slideIndex-1].className += "active";
}