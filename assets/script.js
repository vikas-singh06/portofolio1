const nav_icon = document.querySelector('.nav-icon');
const nav_menu = document.querySelector('.padding-global');

const toggleNavmenu = () => {
    nav_menu.classList.toggle('active');

    
}
nav_icon.addEventListener('click', ()=> toggleNavmenu());