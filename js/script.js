var map = document.getElementById('map');

map.onmousedown = function (e) {

    var coords = getCoords(map);
    var shiftX = e.pageX - coords.left;
    var shiftY = e.pageY - coords.top;

    map.style.position = 'absolute';
    // document.body.appendChild(map);
    moveAt(e);

    map.style.zIndex = 0; // над другими элементами

    function moveAt(e) {
        map.style.left = e.pageX - shiftX + 'px';
        map.style.top = e.pageY - shiftY + 'px';
    }

    document.onmousemove = function (e) {
        moveAt(e);
    };

    map.onmouseup = function () {
        document.onmousemove = null;
        map.onmouseup = null;
    };

}

map.ondragstart = function () {
    return false;
};

function getCoords(elem) {   // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}