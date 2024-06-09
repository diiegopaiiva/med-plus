import { execute } from "./execute.js"

export async function select_users(){
    const query = 'SELECT id, user_name, user_email FROM users ORDER BY id DESC';
    const params = [];

    const responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "nenhum usuário cadastrado" };
    }

    return { status: true, data: responseDatabase?.results };
}