import express from 'express';
import cors from 'cors';
import apiRoute from './api/route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoute);
app.use("*", (req, res, next) => res.status(404).json({error: "Not found"}));

export default app;