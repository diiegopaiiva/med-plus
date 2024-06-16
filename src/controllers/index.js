import { create_user } from "./users/create_user.js";
import { select_user } from "./users/select_user.js"
import { Auth } from "./login/auth.js";
import { update_user } from "./users/update_user.js";

export const controllers = {
    users: {
        create_user,
        select_user,
        update_user
    },
    login: {
        Auth
    }
}