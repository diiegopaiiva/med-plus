import { validations } from "./validations/index.js";
import { execute } from "./data_base/execute.js";
import { insert_user } from "./data_base/insert_user.js";
import { select_user } from "./data_base/select_user.js";
import { create_jwt } from "./serveces/jwt.js";
import { select_user_token } from "./data_base/select_user_token.js";
import { select_users } from "./data_base/select_users.js";
import { insert_clinics } from "./data_base/insert_clinics.js";

export const models = {
    validations,
    execute,
    insert_user,
    select_user,
    create_jwt,
    select_user_token,
    select_users,
    insert_clinics
}