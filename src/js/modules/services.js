export default function () {
    let servicesSwiper = new Swiper(".services-swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
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
        },
        navigation: {
          nextEl: ".services-button-next",
          prevEl: ".services-button-prev",
        },
      });
}