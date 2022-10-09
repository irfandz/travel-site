import '../styles/styles.css';
import 'lazysizes';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Sticky from './modules/Sticky';

new Sticky();
new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 60); 
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60); 
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault();
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log("There was a problem"));
        } else {
            modal.openTheModal();
        }
    })
})

if (module.hot){
    module.hot.accept();
}

