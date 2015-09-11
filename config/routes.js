  // This is our routes.js file located in /config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  var question = require('./../server/controllers/question.js');

  module.exports = function(app) {
  	app.post('/add_question',function(req,res){
  		question.add_question(req,res);
  	});

  	app.get('/get_ques',function(req,res){
  		question.get_ques(req,res);
  	});
    app.get('/get_que_by_id/:id',function(req,res){
      question.get_que_by_id(req,res);
    });

    app.post('/add_answer/:id',function(req,res){
      question.add_answer(req,res);
    });
    app.get('/get_ans/:id',function(req,res){
      question.get_ans(req,res);
    });
    app.get('/like/:id',function(req,res){
      question.like(req,res);
    });
  };







