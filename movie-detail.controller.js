app.controller('MovieDetailController', MovieDetailController);

function MovieDetailController(MovieDataService, $stateParams) {

    var vm = this;

    init();
   
    function init() {
        MovieDataService.getMovie($stateParams.id).then(function (data) {
            var movieId = $stateParams.id;
            vm.movie = data;
        });
    }
}