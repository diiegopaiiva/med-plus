import { execute } from "./execute.js"

export async function delete_doctor(data){
    let query = "SELECT * from doctors where id = ?"
    let params = [data.id];

    let responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "nenhum médico encontrado" };
    }

    query = "DELETE from doctors where id = ?"
    params = [data.id]

    responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }


    return { status: true};
}