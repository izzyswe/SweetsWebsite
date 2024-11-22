function slideRight(){
  var reveals = document.querySelectorAll(".slide-right");
  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }else{
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", slideRight);

//slide down
function slideDown(){
  var reveals = document.querySelectorAll(".slide-down");
  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }else{
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", slideDown);
