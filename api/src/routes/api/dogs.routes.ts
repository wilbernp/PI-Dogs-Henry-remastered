import { createDogCtrl, deleteDogCtrl, getDogByIdCtrl, getDogsCtrl, updateDogCtrl } from "@/controllers/dogs.controller";
import { DogCreateDTO, DogUpdateDTO } from "@/dto/Dog.dto";
import { authenticate } from "@/middlewares/authenticate.middleware";
import { validateBody } from "@/middlewares/validateBody.middleware";
import { Router } from "express";
const router = Router()

// api/dogs [GET]
router.get("/", getDogsCtrl)

// api/dogs/:id [GET]
router.get("/:id", getDogByIdCtrl)

// protected routes
router.use(authenticate)

// api/dogs [POST]
router.post("/", validateBody(DogCreateDTO), createDogCtrl)

// api/dogs/:id [PUT]
router.put("/:id", validateBody(DogUpdateDTO), updateDogCtrl)

// api/dogs/:id [DELETE]
router.delete("/:id", deleteDogCtrl)


export {router}