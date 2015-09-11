myApp.controller('new_answer',function($scope,$location, fac){
	$scope.answer_added='';
	$scope.answer_failed='';
  	fac.get_que_id(function(data){

  	$scope.que_id=data;
  	fac.get_que_by_id(data,function(que){
  		$scope.question=que;
  	});

  })

  $scope.add_answer=function(){
  	if ($scope.newA.text.length<5) 
  	{
  		$scope.answer_failed='Answer should be al least 5 characters';
  	}
  	else{
  		fac.add_answer($scope.que_id, $scope.newA);
  		$scope.answer_added='Answer added!!';
  		$location.path('/main');
  	}
  	$scope.newA={};
  }

});