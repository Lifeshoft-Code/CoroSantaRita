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

let btnCloseSubMenu= document.getElementById('submenu-btn-cancel');
btnCloseSubMenu.addEventListener('click', function(){
    let subMenu = document.getElementById('submenu');
    subMenu.classList.remove('submenu-appear');
})
let submenuBtnCancel = document.getElementById('submenu-btn-cancel');
    submenuBtnCancel.addEventListener('click', () =>{
        submenuBtnCancel.classList.remove('submenu-appear');
    });
