app.directive('movieList', movieList);

function movieList() {
    return {
        restrict: 'AE',
        scope: {
            m: '='
        },
        template: `<div ng-if="m.year !== undefined"><h2> {{m.title}} ( {{m.year}} ) </h2></div>
            <div ng-if="m.year === undefined"><h2> {{m.title}} </h2></div>
            <span>
            <div movie-rating rating-value="m.rating"></div>
            </span>
             <div> {{m.description}} </div>
            <input type="button" value="Detail" ui-sref="movieDetail({id : m.id})" class ="btn btn-primary"  />`
    };
}