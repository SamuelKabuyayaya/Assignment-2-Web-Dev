import express from "express";
import contactCtrl from "../controllers/contact.controller.js";

const router = express.Router();

router.route("/")
.get(contactCtrl.list)
.post(contactCtrl.create)
.delete(contactCtrl.removeAll);


router.param("contactId", contactCtrl.contactById);

router.route("/:contactId")
.get(contactCtrl.read)
.put(contactCtrl.update)
.delete(contactCtrl.remove);


export default router;
