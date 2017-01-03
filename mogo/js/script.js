/**
 * Created by AMINUL on 12/26/2016.
 */


(function($){
    $(window).on("load",function(){
        $(".content").mCustomScrollbar();
    });
})(jQuery);

$(window).scroll(function() {
    if($(this).scrollTop()>10) {
        $( ".navbar-me" ).addClass("fixed-me");
    } else {
        $( ".navbar-me" ).removeClass("fixed-me");
    }
});

// When the DOM is ready, run this function
$(document).ready(function() {
    //Set the carousel options
    $('#quote-carousel-top').carousel({
        pause: true,
        interval: 5000,
    });
    //Set the carousel options
    $('#quote-carousel-bottm').carousel({
        pause: true,
        interval: 6000,
    });
});
// When the DOM is ready, run this function
$(document).ready(function() {
    //Set the carousel options
    $('#quote-carousel-bottm').carousel({
        pause: true,
        interval: 6000,
    });
});

$(document).ready(function(){
    $("a[rel^='prettyPhoto']").prettyPhoto();
});