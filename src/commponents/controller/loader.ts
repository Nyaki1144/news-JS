import { Card } from '../view/card';
import { data } from '../data/data';

const cards = document.querySelector('.cards');

const test = new Card(data, cards as HTMLElement);
test.createCard();
