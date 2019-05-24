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
});

