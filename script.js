
const btnMenu = document.getElementById('menu-hamburguer')
const menu = document.getElementById('menu-mobile')
const overlayMenu = document.getElementById('overlay-menu')

window.addEventListener('scroll', () => {
    let scroll = document.querySelector('.back-to-top')
    scroll.classList.toggle('active', window.scrollY > 300)
})

btnMenu.addEventListener('click', () => {
    menu.classList.add('active')
})

menu.addEventListener('click', () => {
    menu.classList.remove('active')
})

overlayMenu.addEventListener('click', () => {
    menu.classList.remove('active')
})


