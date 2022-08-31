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
  infinite: true,
  prevArrow: false,
  nextArrow: false,
  speed: 1000,
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



$(".name-box").click(function(){
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
//   $('.click-heart').click(function(){
//     $(this).toggleClass('block');
//   });
  $('.slider-click-h').click(function(){
    $(this).toggleClass('block');
  });
  $('.pagination li').click(function(){
    $(this).addClass('pagintaion-active').siblings().removeClass('pagintaion-active');
  });
  $('.favourite-click-box').click(function(){
    $(this).toggleClass('active-backgorund');
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


// profile info change

// $(document).ready(function() {
//   for(var i = 0; i<= $(".p-input-item input").length; i++){
//     var inp = $(".p-input-item");
//     $(inp[i]).children('input').val("item " + i);
//   }
// })



//   $(document).ready(function() {
//     var oldVal;
//     var newVal;
//     $(".p-input-item input").click(function() {
//       oldVal = $(this).val();
//       console.log(oldVal);
//     });
//     $(".p-input-item input").keyup(function() {
//       newVal = $(this).val();
//       console.log(newVal);
//       if(oldVal !== newVal){
//         $('.person-info-save').addClass('btn-active')
//       }else{
//         $('.person-info-save').removeClass('btn-active')
//       }
//     });

//   })

// profile info change



$(window).scroll(function(){
  var headSticky = $('.b-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 60) {
    headSticky.addClass('header-shadow');
    $('.t-header').addClass('shadow-2');
  }else {
    headSticky.removeClass('header-shadow');
    $('.t-header').removeClass('shadow-2');
  }
});





$(document).ready(function(){
  if(!$('.log-in-title').children().length > 0){
    $('.header-socials').addClass('mar-rigth-ka');
  }
});


$(".unauthbutt").click(function(){
  event.preventDefault();
$('.pop-box').addClass('active-pop-box');
$('.alert-pop').addClass('active-login-pop');
});

$("#loginpopup").click(function(){
$('.login-pop-box').addClass('active-login-pop');
$('.alert-pop').removeClass('active-login-pop');
});
$("#registerpopup").click(function(){
$('.register-pop-box').addClass('active-login-pop');
$('.alert-pop').removeClass('active-login-pop');
});

$('.burger-icon').click(function(){
  $(this).toggleClass('active-burger');
  $('.logo-box').toggleClass('opacity-logo');
  $('.burger-box').toggleClass('burger-left');
  $('.t-header').removeClass('shadow-2');
})

$('.b-pesron-sub-box li').click(function() {
  $('.b-pesron-sub-box').toggleClass('active-height');
});

$('.click-arrow').click(function() {
   $(this).parents('.b-li').toggleClass('active-submenu-ar').siblings().removeClass('active-submenu-ar');
})












if($(window).width() >= 992){


  ScrollReveal().reveal('.logo-box .logo-title', {
    delay: 400,
    duration: 600,
    distance: '400px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.logo-box .logo-img', {
    delay: 300,
    duration: 800,
    distance: '400px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.div-left-side', {
    delay: 400,
    duration: 800,
    distance: '400px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.b-header', {
    delay: 800,
    duration: 1300,
    reset: false,
  });
  ScrollReveal().reveal('.slider-box', {
    delay: 400,
    duration: 1200,
    reset: false,
  });
  ScrollReveal().reveal('.banner-text-side', {
    delay: 400,
    duration: 800,
    distance: '300px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.important-title', {
    delay: 400,
    duration: 600,
    distance: '800px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.about-box .text', {
    delay: 400,
    duration: 700,
    distance: '800px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.about-box .read-more', {
    delay: 400,
    duration: 800,
    reset: false,
    distance: '100px',
    origin: 'bottom',
  });
  ScrollReveal().reveal('.counter-items .item:first-child', {
    delay: 600,
    duration: 400,
    distance: '200px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.counter-items .item:nth-child(2)', {
    delay: 600,
    duration: 600,
    distance: '200px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.counter-items .item:nth-child(3)', {
    delay: 600,
    duration: 800,
    distance: '200px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.counter-items .item:nth-child(4)', {
    delay: 600,
    duration: 1000,
    distance: '200px',
    origin: 'bottom',
    reset: false,
  });
 
  ScrollReveal().reveal('.timeline-carousel', {
    delay: 600,
    duration: 1800,
    reset: false,
  });
  ScrollReveal().reveal('.see-link', {
    delay: 600,
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.see-all', {
    delay: 600,
    duration: 1000,
    distance: '50px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.relative', {
    delay: 600,
    duration: 1000,
    distance: '1200px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.time', {
    delay: 600,
    duration: 1400,
  });
  ScrollReveal().reveal('.text-box', {
    delay: 600,
    duration: 1500,
    distance: '200px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.right-news .news-item:first-child', {
    delay: 600,
    duration: 1000,
    distance: '1200px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.right-news .news-item:last-child', {
    delay: 600,
    duration: 1400,
    distance: '1200px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.resarch-box', {
    delay: 600,
    duration: 1400,
    distance: '200px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.team-members', {
    delay: 600,
    duration: 1400,
    distance: '200px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.footer-logo', {
    delay: 600,
    duration: 1000,
    distance: '50px',
    origin: 'top',
    reset: false,
  });
  ScrollReveal().reveal('.footer-contact-info', {
    delay: 600,
    duration: 1000,
    distance: '50px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.footer-socials', {
    delay: 600,
    duration: 1400,
    distance: '50px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.reveal-footer', {
    delay: 600,
    duration: 1400,
    distance: '300px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.about-gall-item:first-child', {
    delay: 600,
    duration: 600,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.about-gall-item:nth-child(2)', {
    delay: 600,
    duration: 800,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.about-gall-item:nth-child(3)', {
    delay: 600,
    duration: 1000,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.about-gall-item:nth-child(4)', {
    delay: 600,
    duration: 1200,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.about-gall-item:nth-child(5)', {
    delay: 600,
    duration: 1400,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.n-item2:first-child', {
    delay: 600,
    duration: 600,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.n-item2:nth-child(2)', {
    delay: 600,
    duration: 800,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.n-item2:nth-child(3)', {
    delay: 600,
    duration: 1000,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.n-item2:nth-child(4)', {
    delay: 600,
    duration: 1200,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.l-img', {
    delay: 600,
    duration: 1200,
    distance: '500px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.b-r-c', {
    delay: 600,
    duration: 1200,
    distance: '400px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.r-other-news', {
    delay: 600,
    duration: 1200,
    distance: '400px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.n-title-box', {
    delay: 600,
    duration: 1400,
    reset: false,
  });
  ScrollReveal().reveal('.news-fancy-gallery', {
    delay: 600,
    duration: 1800,
    reset: false,
  });
  ScrollReveal().reveal('.news-det-box .text', {
    delay: 600,
    duration: 1800,
    reset: false,
  });
  ScrollReveal().reveal('.share-box', {
    delay: 600,
    duration: 1400,
    distance: '200px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.member-img', {
    delay: 600,
    duration: 1400,
    distance: '200px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.member-text', {
    delay: 600,
    duration: 1400,
    distance: '400px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.gal-photo-box', {
    delay: 600,
    duration: 1400,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.album-text', {
    delay: 600,
    duration: 1400,
    distance: '400px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.gallery-box', {
    delay: 900,
    duration: 2000,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.research-det-img', {
    delay: 600,
    duration: 1400,
    distance: '300px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.reseaches-det-box', {
    delay: 600,
    duration: 1400,
    distance: '300px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.offers-link-item:nth-child(3n-2)', {
    delay: 600,
    duration: 1400,
    distance: '300px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.offers-link-item:nth-child(3n-1)', {
    delay: 600,
    duration: 800,
    distance: '300px',
    origin: 'right',
    reset: false,
  });
  ScrollReveal().reveal('.pagination', {
    delay: 600,
    duration: 800,
    distance: '100px',
    origin: 'bottom',
    reset: false,
  });
  ScrollReveal().reveal('.partners-box', {
    delay: 900,
    duration: 1500,
    reset: false,
  });
  ScrollReveal().reveal('.left-contact-box', {
    delay: 600,
    duration: 800,
    distance: '400px',
    origin: 'left',
    reset: false,
  });
  ScrollReveal().reveal('.map', {
    delay: 600,
    duration: 800,
    distance: '400px',
    origin: 'right',
    reset: false,
  });
}


var options = {
  useEasing: true, 
  useGrouping: true, 
  separator: ',', 
  decimal: '.', 
};

var counterParent = document.getElementById('unique-id');
var children = counterParent.children;

function countStart(){
$('#unique-id').addClass('active');
  for (var i = 0; i < children.length; i++) {
       var item = document.getElementById(children[i].id).querySelector('.counter');
       var countValue = item.getAttribute('data-value');

      var countUP = new CountUp(item, 0, countValue, 0, 2, options);
      if (!countUP.error) {
          countUP.start();
      }
  }
}

ScrollReveal().reveal('.layout-block', { 
  beforeReveal: countStart
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


 
 
 


 
