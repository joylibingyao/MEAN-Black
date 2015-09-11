// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema= new mongoose.Schema({
	text:String,
	des:String,
	created:{ type: Date, default: Date.now },
	answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}]

});

mongoose.model('Question', QuestionSchema);

// //--------------------Answer---------------->>>>>>>

var AnswerSchema= new mongoose.Schema({
	_que:{type: Schema.ObjectId, ref: 'Question'},
	text:String,
	det:String,
	created:{ type: Date, default: Date.now },
	like:{type:Number,default:0},
	user:String
});

mongoose.model('Answer',AnswerSchema);



