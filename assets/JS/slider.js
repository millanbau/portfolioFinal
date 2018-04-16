 $(document).ready(function() {
    $( "#slide-1" ).addClass( "visible" );
    $( "#nav-1" ).addClass( "active" );

    $('.next').click(function() {

        var currentSlide = $('.visible');
        var currentNav = $('.active');

        currentSlide.removeClass('visible');
        currentNav.removeClass('active');

        if (currentSlide.next().length == 0) {
            $( "#slide-1" ).addClass( "visible" );
            $( "#nav-1" ).addClass( "active" );
        } else {
            currentSlide.next().addClass('visible');
            currentNav.next().addClass('active');
        }
    });

    $('.prev').click(function() {

        var currentSlide = $('.visible');
        var currentNav = $('.active');

        currentSlide.removeClass('visible');
        currentNav.removeClass('active');

        if (currentSlide.prev().length == 0) {
            $( "#slide-4" ).addClass( "visible" );
            $( "#nav-4" ).addClass( "active" );
        } else {
            currentSlide.prev().addClass('visible');
            currentNav.prev().addClass('active');
        }
    });

 });