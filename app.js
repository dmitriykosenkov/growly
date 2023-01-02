"use strict"

const burgerBtn = document.querySelector('.icon-menu')
const menuBody = document.querySelector('.menu__body')

burgerBtn.addEventListener('click', () => {
   burgerBtn.classList.toggle('icon-menu-open')
   menuBody.classList.toggle('menu-open')
})