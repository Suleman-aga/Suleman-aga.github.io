$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        autoplay: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });


});