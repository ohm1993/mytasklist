var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$http){

   var refresh = function(){
        $http.get('/contactlist').then(function successCallback(response) {
           $scope.contactList = response.data;
           }, function errorCallback(response) {
           console.log("responce value is",response);
        });
   };

refresh();

  $scope.addContact = function(){
    $http.post('/contactlist',$scope.contact).then(function successCallback(response){
         console.log("response value is",response);
         $scope.contactList = response;
         $scope.contact="";
         refresh();
    },function errorCallback(response){
        console.log("error is",response);
    });
  }

  $scope.edit = function(key){
     $http.get('/contactlist/'+key).then(function successCallback(response){
          //console.log("response value is",response);
          $scope.contact = response.data;
     },function errorCallback(response){
           console.log("error value is",response);
     })
  };

  $scope.delete = function(key){
      $http.delete('/contactlist/'+key).then(function successCallback(response){
           console.log("responce value is",response);
           $scope.contactList = response;
           refresh();
      },function errorCallback(response){
          console.log("error value is ",response);
      });
  };

  $scope.update = function(){
      $http.put('/contactlist/'+$scope.contact._id,$scope.contact).then(function successCallback(response){
        $scope.contactList = response;
        $scope.contact = "";
        refresh();
        console.log("response value is",response);
      },function errorCallback(response){
        console.log("error value is ",response);
      });
  }
});
