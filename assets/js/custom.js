


$(document).ready(function() {

  $('[data-toggle="tooltip"]').tooltip();


  $('.therapists-list').slick({
      dots: false,
      arrows: true,  
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 2,
      adaptiveHeight: false,
      autoplay: false,
      prevArrow: $('.prev-arrow'),
      nextArrow: $('.next-arrow'),
      responsive: [
          {
              breakpoint: 1024, 
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
  });

  if ($(window).width() < 768) {

    $('.reason-boxes').slick({
      dots:true,
      arrows:false,  
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $('.cert-boxes-wrap').slick({
      dots:true,
      arrows:false,  
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay:true
    });

  }


});





document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.sidebar .nav-link').forEach(function(element){
    
    element.addEventListener('click', function (e) {

      let nextEl = element.nextElementSibling;
      let parentEl  = element.parentElement;  

        if(nextEl) {
            e.preventDefault(); 
            let mycollapse = new bootstrap.Collapse(nextEl);
            
            if(nextEl.classList.contains('show')){
              mycollapse.hide();
            } else {
                mycollapse.show();
                // find other submenus with class=show
                var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');
                // if it exists, then close all of them
                if(opened_submenu){
                  new bootstrap.Collapse(opened_submenu);
                }
            }
        }
    }); // addEventListener
  }) // forEach
});