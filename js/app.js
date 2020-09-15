$(function () {

    // Fixed Header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {

        let introH = intro.innerHeight();

        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(){
        if(scrollPos > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    };

    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // Отменяет стандартное поведение ссылки при клике.

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top; // Отступ от элемента до верха.

        $("html, body").animate({
            scrollTop: elementOffset -55
        }, 700);

        // Закрытие менюшки при выборе пункта
        let nav = $("#nav");
        nav.removeClass("show");
    });


    // Nav Toggle

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on('click', function(event){
        event.preventDefault(); // Отменяет стандартное поведение ссылки при клике.

        nav.toggleClass("show");

    });

    // TestimonialsSlider: https://kenwheeler.github.io/slick/

    let slider = $("#testimonialsSlider");

    slider.slick({
        infinite: true, // Бесконечный скроллинг
        slidesToShow: 1, // сколько хотим показывать слайдов
        slidesToScroll: 1, // Сколько будет скроллить слайдов при клике
        fade: true,
        arrows: false, // Кнопки
        dots: true
      });

})