import express from 'express';
import cors from 'cors';
import HelloController
    from "./controllers/hello-controller.js";
import UserController
    from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

import mongoose from "mongoose";
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//     || 'mongodb://localhost:27017/tuiter';
const CONNECTION_STRING = 'mongodb+srv://SohaVankudre:Soha7120&@cluster0.jctuepg.mongodb.net/tuiter?retryWrites=true&w=majority'
    || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);

// mongoose.connect('mongodb://localhost:27017/tuiter');

const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
