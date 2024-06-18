import { execute } from "./execute.js"

export async function delete_clinics(data){
    let query = "SELECT * from clinics where id = ?"
    let params = [data.id];

    let responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "Nenhuma clinica encontrada" };
    }

    query = "DELETE from clinics where id = ?"
    params = [data.id]

    responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }


    return { status: true};
}