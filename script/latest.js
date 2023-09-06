const txt = document.querySelectorAll('swiper-slide .txt')
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:{delay:3000},
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        // slideShadows: false,
    },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on:{
        init:function(){
            //슬라이드가 변경되기 전 초기 실행함수
            this.slides[this.activeIndex].querySelector('.swiper-slide .txt').style.opacity = '1'
            this.slides[this.activeIndex].querySelector('.swiper-slide .bg').style.opacity = '0'
        },
        slideChange:function(){
            //슬라이드 변경될때 인식되는 실행함수
            //1. 활성화 전 모든 슬라이드 opacity:0
            this.slides.forEach(target => {
                target.querySelector('.swiper-slide .txt').style.opacity= '0';
                target.querySelector('.swiper-slide .bg').style.opacity= '1';
                /* target 자체가 슬라이드라 쿼리셀렉터 빼기 */
            })
            //2. 활성화 슬라이드만 opacity:1
            this.slides[this.activeIndex].querySelector('.swiper-slide .txt').style.opacity = '1';
            this.slides[this.activeIndex].querySelector('.swiper-slide .bg').style.opacity = '0';
            }
    }
});