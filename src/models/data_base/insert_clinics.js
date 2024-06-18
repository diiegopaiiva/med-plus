import { execute } from "./execute.js"

export async function insert_clinics(data){

   const query = "insert into clinics (cnpj, razao_social, address) values(?, ?, ?)"
   const params = [data.cnpj, data.razao_social, data.address]

    const response_data_base = await execute({query, params})

    if (!response_data_base.status){
        return {status:false, message: "erro ao executar tarefa"}
    }

    return {status: true}
}