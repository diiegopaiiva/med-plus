import { execute } from "./execute.js"

export async function insert_doctor(data){

   const query = "insert into doctors (crm, doctor_name, specialization) values(?, ?, ?)"
   const params = [data.crm, data.name, data.specialty]

    const response_data_base = await execute({query, params})

    if (!response_data_base.status){
        return {status:false, message: "erro ao executar tarefa"}
    }

    return {status: true}
}