import Swiper from '../../node_modules/swiper/swiper-bundle';
// import Swiper styles
import '../../node_modules/swiper/swiper-bundle.css';


const swiper = new Swiper('.swiper', {
    
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    initialSlide: 0,
    rewind: true,
    watchOverflow: true,
    keyboard: true,

    pagination: {
      el: '.swiper-pagination',
    },

   
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    autoplay: {
      delay: 12000,
    },
  });

