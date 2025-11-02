export default function () {
    let servicesSwiper = new Swiper(".services-swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          430: {
            slidesPerView: 1.5,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3.5,
          },
        },
        navigation: {
          nextEl: ".services-button-next",
          prevEl: ".services-button-prev",
        },
      });
    let additionalServicesSwiper = new Swiper(".additional-services-swiper", {
        slidesPerView: 1.5,
        spaceBetween: 8,
        breakpoints: {
          430: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 6,
          },
        },
        navigation: {
          nextEl: ".additional-services-button-next",
          prevEl: ".additional-services-button-prev",
        },
      });
}