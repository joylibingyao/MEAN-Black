myApp.controller('front', function ($scope, $location, fac){
	var user = prompt("What is your name?");
	fac.save_name(user,$location.path('/main'));

})