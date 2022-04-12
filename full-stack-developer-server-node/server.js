import express from 'express';
import cors from 'cors';
import usersController from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';
import helloController from "./controllers/hello-controller.js";

mongoose.connect('mongodb://localhost:27017/webdev');
const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
usersController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);