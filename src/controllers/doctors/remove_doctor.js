import { models } from "../../models/index.js"

export async function remove_doctor (req, res) {

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

   const response_fields_remove = await models.validations({params: "remove_doctor", data: req.query })

   if(!response_fields_remove.status){
        return res.status(401).json({status: "error", message: response_fields_remove.validation_erro})
    }

    const response_delete_doctor = await models.delete_doctor(req.query)

    if(!response_delete_doctor.status){
        return res.status(401).json({status: "error", message: response_delete_doctor.message})
    }

    return res.status(200).json({status: "sucess", message: "Médico deletado com sucesso"})
}