import { create_user } from "./users/create_user.js";
import { select_user } from "./users/select_user.js"
import { Auth } from "./login/auth.js";
import { create_clinics } from "./clinics/create_clinics.js";
import {select_clinics} from "./clinics/select_clinics.js"
import { update_clinics } from "./clinics/update_clinics.js";
import { remove_clinics } from "./clinics/remove_clinics.js";

export const controllers = {
    users: {
        create_user,
        select_user
    },
    login: {
        Auth
    },
    clinics:{
        create_clinics,
        select_clinics,
        update_clinics,
        remove_clinics
    }
}