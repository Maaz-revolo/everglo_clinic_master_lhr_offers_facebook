$(window).on("load", function () {  
    $(".testimonial-slider").removeClass("d-none-c"), 
    $(".certificate-doctor-all").removeClass("d-none-c"), 
    $(".clint-case-all").removeClass("d-none-c"), 
    $(".video-sec video").removeClass("d-none-c"), 
   
    $(".testimonial-slider").slick({
        dots: !1,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: !0,
        draggable: !0,
        speed: 1e3,
        autoplaySpeed: 4e3,
        autoplay: !0,
        swipeToSlide: !0,
        pauseOnHover: !0,
        arrows: !1,
        dots: !0,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 567,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !1
            }
        }]
    }), 
    
    $(".certificate-doctor-all").slick({
        dots: !0,
        arrows: !1,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: !0,
        draggable: !0,
        speed: 2e3,
        autoplaySpeed: 2e3,
        autoplay: !0,
        swipeToSlide: !0,
        pauseOnHover: !0,
        // variableWidth: !0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                arrows: !1,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: !0
            }
        }, {
            breakpoint: 567,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !1
            }
        }]
    })

    $(".clint-case-all").slick({
        dots: !0,
        arrows: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: !0,
        draggable: !0,
        speed: 2e3,
        autoplaySpeed: 2e3,
        autoplay: !0,
        swipeToSlide: !0,
        pauseOnHover: !0,
        // variableWidth: !0,
      
    })

    if ($(window).width() <= 1200) {
       
        
        $(".price-sec-cal").slick({
            dots: !0,
            arrows: !1,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: !0,
            draggable: !0,
            speed: 2e3,
            autoplaySpeed: 2e3,
            autoplay: !0,
            swipeToSlide: !0,
            pauseOnHover: !0,
            centerPadding: '50px',
            centerMode: true,   
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:3
                }
            },{
                breakpoint: 767,
                settings: {
                    arrows: !1,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: !0
                }
            }, {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: !0,
                    arrows: !1
                }
            }]
        })
    
      
    }
});


const header = document.querySelector(".header_area");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});


$(function () { 
    $(".faq-accordian-single-2:not(:first-of-type) .accordion-content-2").css("display", "none");
    $(".faq-accordian-single-2:first-of-type .js-accordion-title-2").addClass("open-2");
    $(".js-accordion-title-2").click(function () {
      $(".open-2").not(this).removeClass("open-2").next().slideUp(300);
     $(this).toggleClass("open-2").next().slideToggle(300);
    });
  });


  $(function () { 
    $(".faq-accordian-single:not(:first-of-type) .accordion-content").css("display", "none");
    $(".faq-accordian-single:first-of-type .js-accordion-title").addClass("open");
    $(".js-accordion-title").click(function () {
      $(".open").not(this).removeClass("open").next().slideUp(300);
     $(this).toggleClass("open").next().slideToggle(300);
    });
  });



$(document).ready(function(){
    showPopup();
  });


function showPopup(){
 if(localStorage.getItem('YesBtn') !== 1){
    
  setTimeout(() => {  
    $('body').addClass('modal-open-auto');
   
  }, 1000);
 }
}



(function($) {
    "use strict";
        $(document).ready(function() {
                $('.modal-link').on('click', function() {
                $('body').addClass("modal-open");
            });
            $('.close-modal-x').on('click', function() {
                $('body').removeClass("modal-open");
            });
        });
}(jQuery));


(function($) {
    "use strict";
        $(document).ready(function() {
                $('.modal-link-wa').on('click', function() {
                $('body').addClass("modal-open-wa");
            });
            $('.close-modal-x').on('click', function() {
                $('body').removeClass("modal-open-wa");
            });
        });
}(jQuery));


(function($) {
  "use strict";
      $(document).ready(function() {
              $('.modal-link-score').on('click', function() {
              $('body').addClass("modal-open-score");
          });
          $('.modal-link-score-dtl , .close-modal-x').on('click', function() {
              $('body').removeClass("modal-open-score");
          });
      });
}(jQuery));

(function($) {
  "use strict";
      $(document).ready(function() {
              $('.modal-link-score-dtl').on('click', function() {
              $('body').addClass("modal-open-score-dtl");
          });
          $('.close-modal-x').on('click', function() {
              $('body').removeClass("modal-open-score-dtl");
          });
      });
}(jQuery));


(function($) {
    "use strict";
        $(document).ready(function() {
                $('.modal-link-auto').on('click', function() {
                $('body').addClass("modal-open-auto");
            });
            $('.close-modal-auto').on('click', function() {
                $('body').removeClass("modal-open-auto");
            });
        });
  }(jQuery));







  const container = document.querySelector('.after-before-all');
  document.querySelector('.slider').addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
  })
  
  
  $(document).ready(function() {
  
    $('.card').on( "click", function() {
      $imgsrc = $(this).find('.img-src').parent('.card').attr('img-number');
      
      $(".card").removeClass("active-img");
      $(this).addClass('active-img');
      $("#imagechange").attr("src", "assets/images/succcess-" + $imgsrc + ".webp" ).fadeIn(1000);
      $("#imagechange-2").attr("src","assets/images/succcess-" + $imgsrc +"-"+ $imgsrc + ".webp").fadeIn(1000);
     
    } );
  
  });
  



// var mybutton = document.getElementById("myBtn");

// function scrollFunction() {
//     document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? mybutton.style.display = "flex" : mybutton.style.display = "none"
// }

// function topFunction() {
//     document.body.scrollTop = 0, document.documentElement.scrollTop = 0
// }
// window.onscroll = function () {
//     scrollFunction()
// };
// const header = document.querySelector(".header_area"),
//     toggleClass = "is-sticky";



// function showPopup() {
//     1 !== localStorage.getItem("YesBtn") && setTimeout(() => {
//         $("#exampleModal").modal("show"), $("#popup-yes").on("click", function () {
//             localStorage.setItem("YesBtn", 1), $("#exampleModal").modal("hide")
//         })
//     }, 45000)
// }
// window.addEventListener("scroll", () => {
//     let e = window.pageYOffset;
//     e > 150 ? header.classList.add(toggleClass) : header.classList.remove(toggleClass)
// }), $(document).ready(function () {
//     showPopup()
// });
// var timeLimitInMinutes = 5,
//     timeLimitInSeconds = 60 * timeLimitInMinutes,
//     timerElement = document.getElementById("timer");

// function startTimer() {
//     var e = Math.floor(--timeLimitInSeconds / 60),
//         o = timeLimitInSeconds % 60;
//     if (timeLimitInSeconds < 0) {
//         timerElement.textContent = "00:00", clearInterval(timerInterval);
//         return
//     }
//     e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), timerElement.textContent = e + ":" + o
// }
// var timerInterval = setInterval(startTimer, 1e3);