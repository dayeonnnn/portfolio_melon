var swiper = new Swiper(".mySwiper", {
    slidesPerView: 7,
    autoplay:{delay:3000},
    // loop:true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});