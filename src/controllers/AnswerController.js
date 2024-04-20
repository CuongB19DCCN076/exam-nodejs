import Answer from "../models/Answer.js";

const AnswerController = {
	createAnswer: async (req, res) => {
		const answer = new Answer(req.body);
		try {
			await answer.save();
			res.status(201).send(answer);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	getAnswer: async (req, res) => {
		try {
			const answer = await Answer.findById(req.params.id);
			if (! answer) {
				return res.status(404).send();
			}
			res.status(200).send(answer);
		} catch (error) {
			res.status(500).send(error);
		}
	},
	updateAnswer: async (req, res) => {
		try {
			const answer = await Answer.findByIdAndUpdate(req.params.id, req.body, {
				new: true,
				runValidators: true
			});
			if (! answer) {
				return res.status(404).send();
			}
			res.status(200).send(answer);
		} catch (error) {
			res.status(400).send(error);
		}
	},
	deleteAnswer: async (req, res) => {
		try {
			const answer = await Answer.findByIdAndDelete(req.params.id);
			if (! answer) {
				return res.status(404).send();
			}
			res.status(200).send(answer);
		} catch (error) {
			res.status(500).send(error);
		}
	},
	getAllAnswer: async (req, res) => {
		try {
			const answers = await Answer.find();
			res.status(200).send(answers);
		} catch (error) {
			res.status(500).send(error);
		}
	}
}
export default AnswerController;
