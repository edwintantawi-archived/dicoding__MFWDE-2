/* eslint-disable import/no-cycle */
import RestaurantSource from '../data/restaurant-source';
import Detail from '../views/pages/detail';

const ReviewInitiator = {
  init({
    id, name, review, form,
  }) {
    form.addEventListener('submit', (event) => {
      this._handleSubmit({
        id, name: name.value, review: review.value, event,
      });
    });
  },
  _validateInput({ name, review }) {
    if (name === '' || review === '') {
      return false;
    }
    return true;
  },
  async _handleSubmit({
    id, name, review, event,
  }) {
    event.preventDefault();
    if (this._validateInput({ name, review })) {
      const response = await RestaurantSource.addReview({
        id, name, review,
      });
      if (response === 200) {
        Detail.afterRender();
      }
    }
  },
};

export default ReviewInitiator;
