myApp.controller('main',function($scope,$location, fac){

  fac.get_name(function(data){
    $scope.current_user=data;
  });
  fac.get_ques(function(data){
  	$scope.ques=data;
  });
  $scope.goQuestion=function(id){
    fac.save_que_id(id);
    $location.path('/question/'+id);
  }

  $scope.answerQuestion=function(id){
  	$location.path('/new_answer');
  	fac.save_que_id(id);
  }

});

