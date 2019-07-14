$(document).ready(function() {
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      infinite: true,
      arrows: false,
      centerPadding: "0px",
      autoplay: true,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev feedback-prev-arrow">&#60;</button>',
      nextArrow:
        '<button type="button" class="slick-next feedback-next-arrow">&#62;</button>'
    });
  });
  