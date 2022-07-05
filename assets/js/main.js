$('.main-banner').slick({
  nextArrow: false,
  prevArrow: false,
  // infinite: true,
  prevArrow:false,
  nextArrow:false,
  dots: false,
  autoplay:true,
  autoplaySpeed:4000
});

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