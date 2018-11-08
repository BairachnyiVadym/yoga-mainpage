jQuery(document).ready(function($) {
    let headerHeight;

    function headerHeightCalc() {
        headerHeight = $(".header").css('height');
        headerHeight = parseInt(headerHeight, 10);
    }
    headerHeightCalc(); //initial invocation

    function scrollToSection(event) {
        event.preventDefault();

        let $section = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: $section.offset().top -headerHeight
        }, 500);
    }
    $(window).on("resize", headerHeightCalc);
    $('[data-scroll]').on('click', scrollToSection);
}(jQuery));