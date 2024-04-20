import express from "express"
const ExamRouter = express.Router()
import ExamController from "./../controllers/ExamController.js"

ExamRouter.post('', ExamController.createExam)
ExamRouter.get('/:id', ExamController.getExam)
ExamRouter.get('', ExamController.getAllExam)
ExamRouter.put('/:id', ExamController.updateExam)
ExamRouter.delete('/:id', ExamController.deleteExam)


export default ExamRouter;
