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


if (localStorageValue > 0) {
    count = parseInt(localStorageValue);
    let water = document.querySelector('.water--js');
    water.classList.add('water-animation-add');

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
        let water = document.querySelector('.water--js');
        water.classList.remove('water-animation-disappear')
        water.classList.remove('water-animation-remove');
        water.classList.add('water-animation-add');
        let newone = water.cloneNode(true);
        water.parentNode.replaceChild(newone, water);
    }
})

remove.addEventListener('click', () => {
    if (count > 0) {
        count = count - 1;
        counter.innerHTML = count;
        localStorage.setItem(key, count);
        if (count == 0) {
            count = 0;
            let water = document.querySelector('.water--js');
            water.classList.remove('water-animation-add');
            water.classList.remove('water-animation-remove');
            water.classList.add('water-animation-disappear')
        } else {

            let water = document.querySelector('.water--js');
            water.classList.remove('water-animation-disappear')
            water.classList.remove('water-animation-add');
            water.classList.add('water-animation-remove');
            let newone = water.cloneNode(true);
            water.parentNode.replaceChild(newone, water);
        }
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