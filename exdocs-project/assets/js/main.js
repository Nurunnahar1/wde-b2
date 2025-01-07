(function ($) {
    "use strict";



    var swiper = new Swiper(".tp-textmonial-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-testi-btn-next",
            prevEl: ".tp-swiper-testi-btn-prev",
        },
    });
})(jQuery);