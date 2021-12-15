import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
// import Modal from './modules/Modal';
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader';

const mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.testimonial'), 75);
new RevealOnScroll(document.querySelectorAll('.feature-item'), 60);
let stickyHeader = new StickyHeader();
//new Modal();

let modal

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        if (typeof modal == 'undefined') {
            import(/*webpackChunkName: 'Modal' */ './modules/Modal')
                .then(x => {
                    modal = new x.default() // creates new instance of modal class.
                    
                    setTimeout(() => modal.openTheModal(), 20)
                })
                .catch(() => console.log('there was a problem!'))            
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept();
}

