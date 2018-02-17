//scripts.js
$(function(){
  //this code will execute after the DOM is loaded
  var carouselList = $("#carousel ul");
      
  setInterval(changeSlides,3000);
  
  function changeSlides(){
    carouselList.animate({marginLeft:-500}, 500, moveFirstSlide);
  }
  
   function moveFirstSlide(){
   	var firstItem = carouselList.find("li:first");
   	var lastItem = carouselList.find("li:last");

   	lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
  };
});