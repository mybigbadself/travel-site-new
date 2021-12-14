class MobileMenu{

    constructor() {
        this.menuIcon = document.querySelector('.site-header__menu-icon')
        this.menuContent = document.querySelector('.site-header__menu-content')
        this.events() // call the function / method that you want to start with.
    }

    events() {
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu()) 
        // arrow function used to aviod the this keyword being updated, 
        //so the function stays as a function and not updated to the pointed refrence .... basically so the method is reuseable. 
    }

    toggleTheMenu() {
        console.log('Icon clicked !')
        this.menuContent.classList.toggle('site-header__menu-content--is-visable')
    }

}


export default MobileMenu;

/*
document.querySelector('.site-header__menu-icon').addEventListener('click', function () {
            console.log('Icon clicked')
        })

*/