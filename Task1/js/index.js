// video section 

$(document).ready(function(){
    $('.video-carousel').slick({
    slidesToShow: 2,
    centerMode: true,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:false
  
    });
  });
  

//   life in foody 
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows:true});
  