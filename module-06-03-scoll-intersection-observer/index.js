const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    // console.log(payload[0].isIntersecting);
    // console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
        button.disabled = false;
        // stop observing the button
        obs.unobserve(terms.lastElementChild);
    }
}

const obs = new IntersectionObserver(obCallback, {
    root: terms,
    // watch out if your element actually EVER will be visible within the window 100%!
    // otherwise the event won't fire!
    threshold: 1,
});

obs.observe(terms.lastElementChild);

