const swiperNext = document.querySelector(".swiper-button-next")
const swiperPrev = document.querySelector(".swiper-button-prev")


swiperNext.addEventListener('click', function (event) {
    const getDivImages = document.querySelectorAll("div.item")

    for (const [index, itemImg] of getDivImages.entries()) {

        if (index < getDivImages.length - 1) {
            if (itemImg.classList.contains('active')) {

                itemImg.classList.remove('active')
                itemImg.nextElementSibling.classList.add('active')
                return true
            }
        }

    }


})

swiperPrev.addEventListener('click', function (event) {
    const getDivImages = document.querySelectorAll("div.item")

    for (const [index, itemImg] of getDivImages.entries()) {
        if (index > 0) {
            if (itemImg.classList.contains('active')) {

                itemImg.classList.remove('active')
                itemImg.previousElementSibling.classList.add('active')
                return true
            } 
        }

    }
})


