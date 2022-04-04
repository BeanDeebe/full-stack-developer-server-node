import express from 'express'
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";

const app = express();
app.use(express.json());
userController(app);
app.listen(4000);