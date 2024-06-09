import { execute } from "./execute.js"

export async function select_user_token({token}){
    const query = 'SELECT * FROM tokens WHERE token = ? AND date <= NOW() - INTERVAL 1 HOUR';
    const params = [token];

    const responseDatabase = await execute({ query, params });
    console.log(params)

    if(!responseDatabase.status){
        return { status: false, message: "erro ao executar tarefa no banco de dados"};
    }

    if(responseDatabase.results.length == 0){
        return { status: false, message: "token não é valido" };
    }

    return { status: true, token: responseDatabase?.results[0] };
}