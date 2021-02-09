const _ = require('lodash');

import notifyError from './error-notification.js'
import { fetchBasics } from './fetch-countries-basics.js'
import refs from './refs.js';
import updateCountriesMarkup from './update-markup.js'
//===================================================================================

refs.inputRef.addEventListener('input', _.debounce((onSearchCountriesInput), 500));

function onSearchCountriesInput(event) {
   fetchBasics.query = event.target.value;
   const cleanMarkup = () => refs.countriesContainer.innerHTML = '';

   if(fetchBasics.query.trim() !==  '') {
    fetchBasics.fetchCountries()
      .then((countries) => { 
        if(countries.length > 10) {
          notifyError('Too many matches found.', 'Please enter a more specific query!');
          return;
        } 
        cleanMarkup();
        updateCountriesMarkup(countries)
      })
   }

  if(fetchBasics.query === '') {
    cleanMarkup();
  } 
}