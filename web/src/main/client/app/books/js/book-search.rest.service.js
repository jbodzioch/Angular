angular.module('app.books').factory('bookRestService', function ($http, currentContextPath) {
    'use strict';

    return {
        search: function (titlePrefix) {
            return $http.get(currentContextPath.get() + 'rest/books/books-by-title', {params: {titlePrefix: titlePrefix}});
        },
        deleteBook: function (bookId) {
            return $http.delete(currentContextPath.get() + 'rest/books/book/' + bookId);
        },
        saveBook: function (book) {
            return $http.post(currentContextPath.get() + 'rest/books/book/', book);
        },
        updateBook: function (book) {
            return $http.put(currentContextPath.get() + 'rest/books/book/', book);
        }
    };
});
