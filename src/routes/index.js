import { Router } from "express";
import { controllers } from "../controllers/index.js";

const router = Router()

router.post("/login", controllers.login.Auth)

router.post("/users", controllers.users.create_user)
router.get("/users", controllers.users.select_user)

router.post("/clinics", controllers.clinics.create_clinics)
router.get("/clinics", controllers.clinics.select_clinics)
router.put("/clinics", controllers.clinics.update_clinics)
router.delete("/clinics", controllers.clinics.remove_clinics)


export {
    router
}
