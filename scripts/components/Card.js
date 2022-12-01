import { cardConfig } from '../utils/constants.js';

class Card {
  constructor(item, selector) {
    this._item = item;
    this._selector = selector
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._selector)
    .content
    .querySelector('.content__card')
    .cloneNode(true);
    return cardElement;
  }

  render(){
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(cardConfig.picture);
    this._cardImage.src = this._item.image;
    this._element.querySelector(cardConfig.header).textContent = this._item.title;
    this._element.querySelector(cardConfig.text).textContent = this._item.description;
    this._cardImage.alt = this._item.title;
    return this._element;
  }
}

export default Card;
