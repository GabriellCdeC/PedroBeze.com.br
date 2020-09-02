const swiperNext = document.querySelector(".swiper-button-next")
const swiperPrev = document.querySelector(".swiper-button-prev")


swiperNext.addEventListener('click', function (event) {
    const getDivImages = document.querySelectorAll("div.item")

    for (const itemImg of getDivImages) {

        if (itemImg.classList.contains('active')) {
            itemImg.classList.remove('active')
            itemImg.nextElementSibling.classList.add('active')
            return true
        }
    }   


})

swiperPrev.addEventListener('click', function (event) {
    const getDivImages = document.querySelectorAll("div.item")

    console.log(getDivImages)


    for (const itemImg of getDivImages) {

        if (itemImg.classList.contains('active')) {
            itemImg.classList.remove('active')
            itemImg.previousElementSibling.classList.add('active')
            return true
        }
    }
})


