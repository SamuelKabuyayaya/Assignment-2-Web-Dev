import express from "express";
import qualificationCtrl from "../controllers/qualification.controller.js";

const router = express.Router();

router.route("/")
.get(qualificationCtrl.list)
.post(qualificationCtrl.create);

router.param("qualificationId", qualificationCtrl.qualificationById);

router.route("/:qualificationId")
.get(qualificationCtrl.read)
.put(qualificationCtrl.update)
.delete(qualificationCtrl.remove);


export default router;
