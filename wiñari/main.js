const iconPerfil = document.querySelector('.navbar-perfil-icon');
const menuDesktop = document.querySelector('.desktop-menu');

iconPerfil.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    menuDesktop.classList.toggle('inactive')
}
