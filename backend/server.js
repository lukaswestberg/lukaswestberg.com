require('dotenv').config()
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const port = 5000;
const app = express();

// <-------- MongoDB Setup -------->
let mongooseURI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.avxlk.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;
console.log(mongooseURI)
mongoose.connect(mongooseURI,{useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});


app.use(cors());
app.use(bodyParser.json());

// <-------- Router Setup -------->
import { router as apiRouter } from './routes/router';
const router = express.Router();


app.use('/', router);
app.use('/api',apiRouter)


app.listen(port, () => console.log(`Express server running on port ${port}`));