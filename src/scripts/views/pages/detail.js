/* eslint-disable import/no-cycle */
import RestaurantSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorit-button-initiator';
import ReviewInitiator from '../../utils/review-initiator';
import { createDetailBody, createHeroDetail, createLoader } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `
      <div class="hero hero--detail"></div>
      <main id="main">
        <section class="container">
          <div id="loader-container"></div>
          <div class="detail" id="root-content"></div>
        </section>
      </main>
      <div id="favorite-Button-container"></div>
    `;
  },
  async afterRender() {
    const restaurantContainer = document.querySelector('#root-content');
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.innerHTML = createLoader();
    const hero = document.querySelector('.hero');
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(id);
    loaderContainer.innerHTML = '';
    hero.style.backgroundImage = `url('${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}')`;
    hero.innerHTML = createHeroDetail(restaurant);
    restaurantContainer.innerHTML = createDetailBody(restaurant);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-Button-container'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });

    ReviewInitiator.init({
      id,
      name: document.querySelector('#review-name'),
      review: document.querySelector('#review-review'),
      form: document.querySelector('#review-form'),
    });
  },
};

export default Detail;
