import { models } from "../../models/index.js"

export async function remove_clinics (req, res) {

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

   const response_fields_remove_clinics = await models.validations({params: "remove_clinics", data: req.query })

   if(!response_fields_remove_clinics.status){
        return res.status(401).json({status: "error", message: response_fields_remove_clinics.validation_erro})
    }

    const response_delete_clinics = await models.delete_clinics(req.query)

    if(!response_delete_clinics.status){
        return res.status(401).json({status: "error", message: response_delete_clinics.message})
    }

    return res.status(200).json({status: "sucess", message: "Clinics deletado com sucesso"})
}