myApp.controller('question',function($scope,$location, fac){

	fac.get_que(function(data){
		$scope.this_qu=data;
		console.log(data);
	});

	fac.get_ans(function(data){
		$scope.all_ans=data;
	});
	$scope.like=function(id){
		fac.like(id);
		fac.get_ans(function(data){
			$scope.all_ans=data;
		});
	}
}); 