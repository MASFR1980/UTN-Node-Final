import { Router } from "express";
import {
  createData,
  getAllData,
  getDataById,
  updateData,
  deleteData
} from "../controllers/dataController.js";

const dataRouter = Router();


dataRouter.post("/", createData);


dataRouter.get("/", getAllData);


dataRouter.get("/:id", getDataById);


dataRouter.put("/:id", updateData);


dataRouter.delete("/:id", deleteData);

export { dataRouter };