import countriesTpl from '../templates/countries.hbs';
import refs from './refs.js';

export default function updateCountriesMarkup(value) {
    const markup = countriesTpl(value);
    refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}
