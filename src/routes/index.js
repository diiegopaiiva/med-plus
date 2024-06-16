import { Router } from "express";
import { controllers } from "../controllers/index.js";

const router = Router()

router.post("/login", controllers.login.Auth)

router.post("/users", controllers.users.create_user)
router.get("/users", controllers.users.select_user)

router.post("/doctors", controllers.doctors.create_doctor)
router.get("/doctors", controllers.doctors.select_doctor)


export {
    router
}