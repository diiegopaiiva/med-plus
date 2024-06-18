import { execute } from "./execute.js"

export async function update_appointments(data){
    const query = "UPDATE appointments set date = ? where id = ?"
    const params = [data.date, data.id];

    const responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "Nenhuma consulta cadastrada" };
    }

    return { status: true, data: responseDatabase?.results };
}