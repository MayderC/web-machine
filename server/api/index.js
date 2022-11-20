import express from "express";
import contactRoutes from "./routes/contact.routes.js";
import { conexion } from "./database/conexion.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/contact", contactRoutes());

conexion();

export default app;
