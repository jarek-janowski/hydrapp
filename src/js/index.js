import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {
    registerSW
} from './pwa.js';
registerSW();

/* place your code below */


const add = document.querySelector('.add--js');
const remove = document.querySelector('.remove--js');
const key = new Date().toISOString().slice(0, 10);
let count = 0;
const counter = document.querySelector('.counter--js');
// const glasses = localStorage.getItem('glasses');
const pl = document.querySelector('.navigation__language--poland-js');
const en = document.querySelector('.navigation__language--us-js');

const localStorageValue = localStorage.getItem(key);

en.addEventListener('click', () => {
    add.innerHTML = "add glass";
    remove.innerHTML = "remove glass";
})

pl.addEventListener('click', () => {
    add.innerHTML = "dodaj szklankę";
    remove.innerHTML = "usuń szklankę";
})


// if (glasses) {
//     counter.innerHTML = glasses;
//     count = parseInt(glasses);
// } else {
//     counter.innerHTML = count;
// }

if (localStorageValue) {
    count = parseInt(localStorageValue);
} else {
    localStorage.setItem(key, 0);
}

counter.innerHTML = count;




add.addEventListener('click', () => {
    if (count >= 99) {
        count = 99;
    } else {
        count = count + 1;
        counter.innerHTML = count;
        localStorage.setItem(key, count);
        let animation = document.querySelector('.main__animation');
        animation.classList.remove('main__image--emptying');
        animation.classList.add('main__image--filling');
        let newone = animation.cloneNode(true);
        animation.parentNode.replaceChild(newone, animation);
    }
})

remove.addEventListener('click', () => {
    if (count <= 0) {
        count = 0;
    } else {
        count = count - 1;
        counter.innerHTML = count;
        localStorage.setItem(key, count);
        let animation = document.querySelector('.main__animation');
        animation.classList.remove('main__image--filling');
        animation.classList.add('main__image--emptying');
        let newone = animation.cloneNode(true);
        animation.parentNode.replaceChild(newone, animation);
    }
})



















/* add.addEventListener('click', () => {

    count = count + 1;
    counter.innerHTML = count;
    localStorage.setItem('glasses', count);

})

remove.addEventListener('click', () => {
    if (count < 0) {
        count = 0;
    } else {
        count = count - 1;
        counter.innerHTML = count;
        localStorage.setItem('glasses', count);
    }
}) */