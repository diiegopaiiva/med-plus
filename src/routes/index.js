import { Router } from "express";
import { controllers } from "../controllers/index.js";

const router = Router()

router.post("/login", controllers.login.Auth)

router.post("/users", controllers.users.create_user)
router.get("/users", controllers.users.select_user)
router.put("/users", controllers.users.update_user)
router.delete("/users", controllers.users.remove_user)

router.post("/appointments", controllers.appointments.create_appointments)
router.get("/appointments", controllers.appointments.select_appointments)
router.put("/appointments", controllers.appointments.update_appointements)
router.delete("/appointments", controllers.appointments.remove_appointments)

router.post("/clinics", controllers.clinics.create_clinics)
router.get("/clinics", controllers.clinics.select_clinics)
router.put("/clinics", controllers.clinics.update_clinics)
router.delete("/clinics", controllers.clinics.remove_clinics)

router.post("/doctors", controllers.doctors.create_doctor)
router.get("/doctors", controllers.doctors.select_doctor)
router.put("/doctors", controllers.doctors.update_doctor)
router.delete("/doctors", controllers.doctors.remove_doctor)

export {
    router
}
