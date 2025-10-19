export default function () {
  let detailsSwiperThumb = new Swiper(".details-swiper-thumb", {
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
        on: {
      slideChange: function (slider) {
          if (detailsSwiper) {
            detailsSwiper.slideTo(slider.activeIndex);
          }
          
      }
  }
  });
  let detailsSwiper = new Swiper(".details-swiper", {
    spaceBetween: 8,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: detailsSwiperThumb,
      multipleActiveThumbs: false,
    },
  });
}
