$(document).ready(function(){
    $('#Instagram-gallery .Instagram__slider').slick({
        slidesToShow: 3,
        infinite: false,
        variableWidth: true,
        prevArrow: '#Instagram-gallery .Instagram__button-prev',
        nextArrow: '#Instagram-gallery .Instagram__button-next'
    });
});