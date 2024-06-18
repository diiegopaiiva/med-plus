import { execute } from "./execute.js"

export async function delete_appointments(data){
    let query = "SELECT * from appointments where id = ?"
    let params = [data.id];

    let responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "nenhuma consulta encontrada" };
    }

    query = "DELETE from appointments where id = ?"
    params = [data.id]

    responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }


    return { status: true};
}