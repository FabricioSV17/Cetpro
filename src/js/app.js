const menuBar = document.querySelector('.Encabezado-menuBar');
const menu = document.querySelector('.navegacion-principal');
const menuClose = document.querySelector('.Close');
menuBar.addEventListener('click',()=>{
    menu.classList.add('active');
    menuBar.classList.add('active');
    menuClose.classList.add('active');

});
menuClose.addEventListener('click',()=>{
    menu.classList.remove('active');
    menuBar.classList.remove('active');
    menuClose.classList.remove('active');
})