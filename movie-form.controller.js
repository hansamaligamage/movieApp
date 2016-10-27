app.controller('MovieAddController', MovieAddController);

function MovieAddController(MovieDataService) {

    var vm = this;
    vm.movieSaved = false;
    var movieId;

    vm.addMovie = function () {
        vm.movie = {
            'title': vm.title,
            'description': vm.description,
            'director': vm.director,
            'year': vm.year,
            'rating': vm.rating,
            'language': vm.language,
            'characters' : []
        };
        MovieDataService.addMovie(vm.movie).then(function (result) {
            movieId = result;
            vm.movieSaved = true;
        });
    }

    vm.addCharacter = function () {
        var character = {
            'character': vm.characters.character,
            'actor': vm.characters.actor
        };
        MovieDataService.addCharacters(movieId, character).then(function (result) {
            vm.movie.characters.push(character);
        });
    }
}