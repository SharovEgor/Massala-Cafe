$(document).ready(function(){
    $('#Menu-catalog .Menu__slider').slick({
        slidesToShow: 2,
        infinite: false,
        variableWidth: true,
        prevArrow: '#Menu-catalog .Menu__button-prev',
        nextArrow: '#Menu-catalog .Menu__button-next'
    });
});