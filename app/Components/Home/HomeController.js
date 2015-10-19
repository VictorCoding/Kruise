angular
      .module('Kruise')
      .controller('HomeCtrl', HomeController);
      
function HomeController($scope) {  
  $scope.location = [29.752621, -95.388652];
  
  $scope.$watch('Address', function(val){
    if(val){
      console.log(val);
    }
  });
  
  $scope.placeChanged = function placeChanged() {      
    var place = this.getPlace();    
    $scope.location = [place.geometry.location.lat(), place.geometry.location.lng()];
  };
}      