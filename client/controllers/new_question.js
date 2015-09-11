myApp.controller('new_question',function($scope,$location, fac){
	$scope.add_question=function(){
		$scope.add_q_success=''
		$scope.err_question='';
		if ($scope.newQ.text.length<10) 
		{
			$scope.err_question='Questions should be more than 10 characters';
		}
		// else if($scope.newQ===null){
		// 	$scope.err_question='cannot be empty';
		// }
		else{
			fac.add_question($scope.newQ);
			$scope.add_q_success='Question added!';
		}
		
		$scope.newQ={};
	}

	$scope.goHome=function(){
		$location.path('/main');
	}




});