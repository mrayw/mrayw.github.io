//BACK-TO-TOP BUTTON ON DESKTOP and MOBILE (touchstart)
// quickly made this by adapting code from: https://codepen.io/desirecode/pen/MJPJqV


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 250) { 
            $('.back-to-top').fadeIn(); 
        } else { 
            $('.back-to-top').fadeOut(); 
        } 
    }); 
    $('.back-to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 300); 
        return false; 
    }); 
    $('.back-to-top').on('touchstart',function(){ 
        $("html, body").animate({ scrollTop: 0 }, 300); 
        return false; 
    }); 
});

