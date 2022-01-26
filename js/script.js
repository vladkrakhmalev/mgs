// Sliders start
  let topslider = new Swiper('.topslider .swiper-container', {
    direction: 'vertical',
    loop: 'true',
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletElement: 'div',
    },
  });
  let description_slider = new Swiper('.description .swiper-container', {
    direction: 'horizontal',
    loop: 'true',
    pagination: {
      el: '.pagination',
    },
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
  });
  var works_slider_1 = new Swiper('.works-tab-1 .swiper-container', {
    loop: 'true',
    navigation: {
      nextEl: '.arrows__next-1',
      prevEl: '.arrows__prev-1',
    },
    pagination: {
      el: '.pagination.works-tab-1',
      type: 'fraction',
    },
  });
  let works_slider_2 = new Swiper('.works-tab-2 .swiper-container', {
    loop: 'true',
    navigation: {
      nextEl: '.arrows__next-2',
      prevEl: '.arrows__prev-2',
    },
    pagination: {
      el: '.pagination.works-tab-2',
      type: 'fraction',
    },
  });
  let works_slider_3 = new Swiper('.works-tab-3 .swiper-container', {
    loop: 'true',
    navigation: {
      nextEl: '.arrows__next-3',
      prevEl: '.arrows__prev-3',
    },
    pagination: {
      el: '.pagination.works-tab-3',
      type: 'fraction',
    },
  });
// Sliders end

// Pagination start
  $('.works label').click(function() {
    let el = $(this).attr('for');
    $('.works .pagination').css('display', 'none');
    $('.works .pagination' + '.' + el).css('display', 'block');
  });
// Pagination end

// Mobail menu start
  $('.header__btn').click(function() {
    let menu = $('.header__menu');
    let btn = $(this);
    let body = $('body');

    if(menu.hasClass('header__menu_open')) {
      body.removeClass('stop-scroll');
      menu.removeClass('header__menu_open');
      btn.removeClass('header__btn_open');
    } else {
      body.addClass('stop-scroll');
      menu.addClass('header__menu_open');
      btn.addClass('header__btn_open');
    }
  });
// Mobail menu end

// Open/Close filter start
$('.catalog-filter__btn-open').click(function() {
  let filter = $('.catalog-filter');
  let btn = $(this);

  if(filter.hasClass('catalog-filter_close')) {
    filter.removeClass('catalog-filter_close');
    btn.text('Закрыть фильтр');
  } else {
    filter.addClass('catalog-filter_close');
    btn.text('Открыть фильтр');
  }
});
// Open/Close filter end

// Slider Range start
let minValPrice = $(".catalog-filter__number-1").attr('min');
let maxValPrice = $(".catalog-filter__number-1").attr('max');
let valLeftPrice = $(".catalog-filter__number-1").val();
let valRightPrice = $(".catalog-filter__number-2").val();

$( ".catalog-filter__slider-range" ).slider({
    range: true,
    min: 1,
    max: 500,
    slide: function( event, ui ) {
        $(".catalog-filter__number-1").val(ui.values[ 0 ]);
        $(".catalog-filter__number-2").val(ui.values[ 1 ]);
    },
});

$( ".catalog-filter__slider-range" ).slider( "values", [ valLeftPrice, valRightPrice ] );
// Slider range end

// Accordion start
$('.catalog-filter__header').click(function () {
  let btn = $(this).children(".catalog-filter__btn");
  let item = $(this).closest('.catalog-filter__item').children(".catalog-filter__body");

  if (btn.hasClass("catalog-filter__btn_down")) {
      btn.removeClass("catalog-filter__btn_down");
      btn.addClass("catalog-filter__btn_up");
      item.removeClass("catalog-filter__body_open");
      item.addClass("catalog-filter__body_close");
  } else {
    btn.removeClass("catalog-filter__btn_up");
    btn.addClass("catalog-filter__btn_down");
    item.removeClass("catalog-filter__body_close");
    item.addClass("catalog-filter__body_open");
  }
});
// Accordion end

// Animation start
$(window).on('scroll', function() {

  $('.about').each(function() {
    let posBlock = $(this).offset().top;
    let posWindow = $(window).scrollTop();
    if (posBlock < posWindow + 350) {
      $('.title').addClass('animate__fadeInLeft');
      $('.about__placeholder').addClass('animate__fadeInLeft');
      $('.about__image').addClass('animate__fadeInLeft');
      $('.about__content').addClass('animate__fadeInRight');
      $('.about__sterben').addClass('animate__fadeInLeft');
      $('.about__advantages').addClass('animate__fadeInUp');
      $('.about__background').addClass('animate__fadeInLeft');
    }
  });

  $('.description').each(function () {
    let posBlock = $(this).offset().top;
    let posWindow = $(window).scrollTop();
    if (posBlock < posWindow + 350) {
      $('.description__info').addClass('animate__fadeInRight');
      $('.description__info-2').addClass('animate__fadeInLeft');
      $('.description__slider').addClass('animate__fadeInLeft');
      $('.description__arrows').addClass('animate__fadeInRight');
      $('.description__background-1').addClass('animate__fadeInLeft');
      $('.description__background-2').addClass('animate__fadeInUp');
      $('.description__background-3').addClass('animate__fadeInUp');
      $('.description__image').addClass('animate__fadeInLeft');
      $('.description__content').addClass('animate__fadeInRight');
    }
  });

  $('.mini-catalog').each(function () {
    let posBlock = $(this).offset().top;
    let posWindow = $(window).scrollTop();
    if (posBlock < posWindow + 450) {
      $('.mini-catalog__heading').addClass('animate__fadeInUp');
      $('.mini-catalog__item-1').addClass('animate__fadeInLeft');
      $('.mini-catalog__item-2').addClass('animate__fadeInRight');
      $('.mini-catalog__item-3').addClass('animate__fadeInLeft');
      $('.mini-catalog__item-4').addClass('animate__fadeInRight');
      $('.mini-catalog__item-5').addClass('animate__fadeInRight');
    }
  });

  $('.numbers').each(function () {
    let posBlock = $(this).offset().top;
    let posWindow = $(window).scrollTop();
    if (posBlock < posWindow + 650) {
      $('.numbers__doors').addClass('animate__fadeInLeft');
      $('.numbers__years').addClass('animate__fadeInRight');
    }
  });

  $('.works').each(function () {
    let posBlock = $(this).offset().top;
    let posWindow = $(window).scrollTop();
    if (posBlock < posWindow + 450) {
      $('.works__background').addClass('animate__fadeInLeft');
      $('.works__slider').addClass('animate__fadeInLeft');
      $('.works .button-second').addClass('animate__fadeInRight');
      $('.works__info').addClass('animate__fadeInRight');
      $('.works__paginations').addClass('animate__fadeInRight');
    }
  });

  $('.footer').each(function () {
    let posBlock = $(this).offset().top;
    let posWindow = $(window).scrollTop();
    if (posBlock < posWindow + 650) {
      $('.footer__info').addClass('animate__fadeInUp');
      $('.footer__menu').addClass('animate__fadeInUp');
      $('.footer__products').addClass('animate__fadeInUp');
      $('.footer__contact').addClass('animate__fadeInUp');
    }
  });
});
// Animation end
