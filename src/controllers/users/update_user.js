import { models } from "../../models/index.js"

export async function update_user (req, res) {
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

    const id = response_select_token.token.user_id

    const response_validation = await models.validations({params: "update_user", data: req.query})

    if (!response_validation.status){
        return res.status(400).json({status: "error", message: response_validation.validation_erro})
    }

    const response_update_user = await models.update_user({user_pass: req.query.pass, id: id})
    if (!response_update_user.status){
        return res.status(400).json({status: "error", message: response_update_user.message})
    }
    return res.status(200).json({status: "sucsess", message: "Senha alterada com sucesso"})
}