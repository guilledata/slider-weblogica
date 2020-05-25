$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        autoHeight: true,
        // autoplay
        // autoplay:true,
        // autoplayTimeout:5000,
        // autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#slider-destacado').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        autoHeight: true,
        // autoplay
        // autoplay:true,
        // autoplayTimeout:5000,
        // autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    // flechas slider home
    var owl = $('#slider-home');
    owl.owlCarousel();
    // Go to the next item
    $('.nextBtn').click(function() {
        owl.trigger('next.owl.carousel', [1000]);
    })
    // Go to the previous item
    $('.prevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [1000]);
    });

     // flechas slider home
     var owldestacado = $('#slider-destacado');
     owldestacado.owlCarousel();
     // Go to the next item
     $('.nextBtnDes').click(function() {
        owldestacado.trigger('next.owl.carousel', [1000]);
     })
     // Go to the previous item
     $('.prevBtnDes').click(function() {
         // With optional speed parameter
         // Parameters has to be in square bracket '[]'
         owldestacado.trigger('prev.owl.carousel', [1000]);
     });



     
    //  NUMERO RAMDON EFFECT

     (function($){
        $.fn.extend({
            numAnim: function(options) {
                if ( ! this.length)
                    return false;
    
                this.defaults = {
                    endAt: 2560,
                    numClass: 'autogen-num',
                    duration: 5,   // seconds
                    interval: 50  // ms
                };
                var settings = $.extend({}, this.defaults, options);
    
                var $num = $('<span/>', {
                    'class': settings.numClass 
                });
    
                return this.each(function() {
                    var $this = $(this);
    
                    // Wrap each number in a tag.
                    var frag = document.createDocumentFragment(),
                        numLen = settings.endAt.toString().length;
                    for (x = 0; x < numLen; x++) {
                        var rand_num = Math.floor( Math.random() * 10 );
                        frag.appendChild( $num.clone().text(rand_num)[0] )
                    }
                    $this.empty().append(frag);
    
                    var get_next_num = function(num) {
                        ++num;
                        if (num > 9) return 0;
                        return num;
                    };
    
                    // Iterate each number.
                    $this.find('.' + settings.numClass).each(function() {
                        var $num = $(this),
                            num = parseInt( $num.text() );
    
                        var interval = setInterval( function() {
                            num = get_next_num(num);
                            $num.text(num);
                        }, settings.interval);
    
                        setTimeout( function() {
                            clearInterval(interval);
                        }, settings.duration * 1000 - settings.interval);
                    });
    
                    setTimeout( function() {
                        $this.text( settings.endAt.toString() );
                    }, settings.duration * 1000);
                });
            }
        });
    })(jQuery);
    

    // obtener el valor del numero en el span html
    var numhtml1 = document.getElementById('number1').innerHTML;

    // waypoint y acción
    var waypoint = new Waypoint({
        element: document.getElementById('way1'),
        handler: function(direction) {
          console.log('Scrolled to waypoint!')

        //   accion de número
          $("#number1").numAnim({
            endAt: numhtml1,
            duration: 1 
            });

        },
        offset: '95%'
      })
      
    
});