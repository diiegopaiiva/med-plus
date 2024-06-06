import { execute } from "./execute.js"

export async function insert_user(data){
    let query = "select * from users where user_email = ?"
    let params = [data.email]

    let response_data_base = await execute({query, params})
    
    if (!response_data_base.status){
        return {status:false, message: "erro ao executar tarefa"}
    }

    if(response_data_base.results.length > 0) {
        return {status:false, message: "email cadasttrado"}
    }

    query = "insert into users (user_email, user_name, user_pass) values(?, ?, ?)"
    params = [data.email, data.name, data.pass]

    response_data_base = await execute({query, params})

    if (!response_data_base.status){
        return {status:false, message: "erro ao executar tarefa"}
    }

    return {status: true}
}