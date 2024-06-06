import { validations } from "./validations/index.js";
import { execute } from "./data_base/execute.js";
import { insert_user } from "./data_base/insert_user.js";

export const models = {
    validations,
    execute,
    insert_user
}