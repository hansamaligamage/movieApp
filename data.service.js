app.service('MovieDataService', MovieDataService);

function MovieDataService($http) {
    var self = this;
    var movies = [];

    self.getMovies = function () {
        return $http.get('http://localhost:3000/movies').then(function (response) {
            movies = response.data;
            return movies;
        });
    }

    self.addMovie = function (movie) {
        return $http.post('http://localhost:3000/movies', movie).then(function (response) {
            return response.data.id;
        })
    }

    self.addCharacters = function (id, character) {
        return $http.post('http://localhost:3000/movies/' + id + '/characters', character).then(function (response) {
            return response;
        })
    }

    self.getMovie = function (id) {
        return $http.get('http://localhost:3000/movies/' + id + '?_embed=characters').then(function (response) {
            return response.data;
        })
    }

}
