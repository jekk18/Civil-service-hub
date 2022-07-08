$('.main-banner').slick({
  infinite: true,
  fade: true,
  prevArrow:false,
  nextArrow:false,
  autoplay:true,
  autoplaySpeed:4000
});

$.js = function (el) {
  return $('[data-js=' + el + ']')
};

function carousel() {
$.js('timeline-carousel').slick({
  infinite: false,
  prevArrow: false,
  nextArrow: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
}
carousel();
 
 

$(".name-box span").click(function(){
    $(".person-box").toggleClass("height-active");
  });

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });

  $('.h-circle').click(function(){
    $(this).toggleClass('block');
  });
  $('.right-t').click(function(){
    $(this).toggleClass('block');
  });
  $('.click-heart').click(function(){
    $(this).toggleClass('block');
  });
  $('.slider-click-h').click(function(){
    $(this).toggleClass('block');
  });





 
