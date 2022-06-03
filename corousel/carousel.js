// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel(); 

// })
$(".img_slider1 ").owlCarousel({
    autoplay:true,
    autoplayhoverpause:true,
    autoplaytimeout:100,
    items:3,
    nav:true,
    loop:true,
    responsive:{
        0:{
            items:0,
            dots:false
        },
      485:{
          items:1,
          dots:false
      },
      728:{
          items:1,
          dots:false
      },
      900:{
          items:2,
          dots:false
      },
      1240:{
          items:3,
          dots:true
      }
    }
});

$(".img_slider2 ").owlCarousel({
    autoplay:true,
    autoplayhoverpause:true,
    autoplaytimeout:100,
    items:3,
    nav:true,
    loop:true,
    responsive:{
        0:{
            items:0,
            dots:false
        },
      485:{
          items:1,
          dots:false
      },
      728:{
          items:1,
          dots:false
      },

      900:{
          items:1,
          dots:false
      },
      1000:{
          items:2,
        dots:true
      },
      1240:{
          items:2,
          dots:true
      }
    }
});