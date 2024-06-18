import { validations } from "./validations/index.js";
import { execute } from "./data_base/execute.js";
import { insert_user } from "./data_base/insert_user.js";
import { select_user } from "./data_base/select_user.js";
import { create_jwt } from "./serveces/jwt.js";
import { select_user_token } from "./data_base/select_user_token.js";
import { select_users } from "./data_base/select_users.js";
import { insert_clinics } from "./data_base/insert_clinics.js";
import { select_clinics } from "./data_base/select_clinics.js";
import { update_clinics } from "./data_base/update_clinics.js";
import { delete_clinics } from "./data_base/delete_clinics.js";
import { update_user } from "./data_base/update_user.js";
import { delete_user } from "./data_base/delete_user.js";
import { insert_doctor } from "./data_base/insert_doctor.js";
import { select_doctor } from "./data_base/select_doctor.js";
import { update_doctor } from "./data_base/update_doctor.js";
import { delete_doctor } from "./data_base/delete_doctor.js";

export const models = {
    validations,
    execute,
    insert_user,
    select_user,
    create_jwt,
    select_user_token,
    select_users,
    insert_clinics,
    select_clinics,
    update_clinics,
    delete_clinics,
    update_user,
    delete_user,
    insert_doctor,
    select_doctor,
    update_doctor,
    delete_doctor
}