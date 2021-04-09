$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});
document.getElementById("regi").onclick = function () {
        location.href = "./regi/regi.html";
    };
	document.getElementById("log").onclick = function () {
        location.href = "./regi/regi.html";
    };
	document.getElementById("appoi").onclick = function () {
        location.href = "./appointment/appointment.html";
    };