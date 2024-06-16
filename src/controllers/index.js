import { create_user } from "./users/create_user.js";
import { select_user } from "./users/select_user.js"
import { Auth } from "./login/auth.js";
import { create_doctor } from "./doctors/create_doctor.js";
import { select_doctor } from "./doctors/select_doctor.js";
import { update_doctor } from "./doctors/update_doctor.js";
import { remove_doctor } from "./doctors/remove_doctor.js";

export const controllers = {
    users: {
        create_user,
        select_user
    },
    login: {
        Auth
    },
    doctors: {
        create_doctor,
        select_doctor,
        update_doctor,
        remove_doctor
    }
}