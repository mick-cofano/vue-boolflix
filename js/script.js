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
    movieResearch: '',
    movieList: []
  },

  methods: {
    movieCreator: function() {
      let self = this;
      self.movieList = [];

      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=b241ce78d5c653dd0ccf07053f94426e&query=' + self.movieResearch)
        .then(function(index) {
          for (let i = 0; i < index.data.results.length; i++) {
            self.movieList.push(index.data.results[i])
          }
        })

      console.log(self.movieList);
    },

    getVote(vote) {
      return parseInt(vote / 2);
    },
  },
});
Vue.config.devtools = true;
