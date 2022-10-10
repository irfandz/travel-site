import { throttle } from "lodash";
import { debounce } from "lodash";
class Sticky {
    constructor() {
        this.stickies = document.querySelector(".site-header");
        this.pageSection = document.querySelectorAll(".page-section");
        this.browserHeight =  window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }
    events(){
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 500));
        window.addEventListener("resize", debounce(() => {
            // console.log("resize just run");
            /* call browser innerHeight function and store it into browserHeight */
            this.browserHeight = window.innerHeight;
        }, 330))
    }

    runOnScroll(){
        this.determineScrollDirection();

        if (window.scrollY > 60) {
            this.stickies.classList.add("site-header--dark");
        } else {
            this.stickies.classList.remove("site-header--dark");
        }
        this.pageSection.forEach(el => this.calcSection(el))
    }    

    determineScrollDirection(){
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down';
        } else {
            this.scrollDirection = 'up';
        }
        this.previousScrollY = window.scrollY;
    }

    calcSection(el){
        if (window.scrollY + this.browserHeight > el.offsetTop && window.scrollY < el.offsetTop + el.offsetHeight) {
            let scrollPercent = el.getBoundingClientRect().top / this.browserHeight * 100
            if (scrollPercent < 15 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up' ) {
                let matchingLink = el.getAttribute("data-matching-link")
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"));
                document.querySelector(matchingLink).classList.add("is-current-link");
            }
        } 
    }

}

export default Sticky;