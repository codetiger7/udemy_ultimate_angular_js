(function() {
    "use strict";

    angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope)
    {

        $scope.classified = {
          title: "First Item",
          price: "1,000,000",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa quiofficia deserunt mollit anim id est laborum."

        };

    });
})();
