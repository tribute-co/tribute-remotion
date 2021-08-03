import jsDollar from '../../service/constants';
import { ApisConstant } from '../../service/config/api-contants';


const $ = ApisConstant.DOLLAR;

// Header Scroll Js Start
$(document).on("scroll", function () {
  if
    ($(document).scrollTop() > 200) {
    $("header").addClass("shrink");
  }
  else {
    $("header").removeClass("shrink");
  }
});
// Header Scroll Js End


// Wow Animation Js Start
// var wow = new WOW(
//     {
//       boxClass:     'wow',
//       animateClass: 'animated',
//       offset:       0,
//       mobile:       true,
//       live:         true,
//       callback:     function(box) {
//       },
//       scrollContainer: null
//     }
//   );
//   wow.init();
// Wow Animation Js End


// Sidemenu Toggle Js Start
$(document).on('click', '#sidenav_open', function () {
  $('body').addClass('side_navbar_on');
});

// Sidemenu Toggle Js End
$(document).on('click', '#sidenav_close, .sidenav_overlay', function () {
  $('body').removeClass('side_navbar_on');
});


// Testimonial Slider Js Start
$(document).ready(function () {
  $('.tstmnl_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    touchMove: true,
    prevArrow: '<button class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',
    nextArrow: '<button class="slick-next"> <i class="fas fa-arrow-right"></i> </button>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
// Testimonial Slider Js End

// Toggle active class Js End
$(document).on('click', '.sidemenu-item', function () {
  $(this).parent().addClass('active').siblings().removeClass('active');
});
// Toggle active class Js End


// sidemenu toggle js start
$(document).on('click', '.sidemenu_open , .sidemenu_mob', function () {
  $('body').toggleClass('sidemenu_active');
});
// sidemenu toggle js end

// sidemenu close js start
$(document).on('click', '.sidemenu_overlay', function () {
  $('body').removeClass('sidemenu_active');
});
// sidemenu close js end



// Testimonial Slider Js Start
$(document).ready(function () {
  $('.tstmnl_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    dots: false,
    touchMove: true,
    asNavFor: '.tstmnl_modalslider',
    prevArrow: '<button class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',
    nextArrow: '<button class="slick-next"> <i class="fas fa-arrow-right"></i> </button>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
// Testimonial Slider Js End


// Testimonial Modal Slider Js Start
$(document).ready(function () {
  $('.tstmnl_modalslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    touchMove: true,
    asNavFor: '.tstmnl_slider',
    prevArrow: '<button class="slick-prev"> <i class="fas fa-arrow-left"></i> </button>',
    nextArrow: '<button class="slick-next"> <i class="fas fa-arrow-right"></i> </button>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1
      }
    }]
  });
});
// Testimonial Modal Slider Js End


// Modal Append over body Js Start
$(document).on('show.bs.modal', '.modal', function () {
  $(this).appendTo('body');
});
// Modal Append over body Js End


