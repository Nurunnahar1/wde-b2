$(function () {

    "use strict";
    //offcanvas
    $(".tp-header-toogle").on('click', function () {
        $(".tp-offcanvas").addClass("tp-offcanvas-open");
        $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
    });

    $(".tp-offcanvas-close-button,.tp-offcanvas-overlay").on('click', function () {
        $(".tp-offcanvas").removeClass("tp-offcanvas-open");
        $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
    });


    $(".tp-lang-toggle").on('click', function () {
        $(".tp-lang-submenu").slideToggle();
    });


    // data bg img
    $("[data-bg-img]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-bg-img") + ")");
    })
    // data bg color
    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    })
    // data border color
    $("[data-border-color]").each(function () {
        $(this).css("border-color", $(this).attr("data-border-color"));
    })
    // data color
    $("[data-color]").each(function () {
        $(this).css("color", $(this).attr("data-color"));
    })
    $('.popup-image').magnificPopup({
        type: 'image'
        // other options
    });
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });
    // data circle bar
    $("[data-circle-bar]").each(function () {
        $(this).css("background", $(this).attr("data-circle-bar"))
    })

    // tpcauses slider
    var swiper = new Swiper(".tpcauses-slider-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            prevEl: ".tpcauses__arrow-prev",
            nextEl: ".tpcauses__arrow-next",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    // tphero slider
    var swiper = new Swiper(".tphero-slider-active", {
        slidesPerView: 1,
        navigation: {
            prevEl: ".tpslider__arrow-prev",
            nextEl: ".tpslider__arrow-next",
        }
    });
    // tplpblog slider
    var swiper = new Swiper(".tplpblog-slider-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    // tpcharity slider
    var swiper = new Swiper(".tpcharity-slider-active", {
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
            prevEl: ".tpcauses__arrow-prev",
            nextEl: ".tpcauses__arrow-next",
        },
        breakpoints: {
            300: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });
    // tptext slider
    var swiper_text = new Swiper(".tptext-slider-active", {
        slidesPerView: "auto",
        spaceBetween: 40,
        freemode: true,
        centeredSlides: true,
        loop: true,
        allowTouchMove: false,
        speed: 6000,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },

    });

    // $(".tptext-slider-active").hover(function () {
    //     swiper_text.autoplay.stop();
    // }, function () {
    //     swiper_text.autoplay.start();
    // });



    $('.tptext-slider-active').hover(function () {
        swiper_text.autoplay.stop();
    }, function () {
        swiper_text.autoplay.start();
    });

})(jQuery);
