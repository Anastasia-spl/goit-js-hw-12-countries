import notifyError from './error-notification.js'

export const fetchBasics = {
    searchQuery: null,
    fetchCountries() {
      const url = `https://restcountries.eu/rest/v2/name/${this.query}`;
      return fetch(url)
        .then((response) => {
            if(response.status === 404) {
                notifyError('Countries not found!', 'Try another name.');
            }
            return response;
        })
        .then((response) => {
            if(response.ok === true) { 
                return response.json()
            }
            return response;
        })
    },

    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
}






