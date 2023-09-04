/* 햄버거메뉴 */
const m_nav = document.querySelector ('.m_nav')
const m_nav_open = document.querySelector ('.m_nav_open')
const main = document.querySelector('main')
m_nav_open.style.display = 'none'
m_nav.addEventListener('mouseover',function(){
    m_nav_open.style.display = 'block'
})
main.addEventListener('mouseover',function(){
    m_nav_open.style.display = 'none'
})