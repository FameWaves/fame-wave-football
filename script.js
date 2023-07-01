const MenuManipulator = (() => {
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
})();

function animate(element, number = 0.25) {
    const observer = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide_in');
                o.unobserve(entry.target);
            }
        })
    }, { threshold: number })
    return observer.observe(element);
}

function loopElement(element) {
    element.forEach((i) => {
        animate(i);
    })
}

const hero_text = document.querySelector('.hero_text_wrapper');
animate(hero_text);

const detailsImg = document.querySelectorAll('.detail_image');
const details = document.querySelectorAll('.details');
loopElement(detailsImg);
loopElement(details);
