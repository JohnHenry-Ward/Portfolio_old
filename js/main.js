$(document).ready(function(){


    //Menu animation open
    $('#open-menu').click(function(){
        $('#open-menu').animate({
            right: '-30px'
        });

        $('.menuBackground').animate({
            width: 'hide'
        });
        
        $('.menu').delay('500').animate({
            width: 'show'
        });

        $('li').hide().delay('600').fadeIn('slow');

    });

    //Menu animation close
    $('#closeMenu').click(function(){
        $('.menu').animate({
            width: 'hide'
        });

        $('#open-menu').delay('500').animate({
            right: '10px'
        });

        $('.menuBackground').delay('500').animate({
            width: 'show'
        });

    })

    //Smooth Scroll
    $('.scroll').click(function (e) {
        e.preventDefault();

        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});
