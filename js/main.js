// @prepros-prepend jquery-2.1.4.js
// @prepros-prepend jquery.stickyNav.js

$(document).ready( function() {
    
    $('nav img').css('height', $('nav img').height());
    
    $('nav .container').css('height', $('.menu').outerHeight());
    $('nav').stickyNav();
    
    $(window).scroll( function(){
        if ($(window).scrollTop() > $('nav img').offset().top){
            $('nav img').addClass('small');
        } else{
            $('nav img').removeClass('small');
        }
    });
});