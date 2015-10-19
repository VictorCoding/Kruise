angular
      .module('Kruise')
      .controller('HomeCtrl', HomeController);
      
function HomeController($scope) {
  var self = this;
  self.yo = 'hey';
  
  $scope.$watch('query', function(val){
    if(val){
      console.log(val);
    }
  });
}      