app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('movieList', {
        url: '/',
        templateUrl: 'movie-list.html',
        controller: 'MovieController as movie'
    }).state('movieForm', {
        url: '/add',
        templateUrl: 'movie-form.html',
        controller: 'MovieAddController as movieadd'
    }).state('movieDetail', {
        url: '/detail/:id',
        templateUrl: 'movie-detail.html',
        controller: 'MovieDetailController as moviedetail'
    })

});
