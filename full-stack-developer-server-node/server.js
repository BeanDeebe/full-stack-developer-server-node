import express from 'express';
import cors from 'cors';
import usersController from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import helloController from "./controllers/hello-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
usersController(app);
tuitsController(app);
app.listen(process.env.PORT || 4000);