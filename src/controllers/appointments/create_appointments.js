import { models } from "../../models/index.js"

export async function create_appointments(req, res) {

    const tokenParam = req?.headers?.authorization
    let token 
    if(tokenParam){
        token = tokenParam.split(" ")[1]
    } 

    const response_header_validation = await models.validations({params: "header", data: {token:token}})

    if(!response_header_validation.status){
        return res.status(401).json({status:"error", message: response_header_validation.validation_erro})
    }

    const response_select_token = await models.select_user_token({token:token})

    if(!response_select_token.status){
        return res.status(401).json({status: "error", message: response_select_token.message})
    }

    const response_validation_fields_appointments = await models.validations({params: "create_appointments", data: req.body})

    if(!response_validation_fields_appointments.status){
        return res.status(400).json({status: "error", message: response_validation_fields_appointments.validation_erro })
    }

    const response_insert_appointments = await models.insert_appointments(req.body)

    if(!response_insert_appointments.status){
        return res.status(400).json({status: "error", message: response_insert_appointments.message})
    }

    return res.status(201).json({status: "success", message: "Consulta cadastrada com sucesso"})
}