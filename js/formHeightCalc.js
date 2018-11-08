jQuery(document).ready(function($) {
    function formHeightCalc() {
        let elemHeight = $(".slider").css('height');
        $(".form-holder").height(elemHeight);
    }
    formHeightCalc(); //initial invocation

    $(window).on("resize", formHeightCalc);
}(jQuery));