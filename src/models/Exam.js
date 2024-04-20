import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentResultSchema = new Schema({studentId: String, timeCompleted: Date, result: Number});

const questionSchema = new Schema({
	idQuestion: String,
	titleQuestion: String,
	answers: [String],
	correctAnswer: Number,
	explanation: String
});

const examSchema = new Schema({
	idExam: String,
	title: String,
	students: [studentResultSchema],
	status: String,
	timeStart: Date,
	timeFinish: Date,
	questions: [questionSchema]
});

const Exam = mongoose.model('Exam', examSchema);

export default Exam;
