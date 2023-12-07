const swiper = new Swiper('.swiper', {
    // direction: '',
    loop: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    });
// /////////////////////////////////////////////////////////
// fancy-box
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// /////////////////////////////////////////////

const swiper7 = new Swiper('.myswipe7', {
  // direction: '',
  loop: true,
  slidesPerView: 5,
  // spaceBetween: 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next7',
    prevEl: '.swiper-button-prev7',
  },
  
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  });
  // ////////////////////////////////////////////////////////////////////
  
  const swiper8 = new Swiper('.myswipe8', {
    // direction: '',
    loop: true,
    slidesPerView: 5,
    // spaceBetween: 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next7',
      prevEl: '.swiper-button-prev7',
    },
    
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    });















// const slides = document.querySelectorAll(".slide")
// var counter = 0;

// slides.forEach ( 
//     (slide,index) => {
//         slide.style.top= `${index * 100}%`

// } );
// function goNext(){
//     counter++
//     slideImage()
// }
// function goPrevious(){
//     counter--
//     slideImage()
// }

// const slideImage = () => {
//     slides.forEach (
//         (slide) => {
//             slide.style.transform =`translateY(${counter * 100}%)`
//         }
//     )
// }