(function() {
    "use strict";

    angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $state, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

      var vm = this;

      vm.categories;
      vm.classified;
      vm.classifieds;
      vm.closeSidebar     = closeSidebar;
      vm.deleteClassified = deleteClassified;
      vm.editClassified   = editClassified;
      vm.editing;
      vm.openSidebar      = openSidebar;
      vm.saveClassified   = saveClassified;

      classifiedsFactory.getClassifieds().then(function(classifieds) {
        vm.classifieds = classifieds.data;
        vm.categories = getCategories(vm.classifieds);
      });

      var contact = {
        name: "Brian",
        phone: "97562233",
        email: "brianopedal@mac.com"
      }


      function openSidebar() {
        $state.go('classifieds.new');
      }

      function closeSidebar() {
        $mdSidenav('left').close();
      }

      function saveClassified(classified) {
        if (classified){
          classified.contact = contact;
          vm.classifieds.push(classified);
          vm.classified = {};
          closeSidebar();
          showToast("Classifieds Saved!");
        }
      }

      function editClassified(classified) {
        vm.editing = true;
        openSidebar();
        vm.classified = classified;
      }

      function saveEdit() {
        vm.editing = false;
        vm.classified = {};
        closeSidebar();
        showToast("Edit Saved!");
      }

      function deleteClassified(event, classified) {
        var confirm = $mdDialog.confirm()
        .title("Are you sure you want to delete " + classified.title + "?")
        .ok("Yes")
        .cancel("No")
        .targetEvent(event);

        $mdDialog.show(confirm).then(function() {
          var index = $scope.classifieds.indexOf(classified);
          vm.classifieds.splice(index, 1);
        }, function() {

        });
      }

      function showToast(message) {
        $mdToast.show(
          $mdToast.simple()
          .content(message)
          .position('top, right')
          .hideDelay(3000)
        );
      }

      function getCategories(classifieds) {
        var categories = [];

        angular.forEach(classifieds, function(item) {
          angular.forEach(item.categories, function(category) {
            categories.push(category);
          });
        });

        return _.uniq(categories);
      }

    });
})();
