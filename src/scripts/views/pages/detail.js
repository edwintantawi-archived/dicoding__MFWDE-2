import RestaurantSource from '../../data/restaurant-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import { createDetailBody, createRestaurantCard } from '../templates/templates-creator';

const Detail = {
  async render() {
    return `
      <div class="hero hero--detail">
        <div class="hero__content">
        <div class="hero__rating">
            <img src="icons/star-solid.svg" alt="star"class="hero__star"/>
            <span class="hero__score">0.0</span>
          </div>
          <h1 class="hero__title">
            Find the best places to eat <mark>around you</mark>.
          </h1>
          <p class="hero__location"></p>
        </div>
      </div>
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
    const title = document.querySelector('.hero__title');
    const rating = document.querySelector('.hero__score');
    const location = document.querySelector('.hero__location');
    const restaurantContainer = document.querySelector('#root-content');
    hero.style.backgroundImage = `url('${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}')`;
    title.innerHTML = restaurant.name;
    rating.innerHTML = restaurant.rating;
    location.innerHTML = `${restaurant.address}, ${restaurant.city}`;
    restaurantContainer.innerHTML = createDetailBody(restaurant);
  },
};

export default Detail;
