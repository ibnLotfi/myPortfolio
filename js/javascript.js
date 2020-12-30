$(document).ready(function(){
    
    $(window).scroll(function(){
        //  sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // toggle menu script start 

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active"); 
        $('.menu-btn i').toggleClass("active"); 
     });

    // slide up script 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    })

    var typed = new Typed('.typed', {
        strings: ["Développeur Web", "Développeur d'application ^1000"],
        typeSpeed: 80,
        loop: true
      });

    // Carousel section script
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });


    
 })