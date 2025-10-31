import express from "express";
import projectCtrl from "../controllers/project.controller.js";
import authCtrl from "../controllers/auth.controller.js";


const router = express.Router();

router.route("/")
.get(authCtrl.requireSignin, projectCtrl.list)
.post(authCtrl.requireSignin, projectCtrl.create)
.delete(authCtrl.requireSignin, projectCtrl.removeAll);

router.param("projectId", projectCtrl.projectById);

router.route("/:projectId")
.get(authCtrl.requireSignin, projectCtrl.read)
.put(authCtrl.requireSignin, projectCtrl.update)
.delete(authCtrl.requireSignin, projectCtrl.remove);


export default router;
