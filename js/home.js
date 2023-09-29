$(document).ready(function(){
    $('.feature-products').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        
      });
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
         if(scroll > 800){
          $('body').addClass('hederfix');
        }
        else{
          $('body').removeClass('hederfix');
        }
        if(scroll > 1000){
          $('body').addClass('hederfix-1');
        }
        else{
          $('body').removeClass('hederfix-1');
        }
        });
        
});