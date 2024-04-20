import ExamRouter from "./ExamRouter.js"
import AnswerRouter from "./AnswerRouter.js"
const routes = (app) => {
	app.use('/api/v1/exams', ExamRouter)
	app.use('/api/v1/answers', AnswerRouter)
}

export default routes;
