var swiper = new Swiper('.swiper-container', {
  //nawigacja
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination:{
    // bullets
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
    dynamicBullets:true,
  },
  //progress bar
  type:'progressbar',
  // scroll
  // scrollbar:{
  //   el: '.swiper-scrollbar',
  //   draggable:true
  // },
  //efekt
  effect: 'coverflow',
  //kursor myszy na sliderze
  grabCursor: true,
  //na PC
  // simulateTouch:true,
  //aktywny slide w srodku
  centeredSlides: true,
  //paralax efekt
  // parallax:true,
  //odstep miedzy slidem
  spaceBetween:30,
 //ilosc slidow zmienionych odrazu w grupe
//  slidesPerGroup:'1',
 //ktory slide poczatkowy
//  initialSlide:1,
//czestotliwosc zmiany
  touchRatio:2,
  //swobodnie mozemy zmieniac
  // freeMode: true,
  //kat swipe
  touchAngle: 45,
  //predkosc w ms
  speed:500,
  //wertykalny slider
  // direction:'vertical',
  //auto-zmienianie
  // autoplay:{
    //pauza
    // delay:2000,
    //skonczyc na ostatnim slidzie
    // stopOnLastSlide:true,
    //wylaczyc przy recznym zmienianiu
    // disableOnInteraction:true,
  // },
  //adaptywnosc
  // breakpoints: {
  //   320:{
  //     slidesPerView:1,
  //   },
  //   480:{
  //     slidesPerView:2,
  //   },
  //   992:{
  //     slidesPerView:3,
  //   }
  // },

  //nie pobiera odrazu zdjec,szybsza witryna
  // preloadImages:false,
  // lazy:{
  //   loadOnTransitionStart:false,
  //   loadPrevNext:false,
  // },
  // //podgladac za slidami
  // watchSlidesProgress:true,
  // //dodanie klasy widocznym slidam
  // watchSlidesVisibility:true,
  // //nawigacja w hash
  // hashNavigation:{
  //   watchState:true,
  // },
  //zoom zdjec
  zoom:{
    maxRatio:5,
    minRatio:1,
  },
//klawiatura
  keyboard: {
    //on/off
    enabled: true,
    //tylko kiedy ogladasz dziala klawiatura
    onlyInViewport:true,
    //klawisze Pageup , pagedown
    pageUpDown:true,
  },

  //mysza
  mousewheel:{
    // czestotliwosc
    sensitivity:1,
    //klasa obiekta na ktorym bedzie dzialala mysza
    //eventsTarget: "swiper-container",
  },
  //auto-wysokosc pod wszystko
  autoHeight:true,
  //ilosc fotografii na sliderze
  slidesPerView:'auto',
  //zmienia obraz na klik
  // slideToClickedSlide:true,
  //wylacza slider kiedy 1 obrazek
  watchOverflow:true,
  //efekt
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  //caly czas nie ma konca: loop
  loop:true
});





const offset= 200;
  const scrollUp =document.querySelector('.scrollup');
  const srcollUpSvgPath =document.querySelector('.scrollup_svg_path');
  const pathLength =srcollUpSvgPath.getTotalLength();
  

  srcollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  srcollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';
  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
  //updateDashoffset
   
  const updateDashoffset = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const dashoffset = pathLength - (getTop() * pathLength / height);
      srcollUpSvgPath.style.strokeDashoffset = dashoffset;

    };
  //onscroll

  updateDashoffset();
  window.addEventListener('scroll', () => {
    if(getTop()>offset){
      scrollUp.classList.add('scrollup--active');
    }
    else{
      scrollUp.classList.remove('scrollup--active');
    }
});
  //click
  scrollUp.addEventListener('click',() => {
    $("html, body").animate({
      scrollTop:0
    },600);
    });