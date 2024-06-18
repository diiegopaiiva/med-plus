import { execute } from "./execute.js"

export async function update_user({user_pass, id}){
    const query = 'UPDATE users set user_pass = ? where id = ?';
    const params = [user_pass, id];

    const responseDatabase = await execute({ query, params });

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "nenhum usuário cadastrado" };
    }

    return { status: true, data: responseDatabase?.results };
}