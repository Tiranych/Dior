const top_swiper = new Swiper('.top__swiper', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
    },
    effect: "fade",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const slider = new Swiper(".mySlider", {
    slidesPerView: 4,
    spaceBetween: 20,
    /* loop: true, */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

document.querySelectorAll('.accordeon__content').forEach((item) => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordeon__item--active')
    })
});