import { Router } from "express";
import { controllers } from "../controllers/index.js";

const router = Router()

router.post("/users", controllers.users.create_user)

export {
    router
}