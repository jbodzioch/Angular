angular.module('app.books').controller('BookModalController', function ($scope, $modal, bookService) {
    'use strict';

    $scope.title = '';
    $scope.firstName = '';
    $scope.lastName = '';
    $scope.author = '';
    
    $scope.saveNewBook = function() {
    	$scope.author=$scope.author + $scope.firstName + " " + $scope.lastName;
    	bookService.saveBook({title: $scope.title, authors: $scope.author});
    }
    
    $scope.addAuthor = function() {
        $modal.open({
            templateUrl: 'books/html/newAuthor-modal.html',
            controller: 'NewAuthorModalController',
            size: 'lg',
            scope: $scope
        });
    }
});