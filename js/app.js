$(document).foundation();

$('.slick').slick({
mobileFirst: true,
centerMode: true,
dots: true,
  infinite: false,
  speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]    });

$('.horiztonal-slick').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1
});


