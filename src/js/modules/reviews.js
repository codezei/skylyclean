export default function () {
    let reviewsSwiper = new Swiper(".reviews-swiper", {
        slidesPerView: 1,
        spaceBetween: 8,
        breakpoints: {
          430: {
            slidesPerView: 1.5,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        },
        navigation: {
          nextEl: ".reviews-button-next",
          prevEl: ".reviews-button-prev",
        },
        on: {
          transitionEnd: function (swiper) {
            let reviewTextActive = swiper.el.querySelector('.swiper-slide:not(.swiper-slide-active) .review__text.active')
            if (reviewTextActive) {
              reviewTextActive.classList.remove('active')
            }
            let reviewToggleActive = swiper.el.querySelector('.swiper-slide:not(.swiper-slide-active) .review__toggle.active')
            if (reviewToggleActive) {
              reviewToggleActive.classList.remove('active')
            }
          }
        }
      });


      let reviewTogglers = document.querySelectorAll('.review__toggle')
      for(let i = 0; i < reviewTogglers.length; i++) {
        reviewTogglers[i].addEventListener('click', function (e) {
          e.currentTarget.previousElementSibling.classList.toggle('active')
          e.currentTarget.classList.toggle('active')
        })
      }
    
}