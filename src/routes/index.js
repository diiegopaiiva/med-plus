import { Router } from "express";
import { controllers } from "../controllers/index.js";

const router = Router()

router.post("/login", controllers.login.Auth)

router.post("/users", controllers.users.create_user)
router.get("/users", controllers.users.select_user)
router.put("/users", controllers.users.update_user)
router.delete("/users", controllers.users.remove_user)

export {
    router
}