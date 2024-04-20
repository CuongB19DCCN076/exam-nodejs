import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';

dotenv.config()

const app = express()
const port = process.env.PORT || 1901

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.json())
app.use(cookieParser())

routes(app);

mongoose.connect(`mongodb+srv://cuongchamchi1904:Fh2mHsQuzxhe4FpH@cluster0.87bpfbc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(() => {
	console.log('Connect Db success!')
}).catch((err) => {
	console.log(err)
})
app.listen(port, () => {
	console.log('Server is running in port: ', + port)
})
