import { execute } from "./execute.js"

export async function select_doctor(){
    const query = "SELECT * from doctors"
    const params = [];

    const responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "nenhum médico cadastrado" };
    }

    return { status: true, data: responseDatabase?.results };
}