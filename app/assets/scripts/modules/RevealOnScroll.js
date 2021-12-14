import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';


class RevealOnScroll{
    constructor(els, thresholdPercent) {
        //console.log('working!')
        this.itemsToReveal = els
        this.browserHeight = window.innerHeight
        this.thresholdPercent = thresholdPercent
        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this) 
        
        this.events()
    }

    events() {
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight
        }, 330))
    }

    calculateIfScrolledTo(el, index) {

        if (window.scrollY + this.browserHeight > el.offsetTop) {
            console.log('el was calculated!', index)

            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100

            if (scrollPercent < this.thresholdPercent) {
                console.log(`revealed`)
                el.classList.add('reveal-item--is-visible')
                el.isRevealed = true
                
                if (el.isLastItem) {
                    console.log('last item', index)
                    window.removeEventListener('scroll', this.scrollThrottle)
                }  
            }
         
        }

    }

    calcCaller() {
            this.itemsToReveal.forEach((el, index) => {
                if (el.isRevealed == false) {
                    this.calculateIfScrolledTo(el, index)
                }
            })
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add('reveal-item')
            el.isRevealed = false;
        })
        console.log(this.itemsToReveal.length - 1)
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }
}

export default RevealOnScroll;