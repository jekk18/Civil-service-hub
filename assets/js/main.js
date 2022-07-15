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
    $(".login-box").toggleClass("shadow-effect");
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

  $('.fav-click-box-2').click(function(){
    $(this).parents('.favourite-click-box-2').toggleClass('active-bg-2');
  });

  $('.register-btn').click(function(){
    $('.offers-register').addClass('show');
  });

//  pop boxes

// log in
$(".log-in-title h3").click(function(){
  $('.pop-box').addClass('active-pop-box');
  $('.login-pop-box').addClass('active-login-pop');
});
// log in
// register
$(".log-in-form span a").click(function(){
  $('.register-pop-box').addClass('active-register-box');
  $('.login-pop-box').removeClass('active-login-pop');
});
$(".register-btn-box h2 span").click(function(){
  $('.register-pop-box').removeClass('active-register-box');
  $('.login-pop-box').addClass('active-login-pop');
});
// register
//forgot pas
$(".forgot-pas h3").click(function(){
  $('.forgot-pas-box').addClass('active-forgot-password');
  $('.login-pop-box').removeClass('active-login-pop');
});
// forgot pas
//  change password
$(".r-r-info h4").click(function(){
  $('.pop-box').addClass('active-pop-box');
  $('.change-password-pop').addClass('active-change-password');
});
$(".close-btn").click(function(){
  $(this).parents('.pop-box').removeClass('active-pop-box');
  $(this).parents('.change-password-pop').removeClass('active-change-password');
  $(this).parents('.login-pop-box').removeClass('active-login-pop');
  $('.forgot-pas-box').removeClass('active-forgot-password');
  $('.register-pop-box').removeClass('active-register-box');
});
//  change password


// pop boxes

  // $(document).ready(function() {
  //   var oldVal;
  //   var newVal;
  //   $(".p-input-item input").click(function() {
  //     oldVal = $(this).val();
  //     console.log(oldVal);
      
  //   });
  //   $(".p-input-item input").keyup(function() {
  //     newVal = $(this).val();
  //     console.log(newVal);
  //     if(oldVal === newVal){
  //       console.log('yes')
  //     }else{
  //       console.log('no')
  //     }
  //   });
     
  // })






















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
 
 
