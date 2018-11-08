jQuery(document).ready(function($) {
    function featuresHeightCalc() {
        let elemHeight = $(".yoga-features").css('height');
        $(".features-holder").height(elemHeight);
    }
    featuresHeightCalc(); //initial invocation

    $(window).on("resize", featuresHeightCalc);
}(jQuery));