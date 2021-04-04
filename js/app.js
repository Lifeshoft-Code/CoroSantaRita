//loader
window.addEventListener('load', function(){
    let loaderContainer = document.getElementById('loader');
    loaderContainer.style.display = 'none';
})


//menu
let btnMenu = document.getElementById('btn-icon-menu');
let menuOpen = false;
btnMenu.addEventListener("click", function(){
    if(!menuOpen){
        btnMenu.classList.add('open');
        menuOpen = true;
    }else{
        btnMenu.classList.remove('open')
        menuOpen = false;
    }
    
    let menuItems = document.getElementById('menu-Items');
    menuItems.classList.toggle('appear');

});
//mutacion de menu

window.addEventListener('load', function(){
    var navbar = document.getElementById('main-menu');
    document.addEventListener('scroll', function(){
        
        if(scrollY >= 200){
            navbar.className = 'menu-modified';
        }
        else if(scrollY >= 0){
            

            navbar.className = 'main-menu';
            
        }

        if(innerWidth <= 900 ){
            
            navbar.className = 'main-menu';
        }
    })
})
//submenu

let btnSubMenu = document.getElementById('btn-submenu');
btnSubMenu.addEventListener('click', (e) =>{
    e.preventDefault();
    
    let subMenu = document.getElementById('submenu');
    subMenu.classList.add('submenu-appear');
   
    btnSubMenu.style.color = 'var(--color-heading)';

    
    
        
    
    
    
    
});
let submenuBtnCancel = document.getElementById('submenu-btn-cancel');
    submenuBtnCancel.addEventListener('click', () =>{
        submenuBtnCancel.classList.remove('submenu-appear');
    })

//btn de theme dark/light y funcion 

var firstCircleV = document.getElementById('firstCircle');
var middleCircleV = document.getElementById('middleCircle');
var lastCircleV = document.getElementById('lastCircle');


firstCircleV.addEventListener('click', function () {
     //cambio de la figura cuando se da click
     firstCircleV.classList.toggle('c1-M');
     middleCircleV.classList.toggle('c2-M');
     lastCircleV.classList.toggle('c3-M');

     //animacion de aumento de escala temporal del btn
    setTimeout(() => {
        lastCircleV.style.transform= 'scale(1)'
        
    }, 600);
    setTimeout(() => {
        lastCircleV.style.transform= 'scale(1.8)'
    }, 100);
    //alternando el modo light y dark en la etiqueta html
     var themeMode = document.getElementsByTagName('html');
        themeMode[0].toggleAttribute('darkMode');
   
    if(themeMode[0].hasAttribute('darkMode')){
        localStorage.setItem('StateDarkMode', 'true');
    } else{
        localStorage.setItem('StateDarkMode', 'false')
    }
})

//comprobando si el cliente habia puesto el modo claro o el modo oscuro

if(localStorage.getItem('StateDarkMode') === 'true'){
    var themeMode = document.getElementsByTagName('html');
        themeMode[0].setAttribute('darkMode','');
}else{
    var themeMode = document.getElementsByTagName('html');
    themeMode[0].removeAttribute('darkMode');
}
