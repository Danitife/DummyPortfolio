$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
           $('.navbar').addClass("sticky") 
        }else{
           $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }

        var docHeight = $(document).height(),
        windowHeight = $(window).height(),
        scrollPercent;
        scrollPercent = $(window).scrollTop() / (docHeight - windowHeight) * 100;
        $('.scroll-progress').width(scrollPercent + '%')
    });

    // slide up script

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    })

    // toggle menu navbar script

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })

    // TYPING ANIMATION SCRIPT

    var typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed("#typed-1", {
        stringsElement: '#typed-string-1',
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // OWL CAROUSEL
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            800:{
                items: 3,
                nav: false
            }
        }
    })
})