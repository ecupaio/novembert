$(document).ready(function() {

    var sectionData;

    function scrollDirect() {
        $('body,html').animate({
            scrollTop: $('.content-section[data-section="' + sectionData + '"]').offset().top - 50
        }, '1000', 'swing');
    }

    var sectionIndex;
    $('.content-section').each(function(index, obj) {
        sectionIndex = index + 1;
        $('.quick-jump').append('<div class="quick-jump-item" data-section="' + sectionIndex + '" ><i class="fa fa-circle"></i></div>');
    });

    $('.quick-jump-item').click(function() {
        sectionData = $(this).data('section');
        scrollDirect();
        console.log(nextSection);
    });
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var contentHeader;
        var prevContent;
        var nextContent;
        var contentTop;
        $('.content-section').each(function() {
            contentTop = $(this).offset().top;
            nextContent = $(this).next(".content-section");
            prevContent = $(this).prev(".content-section");
            sectionData = $(this).data('section');
            contentHeader = $(this).find('.section-header').text();
            if (contentTop - scrollTop < 100) {
                if (contentHeader !== "") {
                    $('.current-section').css('display', 'inline-block');
                    $('.current-section').text(contentHeader);
                } else {
                    $('.current-section').hide();
                }
                //highlight quick jump item
                $('.quick-jump-item').removeClass('active');
                $('.quick-jump-item[data-section="' + sectionData + '"]').addClass('active');
            }
        });
        var statsSection = $('.stats-section').offset().top;
        /*if (statsSection - scrollTop < 100) {
            console.log('stats section is at top');
            $('.amt').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }*/
    });

    $('.scroll-btn').click(function() {
        if ($(this).hasClass('up')) {
            scrollPrev();

        } else if ($(this).hasClass('down')) {
            scrollNext();
        }
    });
    //Counter
    function statCounter() {
        $('.amt').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    }



});