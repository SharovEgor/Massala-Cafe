function mapInit()  {
    const map = document.getElementById('map');

  function adaptiveMap() {
    if (window.innerWidth < 1000) {
      map.style.transform = "translate(-1635px, -2328px)";
    } if (window.innerWidth < 800) {
      map.style.transform = "translate(-1635px, -2328px)";
    } if (window.innerWidth < 400) {
      map.style.transform = "translate(-1635px, -2328px)";
    } else {
      map.style.transform = "translate(-1635px, -2328px)";
    }
  }

  adaptiveMap();
  const mapWrapper = document.getElementById('map-wrapper');

  const config = {
    maxX: -(mapWrapper.offsetWidth - map.offsetWidth),
    minX: 0,
    maxY: 0,
    minY:  map.offsetHeight - mapWrapper.offsetHeight,
  };

  window.addEventListener('mousemove', function () {
    const transform = map.style.transform;
    const transformMatched = transform.match(/[-0-9]+/g);

    if (transformMatched) {
      const x = -Number(transformMatched[0]);
      const y = -Number(transformMatched[1]);

      let newX = x;
      let newY = y;

      if (x > config.maxX) {
        newX = config.maxX;
      } else if (x < config.minX) {
        newX = config.minX;
      }
      if (y < config.maxY) {
        newY = config.maxY;
      } else if (y > config.minY) {
        newY = config.minY;
      }
      map.style.transform = "translate(-" + newX + "px, -" + newY + "px)";
    }
  });
}

$(document).ready(function () {
    $('#Menu-catalog .Menu__slider').slick({
        slidesToShow: 2,
        infinite: false,
        variableWidth: true,
        prevArrow: '#Menu-catalog .Menu__button-prev',
        nextArrow: '#Menu-catalog .Menu__button-next'
    });
    $('#Feedback .Feedback__slider').slick({
        slidesToShow: 1,
        prevArrow: '#Feedback .Feedback__button-prev',
        nextArrow: '#Feedback .Feedback__button-next'
    });
    $('#Instagram-gallery .Instagram__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        swipeToSlide: true,
        prevArrow: '#Instagram-gallery .Instagram__button-prev',
        nextArrow: '#Instagram-gallery .Instagram__button-next'
    });
    mapInit();
});

