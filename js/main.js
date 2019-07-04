$('.projects-container').slick({
    infinite: true,
    dots: true,
    arrows: false,
    prevArrow: '<span class="arrow"></span>',
    nextArrow: '<span class="arrow"></span>',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  // $(document).ready(function(){
  //   $('.customer-logos').slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 1000,
  //     arrows: false,
  //     dots: false,
  //       pauseOnHover: false,
  //       responsive: [{
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3
  //       }
  //     }, {
  //       breakpoint: 520,
  //       settings: {
  //         slidesToShow: 2
  //       }
  //     }]
  //   });
  // });

  // $('.testimonials-section-container').slick({
  //   infinite: true,
  //   dots: true,
  //   arrows: false,
  //   prevArrow: '<span class="arrow"></span>',
  //   nextArrow: '<span class="arrow"></span>',
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   // autoplaySpeed: 1(ms)
  // });

  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.testimonials-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
  });

  // div.autoplay
  // -> за секоја слика div
  // -> и во него сликата со img