app.controller('MovieController', MovieController);

function MovieController(MovieDataService) {

    var vm = this;

    init();

    function init() {
        MovieDataService.getMovies().then(function (data) {
            vm.movieList = data;
        });

    }

}