import { Coffee } from '../types/datatype';

export class Card {
    cardCoffee: Coffee[];
    cards: HTMLElement;
    country?: string[];

    constructor(cardCoffee: Coffee[], cards: HTMLElement, country?: string[]) {
        this.cardCoffee = cardCoffee;
        this.cards = cards;
        this.country = country;
    }

    createCard() {
        return this.cardCoffee.forEach((el) => {
            const cardOne = document.createElement('div');
            cardOne.classList.add('card');

            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img');
            cardImg.src = el.img;
            cardImg.setAttribute('src', el.img);
            cardImg.setAttribute('alt', el.name);

            const cardInfo = document.createElement('div');
            cardInfo.classList.add('card-info');
            cardInfo.innerText = el.name + ' ' + el.weight + 'kg';

            const cardPrice = document.createElement('div');
            cardPrice.classList.add('card-price');
            cardPrice.innerText = el.price + ' ' + '$';

            const cardCountry = document.createElement('div');
            cardCountry.classList.add('card-country');
            cardCountry.innerText = el.country;

            cardOne.append(cardImg);
            cardOne.append(cardInfo);
            cardOne.append(cardPrice);
            cardOne.append(cardCountry);
            this.cards.append(cardOne);
        });
    }
}
