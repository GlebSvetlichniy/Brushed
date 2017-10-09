$(document).ready(function() {
    $('.humb').click(function() {
        $('.menu').toggleClass('active');
    });
    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".nav").length == 0) {
            $(".menu").removeClass("active");
        }
    });
    
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000, 
});        
});

