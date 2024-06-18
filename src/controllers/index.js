import { create_user } from "./users/create_user.js";
import { select_user } from "./users/select_user.js"
import { Auth } from "./login/auth.js";
import { create_appointments } from "./appointments/create_appointments.js";
import { select_appointments } from "./appointments/select_appointments.js";
import { update_appointements } from "./appointments/update_appointments.js";
import { remove_appointments } from "./appointments/remove.appointments.js";

export const controllers = {
    users: {
        create_user,
        select_user
    },
    login: {
        Auth
    },
    appointments: {
        create_appointments,
        select_appointments,
        update_appointements,
        remove_appointments
    }
}