import { execute } from "./execute.js"

export async function update_doctor(data){
    const query = "UPDATE doctors set specialization = ? where id = ?"
    const params = [data.specialty, data.id];

    const responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "nenhum médico cadastrado" };
    }

    return { status: true, data: responseDatabase?.results };
}