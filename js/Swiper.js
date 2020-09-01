const swiperNext = document.querySelector(".swiper-button-next")
swiperNext.addEventListener('click' ,function(event){
    console.log("Teste1")
})

const swiperPrev = document.querySelector(".swiper-button-prev")
swiperPrev.addEventListener('click' ,function(event){
    console.log("Teste2")
})

/*
if ((".swiper-container").hasClass("team-member-slider")) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        allowTouchMove: true,
        loop: true,
        centeredSlides: true,
        slideToclickedslide: true,
        effect: "coverflow",
        grabcursor: true,
        autoplay: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        coverflow: {
            rotate: 0.
        }
    })
}
*/

