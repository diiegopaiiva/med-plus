import JWT from "jsonwebtoken"
import moment from "moment"
import "dotenv/config"
import { execute } from "../data_base/execute.js"

export async function create_jwt({userId}){
    const token = JWT.sign({ foo: userId }, process.env.SECRET);

    const date = moment().format('YYYY-MM-DD HH:mm:ss');

    const query = 'INSERT INTO tokens (token, user_id, date) VALUES (?, ?, ?)';
    const params = [token, userId, date];

    const responseDatabase = await execute({ query, params });
    
    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados" };
    }

    return { status: true, token: token }
}