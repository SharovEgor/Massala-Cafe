window.addEventListener('load', function () {
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
});
