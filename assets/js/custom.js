
jQuery(document).ready(function(){
    if(matchMedia('only screen and (max-width: 1024px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 30,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            startVisible: true,
            pauseOnHover: true,
        });

        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });

        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });

        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        });
    }

    jQuery(function(){
        jQuery('.own_assets_right a, .header_floating_btn a').click(function () {
            var Lochref = jQuery(this).attr('href');
            jQuery("html, body").stop().animate({
            scrollTop: jQuery(Lochref).offset().top 
            }, 1500);
            return false;
        });
    });
    
    
    jQuery(".privacy-pop-link").click(function() {
        jQuery('.privacy-popup-area').fadeIn(200);
    });
    jQuery(".privacy-popup-close").click(function() {
        jQuery('.privacy-popup-area').fadeOut(200);
    });


    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });

    jQuery.fn.isInViewport = function() {
        var elementTop = jQuery(this).offset().top;
        var elementBottom = elementTop + jQuery(this).outerHeight();

        var viewportTop = jQuery(window).scrollTop();
        var viewportBottom = viewportTop + jQuery(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    jQuery(window).on('resize scroll', function() {
        if(jQuery('.sticky-footer-view').length > 0) {
            if (jQuery('.sticky-footer-view').isInViewport()) {
                jQuery('.header_floating_btn_wrap').removeClass('is_stuck');
            } else {
                jQuery('.header_floating_btn_wrap').addClass('is_stuck');
            }
        }
    });
    
    jQuery(window).on('resize scroll', function() {
        if(jQuery('.sticky-footer-view2').length > 0) {
            if (jQuery('.sticky-footer-view2').isInViewport()) {
                jQuery('.header_floating_btn_wrap').removeClass('is_stuck_dn');
            } else {
                jQuery('.header_floating_btn_wrap').addClass('is_stuck_dn');
            }
        }
    });
});


jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 24) {
        jQuery('.sticky_header').addClass('is_stuck');
    }
    else {
        jQuery('.sticky_header').removeClass('is_stuck');
    }
});

  jQuery(".tigger_btn").click(function() {
    jQuery('.congratulations_hide, .privacy_info, .banner_form_bg').addClass("active");
  });

  // play btn

$('#play-video').on('click', function(e){
  e.preventDefault();
  $('#video-overlay').addClass('open');
  $("#video-overlay").append('<iframe width="800" height="445" src="https://player.vimeo.com/video/617905027?h=65a81b3655&title=0&byline=0&portrait=0" frameborder="0" allowfullscreen></iframe>');
});

$('.video-overlay, .video-overlay-close').on('click', function(e){
  e.preventDefault();
  close_video();
});

$(document).keyup(function(e){
  if(e.keyCode === 27) { close_video(); }
});

function close_video() {
  $('.video-overlay.open').removeClass('open').find('iframe').remove();
};