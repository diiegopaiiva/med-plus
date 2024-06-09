import { create_user } from "./users/create_user.js";
import { Auth } from "./login/auth.js";

export const controllers = {
    users: {
        create_user
    },
    login: {
        Auth
    }
}