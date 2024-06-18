import { create_user } from "./users/create_user.js";
import { select_user } from "./users/select_user.js"
import { Auth } from "./login/auth.js";
import { create_clinics } from "./clinics/create_clinics.js";

export const controllers = {
    users: {
        create_user,
        select_user
    },
    login: {
        Auth
    },
    clinics:{
        create_clinics
    }
}