import express from "express";
import projectCtrl from "../controllers/project.controller.js";

const router = express.Router();

router.route("/")
.get(projectCtrl.list)
.post(projectCtrl.create)
.delete(projectCtrl.removeAll);

router.param("projectId", projectCtrl.projectById);

router.route("/:projectId")
.get(projectCtrl.read)
.put(projectCtrl.update)
.delete(projectCtrl.remove);


export default router;
