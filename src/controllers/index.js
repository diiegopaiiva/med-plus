import { create_user } from "./users/create_user.js";
import { select_user } from "./users/select_user.js"
import { Auth } from "./login/auth.js";
import { create_appointments } from "./appointments/create_appointments.js";
import { select_appointments } from "./appointments/select_appointments.js";
import { update_appointements } from "./appointments/update_appointments.js";
import { remove_appointments } from "./appointments/remove.appointments.js";
import { create_clinics } from "./clinics/create_clinics.js";
import {select_clinics} from "./clinics/select_clinics.js"
import { update_clinics } from "./clinics/update_clinics.js";
import { remove_clinics } from "./clinics/remove_clinics.js";
import { update_user } from "./users/update_user.js";
import { remove_user } from "./users/remove_user.js";
import { create_doctor } from "./doctors/create_doctor.js";
import { select_doctor } from "./doctors/select_doctor.js";
import { update_doctor } from "./doctors/update_doctor.js";
import { remove_doctor } from "./doctors/remove_doctor.js";

export const controllers = {
    users: {
        create_user,
        select_user,
        update_user,
        remove_user
    },
    login: {
        Auth
    },
    appointments: {
        create_appointments,
        select_appointments,
        update_appointements,
        remove_appointments
    },
    clinics:{
        create_clinics,
        select_clinics,
        update_clinics,
        remove_clinics
    },
    doctors: {
        create_doctor,
        select_doctor,
        update_doctor,
        remove_doctor
    }
}