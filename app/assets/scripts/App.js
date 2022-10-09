import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Sticky from './modules/Sticky';
import Modal from './modules/Modal';

new Modal();
let stickyHeader = new Sticky();
let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 60); 
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60); 

if (module.hot){
    module.hot.accept();
}

