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
const glasses = localStorage.getItem('glasses');


if (glasses) {
    counter.innerHTML = glasses;
} else {
    counter.innerHTML = count;
}


add.addEventListener('click', () => {
    count = count + 1;
    counter.innerHTML = count;
    localStorage.setItem('glasses', count);
})

remove.addEventListener('click', () => {
    if (count <= 0) {
        count = 0;
    } else {
        count = count - 1;
        counter.innerHTML = count;
        localStorage.setItem('glasses', count);
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