$(document).ready(function()
  {

    $('.slider').slick({
       autoplay: true,
       autoplaySpeed: 5000,
       arrows: false,
       dots: true,
       fade: true,
       easing: 'easeInCubic',
       lazyLoad: 'ondemand',
       speed: 1000,
       pauseOnHover: false
    });

    $('.slider2').slick({        
      arrows: false,
      dots: true,
      infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 2       
  		
    });
  });