class MobileMenu{
    constructor(){
        /* Avoid Spaghetti code by creating each object property*/
        /* document.querySelector() only select the first element that matched by class .site-header__menu-icon*/
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.siteHeader = document.querySelector(".site-header")
        this.events();
    }

    /* Creating method event() to lookout for this menu icon element being clicked, and then respon that click */
    /* from menuIcon property we call addEventListerner("event that want to listen", response to that click) */ 
    /*  */
    events(){
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu());
        /* pushes esc to close  */
        document.addEventListener("keyup", e => this.keyPressHandler(e));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.toggleTheMenu();
        }
    }

    /* toggleThemenu() method to add element when menuIcon was clicked */
    /* classList property is read-only to manipulate class content attribute through a DOMTokenList object. */
    /* toggle() is method from classList to add or remove CSS class from html file. */
    toggleTheMenu(){
        this.menuContent.classList.toggle("site-header__menu-content--is-visible");
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
    }
}

/* It will allow other file that import MobileMenu.js to use MobileMenu class */
export default MobileMenu;