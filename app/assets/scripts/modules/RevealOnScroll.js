/* Import throttle lodash library 
we just need to give 2 argument: 
- 1st the function that you want to run
- 2nd is how many miliseconds you want to have to wait before that function can run again
*/
import throttle from 'lodash/throttle';
/* debounce is similar with throttle but debounce only run in resizing browser 
this will improve and fix fail calculate when browser resized
*/
import debounce from 'lodash/debounce';

class RevealOnScroll {
    constructor(els, tresholdPercent){
        /* create object property itemsToReveal and select all element that matched by class .feature-item */
        this.itemsToReveal = els;
        this.tresholdPercent = tresholdPercent;
        /* this line will minimize usage of ask browser height, by saving it into memory (constructor property) */
        this.browserHeight = window.innerHeight;
        /* call hideInitially() */
        this.hideInitially(); 
        /* create object property scrollThrottle, to use lodash trottle() 
        that contain function that want to rund in the first argument, 
        and 2nd how many miliseconds you want to wait before this method can be called again*/
        this.scrollThrottle = throttle(this.calcCaller, 500).bind(this);
        /* call events()*/
        this.events();
    }

    events(){
        /* every the browser detect scroll, it's going to call this scrollThrottle function*/
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            console.log("resize just run");
            /* call browser innerHeight function and store it into browserHeight */
            this.browserHeight = window.innerHeight;
        }, 330))
    }

    /* method to detect of each element on array, that isRevealed still equals to false run calculateIfScrolledTo() */
    calcCaller(){
        console.log("scroll function ran");
            this.itemsToReveal.forEach(el => {
                if (el.isRevealed == false) {
                    this.calculateIfScrolledTo(el);
                }
        })
    }
    calculateIfScrolledTo(el) {
        /* We don't call calculate element for each 500 millisecond anymore 
        But we use conditional mode, 
        if number of window scrollY + number of the browser window height in current viewport is greater than offsetTop number
        (reach of an element in the very bottom treshold)
        */
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            console.log("element was calculated");
            /* getBoundingClientRect().top : take that bounding rectangle number and then device by the height of the browser window*/
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100;
            /* only if scrollPercent < this.tresholdPercent, add reveal-item--is-visible and set isRevealed true*/
            if (scrollPercent < this.tresholdPercent) {
                el.classList.add("reveal-item--is-visible");
                el.isRevealed = true;
                /* if itemsToReveal value of isLastItem == true, remove event listener scroll & scrollThrottle */
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }
    }

    hideInitially(){
        /* for each itemsToReveal in array, add class reveal-item beside class .feature-item */
        /* then set isRevealed to false */
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });
        /* count length of itemsToReveal array with calling length, 
         minus 1 because array start from 0, then if reach last item, 
         set isLastItem to true  */
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}

export default RevealOnScroll;