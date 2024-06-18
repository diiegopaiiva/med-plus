import { Router } from "express";
import { controllers } from "../controllers/index.js";

const router = Router()

router.post("/login", controllers.login.Auth)

router.post("/users", controllers.users.create_user)
router.get("/users", controllers.users.select_user)

router.post("/appointments", controllers.appointments.create_appointments)
router.get("/appointments", controllers.appointments.select_appointments)
router.put("/appointments", controllers.appointments.update_appointements)
router.delete("/appointments", controllers.appointments.remove_appointments)

export {
    router
}