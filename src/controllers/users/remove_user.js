import { model } from "mongoose"
import { models } from "../../models/index.js"

export async function remove_user(req, res) {

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

    const response_body_validation = await models.validations({params: "remove_user", data: req.query})

    if(!response_body_validation.status){
        return res.status(400).json({status: "error", message: response_body_validation.validation_erro})
    }

    const response_delete_users = await models.delete_user(req.query)

    if(!response_delete_users.status){
        return res.status(400).json({status: "error", message: response_delete_users.message})
    }

    return res.status(200).json({status: "success", message: "usuário removido com sucesso"})
}