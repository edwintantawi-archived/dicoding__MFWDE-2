import FavoriteRestaurant from '../data/favoriteRestaurant-idb';
import { createFavoriteButton, createUnFavoriteButton } from '../views/templates/templates-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isFavorite(id)) {
      this._renderUnFavorite();
    } else {
      this._renderFavorite();
    }
  },
  async _isFavorite(id) {
    const restaurant = await FavoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },
  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createUnFavoriteButton();
    const favoriteButton = document.querySelector('#favorit-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
  _renderUnFavorite() {
    this._favoriteButtonContainer.innerHTML = createFavoriteButton();
    const favoriteButton = document.querySelector('#favorit-button');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
