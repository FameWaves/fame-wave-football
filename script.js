function MenuManipulator() {
    const menuBtn = document.querySelector('.menu_button');
    const mainNav = document.querySelector('#main_nav');
    const hideMenuBtn = document.querySelector('.hide_menu_btn');
    const transparentDiv = document.querySelector('.transparent');

    const displayMenu = () => {
        mainNav.classList.remove('hidden');
        mainNav.classList.add('main_nav')
        transparentDiv.style.opacity = '1';
    }

    const hideMenu = () => {
        mainNav.classList.add('hidden');
        mainNav.classList.remove('main_nav');
    }
    menuBtn.addEventListener('click', displayMenu);
    hideMenuBtn.addEventListener('click', hideMenu);
}

MenuManipulator();