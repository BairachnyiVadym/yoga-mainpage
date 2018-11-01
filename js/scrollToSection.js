jQuery(document).ready(function($) {
    let headerHeight = $(".header").css('height');
    headerHeight = parseInt(headerHeight, 10);

    function scrollToSection(event) {
        event.preventDefault();

        let $section = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: $section.offset().top -headerHeight
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
}(jQuery));