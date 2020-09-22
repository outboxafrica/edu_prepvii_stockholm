/*--------------------------------------------------------
----------------------------------------------------------
 When user clicks on the dropdown button,
 toggle between hiding and showing the dropdown content
 ----------------------------------------------------------
 ---------------------------------------------------------*/
//Funtions to dispaly more movie content
function myFunction1() {
    document.getElementById("more1").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("more2").classList.toggle("show");
  }
  function myFunction3() {
    document.getElementById("more3").classList.toggle("show");
  }
  function myFunction4() {
    document.getElementById("more4").classList.toggle("show");
  }
  function myFunction5() {
    document.getElementById("more5").classList.toggle("show");
  }
  function myFunction6() {
    document.getElementById("more6").classList.toggle("show");
  }
  function myFunction7() {
    document.getElementById("more7").classList.toggle("show");
  }
  function myFunction8() {
    document.getElementById("more8").classList.toggle("show");
  }
  function myFunction9() {
    document.getElementById("more9").classList.toggle("show");
  }
  function myFunction10() {
    document.getElementById("more10").classList.toggle("show");
  }
  function myFunction11() {
    document.getElementById("more11").classList.toggle("show");
  }
  function myFunction12() {
    document.getElementById("more12").classList.toggle("show");
  }
  function myFunction13() {
    document.getElementById("more13").classList.toggle("show");
  }
  function myFunction14() {
    document.getElementById("more14").classList.toggle("show");
  }
  function myFunction15() {
    document.getElementById("more15").classList.toggle("show");
  }
  function myFunction16() {
    document.getElementById("more16").classList.toggle("show");
  }
  function myFunction17() {
    document.getElementById("more17").classList.toggle("show");
  }
  function myFunction18() {
    document.getElementById("more18").classList.toggle("show");
  }
  //Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches('.mdropbtn')) {
      var dropdowns = document.getElementsByClassName("more");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains(
          'show'
        )) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  /*--------------------------------
  ------------------------------------
  USER ON CLICKING ON A MENU ITEM
  -----------------------------------
  ---------------------------------*/
  const grid = document.querySelector(".grid");
  const btns = document.querySelectorAll(".tab-btn");
  const articles = document.querySelectorAll(".content");
  grid.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  
  /*-------------------------------------------------
  ------------------------SLIDER--------------------=
  ----------------------------------------------------*/
  var indexValue = 0;
  function slideShow() {
    setTimeout(slideShow, 2500);
    var x;
    const img = document.querySelectorAll(".slimg");
    for (x = 0; x < img.length; x++) {
      img[x].style.display = "none";
    }
    indexValue++;
    if (indexValue > img.length) { indexValue = 1 }
    img[indexValue - 1].style.display = "block";
  }
  slideShow();

  /*------------------------------------------------------------------------
  -----------------------LIKE BUTTON------------------------------------------
  -----------------------------------------------------------------------------*/
  function like1(){
      document.getElementById("lk1").src="images/thumbs-o-up.svg";
  }
  function like2(){
    document.getElementById("lk2").src="images/thumbs-o-up.svg";
}
function like3(){
    document.getElementById("lk3").src="images/thumbs-o-up.svg";
}
function like4(){
    document.getElementById("lk4").src="images/thumbs-o-up.svg";
}
function like5(){
    document.getElementById("lk5").src="images/thumbs-o-up.svg";
}
function like6(){
    document.getElementById("lk6").src="images/thumbs-o-up.svg";
}
function like7(){
    document.getElementById("lk7").src="images/thumbs-o-up.svg";
}
function like8(){
    document.getElementById("lk8").src="images/thumbs-o-up.svg";
}
function like9(){
    document.getElementById("lk9").src="images/thumbs-o-up.svg";
}
function like10(){
    document.getElementById("lk10").src="images/thumbs-o-up.svg";
}
function like11(){
    document.getElementById("lk11").src="images/thumbs-o-up.svg";
}
function like12(){
    document.getElementById("lk12").src="images/thumbs-o-up.svg";
}
function like13(){
    document.getElementById("lk13").src="images/thumbs-o-up.svg";
}
function like14(){
    document.getElementById("lk14").src="images/thumbs-o-up.svg";
}
function like15(){
    document.getElementById("lk15").src="images/thumbs-o-up.svg";
}
function like16(){
    document.getElementById("lk16").src="images/thumbs-o-up.svg";
}