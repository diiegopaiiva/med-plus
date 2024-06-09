import { execute } from "./execute.js"

export async function select_user(data){
    let query = "select * from users where user_email = ?"
    let params = [data.email]

    let response_data_base = await execute({query, params})
    
    if (!response_data_base.status){
        return {status:false, message: "erro ao executar tarefa"}
    }

    if (response_data_base.results.length == 0){
        return {status:false, message: "Email incorreto"}
    }

    if (response_data_base.results[0].user_pass !== data.pass){
        return {status:false, message: "Senha incorreta"}
    }

    return {status:true, user_id: response_data_base.results[0].id}

}
