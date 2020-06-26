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
const pl = document.querySelector('.navigation__language--poland-js');
const en = document.querySelector('.navigation__language--us-js');
const congratulations = document.querySelector('.main__congratulations--js');

const localStorageValue = localStorage.getItem(key);
const localStorageAdd = localStorage.getItem('add');
const localStorageRemove = localStorage.getItem('remove');
const localStorageCongratulations = localStorage.getItem('congratulations');


en.addEventListener('click', () => {
    add.innerHTML = "add glass";
    remove.innerHTML = "remove glass";
    congratulations.innerHTML = "You've drunk daily dose of water!";
    localStorage.setItem('add', 'add glass');
    localStorage.setItem('remove', 'remove glass');
    localStorage.setItem('congratulations', `You've drunk daily dose of water!`);
})

pl.addEventListener('click', () => {
    add.innerHTML = "dodaj szklankę";
    remove.innerHTML = "usuń szklankę";
    congratulations.innerHTML = "Wypiłeś(aś) dzienną dawkę wody!";
    localStorage.setItem('add', 'dodaj szklankę');
    localStorage.setItem('remove', 'usuń szklankę');
    localStorage.setItem('congratulations', 'Wypiłeś(aś) dzienną dawkę wody!');

})

if (localStorageAdd, localStorageRemove, localStorageCongratulations) {
    add.innerHTML = localStorageAdd;
    remove.innerHTML = localStorageRemove;
    congratulations.innerHTML = localStorageCongratulations;
} else {
    add.innerHTML = "dodaj szklankę";
    remove.innerHTML = "usuń szklankę";
    congratulations.innerHTML = "Wypiłeś(aś) dzienną dawkę wody!";
}


if (localStorageValue > 0) {
    count = parseInt(localStorageValue);
    let water = document.querySelector('.water--js');
    water.classList.add('water-animation-add');

} else {
    localStorage.setItem(key, 0);
}

counter.innerHTML = count;


if (count >= 10) {
    congratulations.classList.add('main__congratulations--show');
}


add.addEventListener('click', () => {
    if (count >= 99) {
        count == 99;
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
    if (count == 10) {
        const shake = document.querySelector('.main__image');
        shake.classList.add('main__image--shake')
        congratulations.classList.add('main__congratulations--show');
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
    if (count < 10) {
        const shake = document.querySelector('.main__image');
        const congratulations = document.querySelector('.main__congratulations--js');
        shake.classList.remove('main__image--shake')
        congratulations.classList.remove('main__congratulations--show');
    }
})