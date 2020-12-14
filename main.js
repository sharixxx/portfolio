    
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
        scrollTop: elementOffset -20
    }, 800);
});

