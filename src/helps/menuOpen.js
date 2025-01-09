export const menuOpen = (e) => {
    const menux = document.querySelector('.menux');
    const arrow = document.querySelector('.arrow');
    const opacar = document.querySelector('.opacar');

    menux.classList.toggle('active');
    arrow.classList.toggle('active');
    opacar.classList.toggle('active');
}