angular.module('app.books').controller('NewAuthorModalController', function ($scope) {
    'use strict';

    $scope.newFirstName ='';
    $scope.newLastName ='';
    
    $scope.addNewAuthor = function () {
    	$scope.author = $scope.author + "," + $scope.newFirstName + " " + $scope.newLastName;
    };
    
});