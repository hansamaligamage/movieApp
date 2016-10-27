app.directive('movieRating', movieRating);

function movieRating() {
    return {
        restrict: 'A',
        scope: {
            ratingValue: '='
        },
        template: `<ul class="rating"> <li ng-repeat="star in stars" ng-class="star"> \u2605 </li> </ul>`,
        link: function (scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < 10; i++) {
                scope.stars.push({ filled: i < scope.ratingValue });
            }
        }
    }
}
