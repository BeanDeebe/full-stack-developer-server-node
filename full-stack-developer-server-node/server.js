import express from 'express'
import usersController from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

const app = express();
app.use(express.json());
usersController(app);
tuitsController(app);
app.listen(4000);