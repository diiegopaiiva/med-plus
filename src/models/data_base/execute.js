import { connection } from "./connection.js";

export async function execute({query, params}) {
    try{

        const [ results, fields ] = await connection.execute(query, params);

        return { status: true, results }

    }catch(error){

        return { status: false, error: error?.sqlMessage }
    }
}