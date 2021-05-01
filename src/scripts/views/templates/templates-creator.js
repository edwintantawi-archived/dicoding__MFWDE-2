import CONFIG from '../../globals/config';

const createRestaurantCard = (restaurant) => `
  <a class="list__item" href="#/detail/${restaurant.id}">
      <div class="list__image--container">
        <img
          src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
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
    </a>
`;

const createList = (list) => {
  let collections = '';
  list.forEach((item) => {
    collections += `<li>${item.name}</li>`;
  });
  return collections;
};

const createDetailBody = (restaurant) => `
  <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" class="detail__image">
  <div class="detail__text">
    <ul class="detail__category">
      ${createList(restaurant.categories)}
    </ul>
    <p class="detail__description">${restaurant.description}</p>
    <div class="detail__menus">
      <ul>
        <li>Food's</li>
        <ul>
        ${createList(restaurant.menus.foods)}
        </ul>
      </ul>
      <ul>
        <li>Drink's</li>
        <ul>
          ${createList(restaurant.menus.drinks)}
        </ul>
      </ul>
    </div>
    
    <div class="detail__reviews">
      <h2>Customer Reviews :</h2>
      <ul>
        ${restaurant.customerReviews.map((review) => (`<li>
            <div>
            <span class="avatar">${review.name[0]}</span>
            </div>
            <div>
            <h3> ${review.name}</h3>
            <p> ${review.review}</p>
            <time> ${review.date}</time>
            </div>
          </li>`)).join(' ')}
      </ul>
    </div>
  </div>
`;

export {
  createRestaurantCard,
  createDetailBody,
};
