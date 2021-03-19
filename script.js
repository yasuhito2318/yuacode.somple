$(function(){
    $('.faq-list').click(function(){
        if($(this).find('.answer').hasClass('answer-show')){
            $(this).find('.answer').removeClass('answer-show');
            $(this).find('.answer').slideUp()
        }else{
            $(this).find('.answer').addClass('answer-show');
            $(this).find('.answer').slideDown();
        }
    });

    $('#top-btn').click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $('#feature-btn').click(function () {
        if($('.features-wrapper').hasClass('first-fade')){
            $('body, html').animate({ scrollTop: $('.features-wrapper').offset().top-194 }, 500);
        }else{
            $('body, html').animate({ scrollTop: $('.features-wrapper').offset().top-94 }, 500);
        }
        if (window.matchMedia( '(max-width: 767px)' ).matches) {
            $('.menu-wrapper').removeClass('open');
            $('.menu-wrapper').animate({'right':-$('.menu-wrapper').outerWidth()},300);
        }
        return false;
    });

    $('#price-btn').click(function () {
        if($('.price-wrapper').hasClass('first-fade')){
            $('body, html').animate({ scrollTop: $('.price-wrapper').offset().top-194 }, 500);
        }else{
            $('body, html').animate({ scrollTop: $('.price-wrapper').offset().top-94 }, 500);
        }
        if (window.matchMedia( '(max-width: 767px)' ).matches) {
            $('.menu-wrapper').removeClass('open');
            $('.menu-wrapper').animate({'right':-$('.menu-wrapper').outerWidth()},300);
        }
        return false;
    });

    $('.contact-btn').click(function () {
        if($('.contact-wrapper').hasClass('first-fade')){
            $('body, html').animate({ scrollTop: $('.contact-wrapper').offset().top-194 }, 500);
        }else{
            $('body, html').animate({ scrollTop: $('.contact-wrapper').offset().top-94 }, 500);
        }
        if (window.matchMedia( '(max-width: 767px)' ).matches) {
            $('.menu-wrapper').removeClass('open');
            $('.menu-wrapper').animate({'right':-$('.menu-wrapper').outerWidth()},300);
        }
        return false;
    });

    $(window).scroll(function () {
        $(".effect-fade").each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
            $(this).addClass("effect-scroll");
            $(this).removeClass('first-fade');
            }
        });
    });
    jQuery(window).scroll();

    $('#submit').click(function () {
        if ($('.check-container').val() === '') {
            alert('入力していない項目があります。');
            return false;
        }else if($('.check-container2').val() === '') {
            alert('入力していない項目があります。');
            return false;
        }else if($('.check-container3').val() === '') {
            alert('入力していない項目があります。');
            return false;
        }else if ($('#check-box').prop("checked")==false) {
            alert('同意されていません。');
            return false;
        }
    });

    $(document).ready(function () {

        $('#form').submit(function (event) {
            var formData = $('#form').serialize();
            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScwosZEWG1k_uRqDWqEZAHoY3PP9dN5EPGJNil1VRfpGQkeaw/formResponse",
                data: formData,
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function () {
                    $(".end-message").slideDown();
                    $("#submit").fadeOut();
                    },
                }
            });
            event.preventDefault();
        });

    });

    $('.fas').click(function() {
        $('.menu-wrapper').toggleClass('open');
        if($('.menu-wrapper').hasClass('open')){
            $('.menu-wrapper').animate({'right':0},300);
        }else{
            $('.menu-wrapper').animate({'right':-$('.menu-wrapper').outerWidth()},300);
        }
    });
    
});

var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 56,
    autoplay:{
        delay:5000
    },
    breakpoints : {
        767:{
            slidesPerView: 3.5
        }
    }
});
