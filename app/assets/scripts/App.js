import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Sticky from './modules/Sticky';

if (module.hot){
    module.hot.accept();
}

let stickyHeader = new Sticky();
let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 60); 
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60); 

