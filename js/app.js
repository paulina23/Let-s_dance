$(document).ready(function() {
    // animation "let's dance"
    //set timeout to change letter positions
    $(function(){
        setTimeout(function(){
            $('.animation').removeClass('hidden');
            clearTimeout();
        },200);
    });

    // tabs
    $('a.tabs').on('click', function(e)  { //on click at any link with class 'tabs'
        var currentAttrValue = $(this).attr('href');
        var animationTime = 1500; //time of timeout

        $('html, body').animate({ //set scroll effect to get to any tab
            scrollTop: $(currentAttrValue).offset().top
        }, animationTime);

        if(currentAttrValue === '#homepage'){ // if click on link 'homepage'
            $('.animation').addClass('hidden'); // animate letters'let's dance' again
            var timeOut = setTimeout(function(){
                $('.animation').removeClass('hidden');
                clearTimeout(timeOut);
            },animationTime);
        }
    });

    $(".instructor-cnt").on("click", function() { //on click at img with class 'instructor'
        $(this).toggleClass('view');
    });

    $(".saver").on("click", function(event) {
        event.stopPropagation();
    });

    $('.contactForm').on('submit', function(e){

        var $form = $(this);
        var $email = $('#email');
        if ($email.get(0).checkValidity()) {
            $form.find('.error-text').remove();
            $email.removeClass('error');
        } else {
            e.preventDefault();
            if (!$form.find('.error-text').length){
                $email.addClass('error');
                $email.after('<div class="error-text">Proszę podać poprawny email</div>')
            }
        }
    });



});
