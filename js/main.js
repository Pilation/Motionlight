$('.mob_btn').on('click', function () {
    $(this).siblings('div.right_side').toggleClass('active');
    $(this).toggleClass('active');
});

jQuery(function ($) {
    $(document).mouseup(function (e) {
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
