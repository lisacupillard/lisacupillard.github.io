const btnMenu = document.querySelector('.openBtn');
btnMenu.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.toggle('menuopen');
})