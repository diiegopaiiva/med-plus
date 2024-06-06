import { Router } from "express";
import { controllers } from "../controllers/index.js";

const router = Router()

router.get("/test", ()=> console.log("deu bom"))

router.post("/users", controllers.users.create_user)

export {
    router
}