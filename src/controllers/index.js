import { create_user } from "./users/create_user.js";
import { select_user } from "./users/select_user.js"
import { Auth } from "./login/auth.js";
import { create_doctor } from "./doctors/create_doctor.js";
import { select_doctor } from "./doctors/select_doctor.js";

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
        select_doctor
    }
}