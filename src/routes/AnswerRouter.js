import express from "express"
const AnswerRouter = express.Router()
import AnswerController from "./../controllers/AnswerController.js"
AnswerRouter.post('', AnswerController.createAnswer)
AnswerRouter.get('/:id', AnswerController.getAnswer)
AnswerRouter.get('', AnswerController.getAllAnswer)
AnswerRouter.put('/:id', AnswerController.updateAnswer)
AnswerRouter.delete('/:id', AnswerController.deleteAnswer)


export default AnswerRouter;
