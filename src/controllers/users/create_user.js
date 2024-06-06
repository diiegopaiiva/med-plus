import { models } from "../../models/index.js"

export async function create_user(req, res) {
    const response_model_validation = await models.validations({ params: "create_user", data: req.body})
    
    if(!response_model_validation.status){
        return res.status(400).json({status:"error", message:response_model_validation.validation_erro})
    }

    const response_model_insert_user = await models.insert_user(req.body)

    if(!response_model_insert_user.status){
        return res.status(400).json({status:"error", message:response_model_insert_user.message})
    }

    return res.status(201).json({status:"success", message:"usuario criado com sucesso"})
}