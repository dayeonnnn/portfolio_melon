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
const artist = document.querySelector ('#album .main_top h3')
const songTitle = document.querySelector ('#album .main_top h2')
const album = document.querySelector ('#album .main_top p')
const writing = document.querySelector ('#album .writing')
const composing = document.querySelector ('#album .composing')
const remix = document.querySelector ('#album .remix')
const record_bg = document.querySelector('#album .album_bg img')
const record_1 = document.querySelector('#album .record_1')
const record_2 = document.querySelector('#album .record_2')
const slide = document.querySelectorAll('#albumList .swiper-slide')
slide[0].addEventListener('click',function(){
    artist.innerHTML = 'New Jeans'
    songTitle.innerHTML = 'Super Shy'
    album.innerHTML= 'NewJeans 2nd EP Get Up'
    writing.innerHTML= 'Gigi, 김동현, Erika de Casier, Kristine Bogan, 다니엘(DANIELLE)'
    composing.innerHTML = 'Frankie Scoca, Erika de Casier, Kristine Bogan'
    remix.innerHTML = 'Frankie Scoca'
    record_1.src = '../images/record/record_1.png'
    record_2.src = '../images/record/record_2.png'
    record_bg.src = './images/record/record_1_bg.jpg'
})
slide[1].addEventListener('click',function(){
    artist.innerHTML = '(여자)아이들'
    songTitle.innerHTML = '퀸카 (Queencard)'
    album.innerHTML= 'I feel'
    writing.innerHTML= '소연 ((여자)아이들)'
    composing.innerHTML = '소연 ((여자)아이들), Poptime, Daily, Likey'
    remix.innerHTML = 'Poptime, Daily, Likey, 소연 ((여자)아이들)'
    record_1.src = '../images/record/record_3.png'
    record_2.src = '../images/record/record_4.png'
    record_bg.src = './images/record/record_3_bg.jpg'
})
slide[2].addEventListener('click',function(){
    artist.innerHTML = 'aespa'
    songTitle.innerHTML = 'Spicy'
    album.innerHTML= 'MY WORLD - The 3rd Mini Album'
    writing.innerHTML= '방혜현'
    composing.innerHTML = 'Ludvig Evers, Jonatan Gusmark, 김연서, Moa Cazzi Opeia Carlebecker'
    remix.innerHTML = 'Moonshine, JINBYJIN'
    record_1.src = '../images/record/record_5.png'
    record_2.src = '../images/record/record_6.png'
    record_bg.src = './images/record/record_5_bg.jpg'
})
slide[3].addEventListener('click',function(){
    artist.innerHTML = 'ITZY(있지)'
    songTitle.innerHTML = 'CAKE'
    album.innerHTML= 'KILL MY DOUBT'
    writing.innerHTML= '블랙아이드필승, 전군'
    composing.innerHTML = '블랙아이드필승, FLYT'
    remix.innerHTML = 'Rado, FLYT'
    record_1.src = '../images/record/record_7.png'
    record_2.src = '../images/record/record_8.png'
    record_bg.src = './images/record/record_7_bg.jpg'
})
slide[4].addEventListener('click',function(){
    artist.innerHTML = '박재정'
    songTitle.innerHTML = '헤어지자 말해요'
    album.innerHTML= '1집 Alone'
    writing.innerHTML= '박재정'
    composing.innerHTML = '박재정, 박현중'
    remix.innerHTML = '박현중'
    record_1.src = '../images/record/record_9.png'
    record_2.src = '../images/record/record_10.png'
    record_bg.src = './images/record/record_9_bg.jpg'
})
slide[5].addEventListener('click',function(){
    artist.innerHTML = '전소미'
    songTitle.innerHTML = 'Fast Forward'
    album.innerHTML= 'GAME PLAN'
    writing.innerHTML= 'TEDDY, 전소미, Bekuh Boom, Vince'
    composing.innerHTML = 'TEDDY, Vince, R.Tee, Bekuh Boom'
    remix.innerHTML = 'R.Tee, Vince, TEDDY'
    record_1.src = '../images/record/record_11.png'
    record_2.src = '../images/record/record_12.png'
    record_bg.src = './images/record/record_11_bg.jpg'
})
slide[6].addEventListener('click',function(){
    artist.innerHTML = 'IVE(아이브)'
    songTitle.innerHTML = 'I AM'
    album.innerHTML= 'Ive IVE'
    writing.innerHTML= '김이나'
    composing.innerHTML = 'Ryan S.Jhun, Kristin Marie, <br>Audun Agnar Guldbrandsen, Eline Noelia Myreng'
    remix.innerHTML = 'Ryan S.Jhun, Audun Agnar Guldbrandsen, Kristin Marie'
    record_1.src = '../images/record/record_13.png'
    record_2.src = '../images/record/record_14.png'
    record_bg.src = './images/record/record_13_bg.jpg'
})
slide[7].addEventListener('click',function(){
    artist.innerHTML = '정국'
    songTitle.innerHTML = 'Seven (feat. Latto)'
    album.innerHTML= 'Seven (feat. Latto)'
    writing.innerHTML= 'Andrew Watt, Jon Bellion, Henry Walter, Theron Makiel Thomas, Latto'
    composing.innerHTML = 'Andrew Watt, Jon Bellion, Henry Walter, Theron Makiel Thomas, Latto'
    remix.innerHTML = 'Latto'
    record_1.src = '../images/record/record_15.png'
    record_2.src = '../images/record/record_16.png'
    record_bg.src = './images/record/record_15_bg.jpg'
})
slide[8].addEventListener('click',function(){
    artist.innerHTML = 'STAYC(스테이씨)'
    songTitle.innerHTML = 'Bubble'
    album.innerHTML= 'TEENFRESH'
    writing.innerHTML= '블랙아이드필승, 전군'
    composing.innerHTML = '블랙아이드필승, FLYT'
    remix.innerHTML = 'Rado, FLYT'
    record_1.src = '../images/record/record_17.png'
    record_2.src = '../images/record/record_18.png'
    record_bg.src = './images/record/record_17_bg.jpg'
})
const top100 = document.querySelectorAll('#top100 ul li')
const top100Hover = document.querySelectorAll('#top100 ul li .hover')
for(let i of top100Hover){i.style.display='none'}

top100.forEach(function(target,index){
    target.addEventListener('mouseover',function(){
        top100Hover[index].style.display='block'
    })
    target.addEventListener('mouseout',function(){
        top100Hover[index].style.display='none'
    })
})