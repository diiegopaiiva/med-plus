import { execute } from "./execute.js"

export async function update_clinics(data){
    const query = "UPDATE clinics set address = ? where id = ?"
    const params = [data.address, data.id];

    const responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "Nenhuma clinica cadastrada" };
    }

    return { status: true, data: responseDatabase?.results };
}