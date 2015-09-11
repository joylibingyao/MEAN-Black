var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');
module.exports = (function() {//required by routes.js
 return {
  add_question:function(req,res){
  	var que= new Question(req.body);
  	que.save(function(err){
      if(err) {
        console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added!');
          res.redirect('/');
        }
      });
  },


  get_ques:function(req,res){
    Question.find({},function(err,results){
      if(err) {
       console.log(err);
     } else {
      res.json(results);
    }
  });
  },

  get_que_by_id:function(req,res){
    Question.find({_id:req.params.id},function(err,results){
      if(err) {
       console.log(err);
     } else {
      res.json(results);
    }
  });
  },

  add_answer:function(req,res){   

    var ans= new Answer(req.body);
    Question.findOne({_id: req.params.id}, function(err, que){
        // data from form on the front end
        var ans= new Answer(req.body);
        //  set the reference like this:
        ans._que = que._id;
        que.answer.push(ans);
        // now save both to the DB
        ans.save(function(err){
          que.save(function(err){
            if(err) {
             console.log('Error');
           } else {
            res.redirect('/');
          }
        });
        });
      });
  },
  get_ans:function(req,res){

   Question.findOne({_id: req.params.id})
   .populate('answer')
   .exec(function(err, answer) {
    res.json(answer);
  });
 },

 like:function(req,res){
  console.log(req.params.id);
    Answer.update({_id:req.params.id},
      {$inc:{like:1}},
      function(err,results){
 });
 }

}
})();
















