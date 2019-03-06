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

    //Scroll Reveal
    const sr = ScrollReveal();

    //Homepage Reveal

    sr.reveal('.background-headshot', {
        delay: '100',
        distance: '50px',
    });

    sr.reveal('.name', {
        distance: '50px',
        delay: '250',
    });

    sr.reveal('.headInfo', {
        distance: '50px',
        delay: '500',
    });

    sr.reveal('.resume', {
        distance: '50px',
        delay: '600',
    });

    sr.reveal('#githubHeader', {
        distance: '50px',
        delay: '550',
    });

    sr.reveal('.pagebreak1', {
        distance: '50px',
    });

    sr.reveal('.menuBackground', {
        origin: 'right',
        distance: '50px',
        delay: '700',
    });

    sr.reveal('#open-menu', {
        origin: 'right',
        distance: '50px',
        delay: '750',
    });

    sr.reveal('.background1', {
        delay: '1000',
        duration: '1000'
    });

    
    //About Reveal (might be a bit too much)

    // sr.reveal('#aboutIcon', {
    //     origin: 'left',
    //     distance: '50px',
    //     delay: '1000'
    // });

    // sr.reveal('.aboutTitle', {
    //     origin: 'right',
    //     distance: '50px',
    //     delay: '1000'
    // });
    
    // sr.reveal('.aboutPersonal', {
    //     distance: '50px',
    //     delay: '1000'
    // });

    // sr.reveal('.aboutTechnical', {
    //     distance: '50px',
    //     delay: '1050'
    // });

    // sr.reveal('.skills', {
    //     distance: '50px',
    //     delay: '1100'
    // });



});
