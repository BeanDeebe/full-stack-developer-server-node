import express from 'express';
import cors from 'cors';
import usersController from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
usersController(app);
tuitsController(app);
app.listen(4000);