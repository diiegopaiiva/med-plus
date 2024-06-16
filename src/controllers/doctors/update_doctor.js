import { models } from "../../models/index.js"


export async function update_doctor (req, res) {

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

    const response_fields_validation = await models.validations({params: "update_doctor", data: req.query})

    if(!response_fields_validation.status){
        return res.status(401).json({status: "error", message: response_fields_validation.validation_erro})
    } 

    const response_fields_update = await models.update_doctor(req.query)

    if(!response_fields_update.status){
        return res.status(400).json({status: "error", message:response_fields_update.message})
    }

    return res.status(200).json({status: "success", message: "Especialidade atualizada com sucesso"})
}
