import { execute } from "./execute.js"
import moment from "moment"

export async function insert_appointments(data){

    const dateAppointments = moment().format('YYYY-MM-DD HH:mm:ss')

    const query = "insert into appointments (date, id_user, id_clinics, id_doctors) values (?, ?, ?, ?)"
    const params = [dateAppointments, data.idUser, data.idClinics, data.idDoctors]

    const response_data_base = await execute({query, params})

    if (!response_data_base.status){
        return {status:false, message: "erro ao executar tarefa"}
    }

    return {status: true}
}

