import Exam from "./../models/Exam.js"

const ExamController = {
	createExam: async (req, res) => {
		console.log("Exam----------------------");
		console.log(req.body);
		const exam = new Exam(req.body);
		try {
			await exam.save();
			res.status(201).send(exam);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	getExam: async (req, res) => {
		try {
			const exam = await Exam.findById(req.params.id);
			if (! exam) {
				return res.status(404).send();
			}
			res.status(200).send(exam);
		} catch (error) {
			res.status(500).send(error);
		}
	},
	updateExam: async (req, res) => {
		try {
			const exam = await Exam.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
				runValidators: true
			});
			if (! exam) {
				return res.status(404).send();
			}
			res.status(200).send(exam);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	deleteExam: async (req, res) => {
		try {
			const exam = await Exam.findByIdAndDelete(req.params.id);
			if (! exam) {
				return res.status(404).send();
			}
			res.status(200).send(exam);
		} catch (error) {
			res.status(500).send(error);
		}
	},
	getAllExam: async (req, res) => {
		try {
			const exams = await Exam.find();
			res.status(200).send(exams);
		} catch (error) {
			res.status(500).send(error);
		}
	}
}
export default ExamController;
