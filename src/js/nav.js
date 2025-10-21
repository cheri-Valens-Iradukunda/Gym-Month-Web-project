
function initNav() {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');

    if (!menuIcon || !closeIcon || !menu) return;

    
    menuIcon.replaceWith(menuIcon.cloneNode(true));
    closeIcon.replaceWith(closeIcon.cloneNode(true));

    const open = document.getElementById('menu-icon');
    const close = document.getElementById('close-icon');
    const menuShape = document.getElementById('menu-shape');
    menuShape.addEventListener('click', () => {
        menu.classList.toggle('max-lg:hidden');
        open.classList.toggle('hidden');
        close.classList.toggle('hidden');
    });
}

window.initNav = initNav;
