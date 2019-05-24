$(document).ready(function () {
    $('#Instagram-gallery .Instagram__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        variableWidth: true,
        swipeToSlide: true,
        prevArrow: '#Instagram-gallery .Instagram__button-prev',
        nextArrow: '#Instagram-gallery .Instagram__button-next'
    });
});
