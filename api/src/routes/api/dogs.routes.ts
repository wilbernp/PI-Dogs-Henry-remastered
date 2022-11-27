import { Router } from "express";
const router = Router()

router.get("/:id", (req, res) =>{
    res.send(req.baseUrl)
})

export {router}