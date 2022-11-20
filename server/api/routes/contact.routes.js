import express from "express";
const router = express.Router();
import { contactSave } from "../controllers/contact.controller";

export default () => {
  router.post("/", contactSave);
  return router;
};
