// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere
// completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone,
// cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// Titolo
// Titolo Originale
// Lingua
// Voto

new Vue({
  el: '#app',
  data: {
    query: '',
    results: [],
    movieResults: [],
    tvShowResults: [],
    availableFlags: ['it', 'en'],
  },

  methods: {
    search() {
      this.results = [];
      this.searchMovies();
      this.searchTvShows();
      this.results = [...this.movieResults, ...this.tvShowResults];
    },

    searchMovies() {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'b241ce78d5c653dd0ccf07053f94426e',
            query: this.query,
            language: 'it-IT',
          },
        })
        .then((response) => {
          this.movieResults = response.data.results;
          this.results = [...this.movieResults, ...this.results];
        });
    },

    searchTvShows() {
      axios
        .get('https://api.themoviedb.org/3/search/tv', {
          params: {
            api_key: 'b241ce78d5c653dd0ccf07053f94426e',
            query: this.query,
            language: 'it-IT',
          },
        })
        .then((response) => {
          this.tvShowResults = response.data.results;
          this.results = [...this.tvShowResults, ...this.results];
        });
    },

    getVote(vote) {
      return parseInt(vote / 2);
    },

    getPosterSrc(result) {
      return `https://image.tmdb.org/t/p/w185${result.poster_path}`
    }
  },
});
Vue.config.devtools = true;
