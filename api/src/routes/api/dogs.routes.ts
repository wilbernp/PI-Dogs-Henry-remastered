import { createDogCtrl, deleteDogCtrl, getDogByIdCtrl, getDogsCtrl, updateDogCtrl } from "@/controllers/dogs.controller";
import { authenticate } from "@/middlewares/auth.middleware";
import { Router } from "express";
const router = Router()

// api/dogs [GET]
router.get("/", getDogsCtrl)

// api/dogs/:id [GET]
router.get("/:id", getDogByIdCtrl)

// protected routes
router.use(authenticate)

// api/dogs [POST]
router.post("/", createDogCtrl)

// api/dogs/:id [PUT]
router.put("/:id", updateDogCtrl)

// api/dogs/:id [DELETE]
router.delete("/:id", deleteDogCtrl)


export {router}