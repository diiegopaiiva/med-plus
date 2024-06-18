import { validations } from "./validations/index.js";
import { execute } from "./data_base/execute.js";
import { insert_user } from "./data_base/insert_user.js";
import { select_user } from "./data_base/select_user.js";
import { create_jwt } from "./serveces/jwt.js";
import { select_user_token } from "./data_base/select_user_token.js";
import { select_users } from "./data_base/select_users.js";
import { insert_appointments } from "./data_base/insert_appointments.js";
import { select_appointments } from "./data_base/select_appointments.js";
import { update_appointments } from "./data_base/update_appointments.js";
import { delete_appointments } from "./data_base/delete_appointments.js";
export const models = {
    validations,
    execute,
    insert_user,
    select_user,
    create_jwt,
    select_user_token,
    select_users,
    insert_appointments,
    select_appointments,
    update_appointments,
    delete_appointments
}