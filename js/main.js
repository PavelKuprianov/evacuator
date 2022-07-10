document.addEventListener('DOMContentLoaded', () => {
    burger = document.querySelector('.head__burger');
    menuNav = document.querySelector('.header__nav2');
    cross = document.querySelector('.nav__close');
    navItem = document.querySelector('.header__list');

    burger.addEventListener('click', () => {
        menuNav.classList.add('active');
        burger.style.opacity = 0;
    })

    let closeButton = () => {
        menuNav.classList.remove('active');
        burger.style.opacity = 1;
    }

    cross.addEventListener('click', closeButton);
    navItem.addEventListener('click', closeButton);

    //modal windows
    const modalButton = document.querySelectorAll('.more')
    const modalS = document.querySelector('.modalS')
    const modalF = document.querySelector('.modalF')
    const modal = document.querySelector('.modal')
    const overlay = document.querySelectorAll('.overlay')
    const closButton = document.querySelectorAll('.modal__close')
    const serviceBtn = document.querySelectorAll('.item--img-btn');

    modalButton.forEach((link) => {
        link.addEventListener('click', () => {

            if (link.parentNode.querySelector('.item--img-btn')) {
                modalS.classList.remove('hidden')
            } else if (link.parentNode.querySelector('.btn-feetback')) {
                    modalF.classList.remove('hidden')
                } else {
                    modal.classList.remove('hidden')
                }
        })
    })

    const exitWindow = () => {
        modalS.classList.add('hidden')
        modal.classList.add('hidden')
        modalF.classList.add('hidden')
    }

    overlay.forEach((field) => {
        field.addEventListener('click', exitWindow)
    })
    closButton.forEach((el) => {
        el.addEventListener('click', exitWindow)
    })



    //Pop-up arrow and phone number when scrolling
    window.onscroll = function vverh() {
        document.getElementById('vverh').style.display = (window.pageYOffset > '300' ? 'block' : 'none');
        document.getElementById('phone').style.display = (window.pageYOffset > '700' ? 'block' : 'none');
    }


});