import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import { restaurants } from '../DATA.json';
import App from './views/app';

const listContent = document.querySelector('#root-content');

const app = new App({
  toggler: document.querySelector('.nav__toggle'),
  drawer: {
    navigation: document.querySelector('.nav'),
    layer: document.querySelector('.layer'),
  },
  header: document.querySelector('.header'),
});

restaurants.forEach((restaurant) => {
  listContent.innerHTML += `
    <div class="list__item">
      <div class="list__image--container">
        <img
          src="${restaurant.pictureId}"
          alt="${restaurant.name}"
          class="list__image"
        />
      </div>
      <div class="list__content">
        <div class="list__data">
          <h2 class="list__title">${restaurant.name}</h2>
          <p class="list__description">
            ${restaurant.description}
          </p>
        </div>
        <div class="list__info">
          <div>
            <h3>Rating:</h3>
            <span>${restaurant.rating}</span>
          </div>
          <div>
            <h3>City:</h3>
            <span>${restaurant.city}</span>
          </div>
        </div>
      </div>
    </div>
  `;
});
