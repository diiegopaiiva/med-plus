import { execute } from "./execute.js"

export async function delete_user(data){
    let query = 'select * from users where id = ?'
    let params = [data.id]

    let response_data_base = await execute({query, params})
    
    if (!response_data_base.status){
        return {status:false, message: "erro ao executar tarefa"}
    }

    if(response_data_base.results.length === 0) {
        return {status:false, message: "nenhum usuário encontrado"}
    }

    query  = 'delete from users where id = ?'
    params = [data.id]

    response_data_base = await execute({query, params})
    
    if (!response_data_base.status){
        return {status:false, message: "erro ao executar tarefa"}
    }

    return {status: true}
}