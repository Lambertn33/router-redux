import bodyParser from "body-parser";
import express  from "express";
import cors from "cors";
import authRoutes from "./routes/public/auth.route";
import usersRoutes from "./routes/private/users.route";

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/auth', authRoutes);

app.use('/users', usersRoutes);


app.listen(5000);

