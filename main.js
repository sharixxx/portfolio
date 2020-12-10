    
$(window).on("scroll resize", function() {
    if ($(this).scrollTop() > 1){
    $('header').addClass("fixed");
    }
    else{
    $('header').removeClass("fixed");
    }
    });


    function checkScroll(scrollPos, introH) {
        if( scrollPos > introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

/* Smooth scroll */

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;
    console.log(elementOffset);
    // nav.removeClass("show");

    $("html, body").animate({
        scrollTop: elementOffset -50
    }, 800);
});

$(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
      // переместиться в верхнюю часть страницы
      $("html, body").animate({
        scrollTop:0
      },800);
    })
  })
  // при прокрутке окна (window)
  $(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop()>200) {
      // то сделать кнопку scrollup видимой
      $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
      $('.scrollup').fadeOut();
    }
  });
