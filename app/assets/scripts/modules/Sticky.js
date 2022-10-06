import { throttle } from "lodash";
class Sticky {
    constructor() {
        this.stickies = document.querySelector(".site-header");
        this.events();
    }
    events(){
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 500));
    }

    runOnScroll(){
        if (window.scrollY > 60) {
            this.stickies.classList.add("site-header--dark");
        } else {
            this.stickies.classList.remove("site-header--dark");
        }
    }    

}

export default Sticky;