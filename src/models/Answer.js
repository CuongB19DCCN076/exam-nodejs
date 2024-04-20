import mongoose from "mongoose";
const Schema = mongoose.Schema;

const answerItemSchema = new Schema({
	idQuestion: {
		type: String,
		required: true
	},
	answer: {
		type: Number,
		required: true
	}
});

const studentAnswersSchema = new Schema({
	idExam: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Exam'
	},
	idStudent: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Student'
	},
	timeCompleted: {
		type: Date,
		required: true
	},
	result: {
		type: Number,
		required: true
	},
	answersStudent: [answerItemSchema]
});

const Answer = mongoose.model('Answer', studentAnswersSchema);

export default Answer;
