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
  $('.pagination li').click(function(){
    $(this).addClass('pagintaion-active').siblings().removeClass('pagintaion-active');
  });
  $('.favourite-click-box').click(function(){
    $(this).toggleClass('active-backgorund');
    // $(this).children('.left-heart').toggleClass('favourite-block');
  });


  $('.register-btn').click(function(){
    $('.offers-register').addClass('show');
  });

{
  const input  = document.getElementById('upload');
  const text = document.getElementById('text');
  const btn = document.getElementById('uploadd-btn');
  const labelUp = document.getElementById('v-1');

  input.addEventListener('change', function(){
    const path = input.value.split("\\");
    const filename = path[path.length - 1];
    text.innerText = filename ? filename : "Browse file";
    labelUp.classList.add('v-uploaded');
  });
}
 
