import RestaurantSource from '../../data/restaurant-source';
import { createLoader, createRestaurantCard } from '../templates/templates-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__content">
          <h1 class="hero__title">
            Find the best places to eat <mark>around you</mark>.
          </h1>
          <p class="hero__description">
            Get a cool atmosphere for your every day to fill your day at the best
            restaurant near you with the best available facilities, making you
            comfortable...
          </p>
          <a href="#main" class="hero__cta">Find Now</a>
        </div>
      </div>
      <main id="main">
        <section class="container">
          <div id="loader-container"></div>
          <div class="list" id="root-content"></div>
        </section>
      </main>
    `;
  },
  async afterRender() {
    const restaurantContainer = document.querySelector('#root-content');
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.innerHTML = createLoader();
    const restaurants = await RestaurantSource.list();
    loaderContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantCard(restaurant);
    });
  },
};

export default Home;
