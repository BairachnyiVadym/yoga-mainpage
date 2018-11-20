(function($) {
    function featuresHeightCalc() {
        let elemHeight = $(".yoga-features").css('height');
        $(".features-holder").height(elemHeight);
    }
    featuresHeightCalc(); //initial invocation

    $(window).on("resize", featuresHeightCalc);
}(jQuery));

// TODO:
// 1. Create 'barel' file (app.js)
// 2. create import/export system for all .js files
// 3. Use functionality of all mentioned files in app.js logically
