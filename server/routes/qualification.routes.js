import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";
import authCtrl from "../controllers/auth.controller.js";


const router = express.Router();

router.route("/")
.get(authCtrl.requireSignin, qualificationCtrl.list)
.post(authCtrl.requireSignin, qualificationCtrl.create)
.delete(authCtrl.requireSignin, qualificationCtrl.removeAll);

router.param("qualificationId", qualificationCtrl.qualificationById);

router.route("/:qualificationId")
.get(authCtrl.requireSignin, qualificationCtrl.read)
.put(authCtrl.requireSignin, qualificationCtrl.update)
.delete(authCtrl.requireSignin, qualificationCtrl.remove);


export default router;
