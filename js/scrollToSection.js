jQuery(document).ready(function($) {
    function scrollToSection(event) {
        event.preventDefault();

        let $section = $($(this).attr('href'));

        $('html, body').animate({
            scrollTop: $section.offset().top -100 // -100px according to header height
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);
}(jQuery));