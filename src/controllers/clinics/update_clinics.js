import { models } from "../../models/index.js"


export async function update_clinics (req, res) {

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

    const response_fields_validation_clinics = await models.validations({params: "update_clinics", data: req.query})

    if(!response_fields_validation_clinics.status){
        return res.status(401).json({status: "error", message: response_fields_validation_clinics.validation_erro})
    } 

    const response_fields_update_clinics = await models.update_clinics(req.query)

    if(!response_fields_update_clinics.status){
        return res.status(400).json({status: "error", message:response_fields_update_clinics.message})
    }

    return res.status(200).json({status: "success", message: "Clinica atualizada com sucesso"})
}