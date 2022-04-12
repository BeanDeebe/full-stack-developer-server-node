import express from 'express';
import cors from 'cors';
import usersController from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import helloController from "./controllers/hello-controller.js";
import tuitsDao from "./daos/tuits-dao.js";
import mongoose from 'mongoose';

const DB_CONNECTION_STRING = "mongodb+srv://deanbeebe:PoiLkjMnb123!@webdev.apu22.mongodb.net/WebDev?retryWrites=true&w=majority"
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();


app.use(cors());
app.use(express.json());

const p = tuitsDao.findAllTuits();
p.then((tuits) => console.log(tuits));

helloController(app);
usersController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);