myApp.factory('fac',function($http){
	factory={}; 
	var current_user;
	var all_ques;
	var que_id_ans;
	factory.save_name=function(user){
		current_user=user;
	}

	factory.get_name=function(callback){
		callback(current_user)
	}

	factory.add_question=function(newQ){
		$http.post('/add_question',newQ).success(function(output){
		});
	}

	factory.get_ques=function(callback){
		$http.get('/get_ques').success(function(output){
			callback(output);
		})
	}
	factory.get_que_by_id=function(id,callback){
		$http.get('/get_que_by_id/'+id).success(function(output){
			callback(output);
		})
	}
	factory.get_que=function(callback){
		$http.get('/get_que_by_id/'+que_id_ans).success(function(output){
			callback(output);
		})
	}

	factory.save_que_id=function(id){
		que_id_ans=id;
	}
	factory.get_que_id=function(callback){
		callback(que_id_ans)
	}

	factory.add_answer=function(id, new_answer){

		new_answer['user']=current_user;

		$http.post('/add_answer/'+id, new_answer).success(function(output){

		});
	}

	factory.get_ans=function(callback){
		$http.get('/get_ans/'+que_id_ans).success(function(output){
			callback(output);
		});
	}
	factory.like=function(id){
		$http.get('/like/'+id).success(function(output){
			
		});
	}


	return factory;
});