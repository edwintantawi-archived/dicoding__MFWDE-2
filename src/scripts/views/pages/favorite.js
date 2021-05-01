import { createLoader } from '../templates/templates-creator';

const Favorite = {
  render() {
    return `
      <div class="hero hero--detail">
        <div class="hero__content">
          <h1 class="hero__title">
            Favorite
          </h1>
          <p class="hero__location">Your favorite place that you choose</p>
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
  afterRender() {
    // const restaurantContainer = document.querySelector('#root-content');
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.innerHTML = createLoader();
    // after render
  },
};

export default Favorite;
