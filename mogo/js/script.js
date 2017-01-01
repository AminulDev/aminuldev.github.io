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
