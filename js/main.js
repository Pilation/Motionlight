$('.mob_btn').on('click', function () {
    $(this).siblings('div.right_side').toggleClass('active');
    $(this).toggleClass('active');
});

jQuery(function($){
    $(document).mouseup(function (e){
        var headerBlock = $("header");
        var mobNav = $(".right_side");
        var mobBtn = $(".mob_btn");
        if (!headerBlock.is(e.target)
            && headerBlock.has(e.target).length === 0) {
            mobNav.removeClass('active');
            mobBtn.removeClass('active');
        }
    });
});

$(document).ready(function(){

    let settingsSlick = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    if ($(document).width() <= 567) {
        $('.advantages_slider').slick(settingsSlick);
    }

    $(window).resize(() => {
        if ($(document).width() <= 567) {
            if(!$(".advantages_slider").hasClass("slick-initialized")) $('.myslick').slick(settingsSlick);
        } else {
            if ($(".advantages_slider").hasClass("slick-initialized")) $(".myslick").slick("unslick");
        }
    });
});