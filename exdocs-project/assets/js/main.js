(function ($) {
    "use strict";
    //  testimonial slider
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

    // brands slider
    var swiper = new Swiper(".tp-brand-top-active", {
        slidesPerView: "auto",
        spaceBetween: 100,
        freemode: true,
        centeredSlides: true,
        loop: true,
        allowTouchMove: false,
        speed: 2000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },


    });

    //  team slider
    var swiper = new Swiper(".tp-team-active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".tp-swiper-team-btn-next",
            prevEl: ".tp-swiper-team-btn-prev",
        },
    });
})(jQuery);


