/* eslint-disable import/no-cycle */
import RestaurantSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import ReviewInitiator from '../../utils/review-initiator';
import { createDetailBody, createHeroDetail } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `
      <div class="hero hero--detail"></div>
      <main id="main">
        <section class="container">
          <div class="detail" id="root-content"></div>
        </section>
      </main>
    `;
  },
  async afterRender() {
    const { id } = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detail(id);
    const hero = document.querySelector('.hero');
    const restaurantContainer = document.querySelector('#root-content');
    hero.style.backgroundImage = `url('${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}')`;
    hero.innerHTML = createHeroDetail(restaurant);
    restaurantContainer.innerHTML = createDetailBody(restaurant);

    ReviewInitiator.init({
      id,
      name: document.querySelector('#review-name'),
      review: document.querySelector('#review-review'),
      form: document.querySelector('#review-form'),
    });
  },
};

export default Detail;
