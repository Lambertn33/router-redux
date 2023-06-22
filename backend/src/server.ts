import bodyParser from "body-parser";
import express  from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route";

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);

app.use(cors());

app.listen(5000);

