import { models } from "../../models/index.js";

export async function Auth(req, res) {
    const response_model_validation = await models.validations({ params: "Auth", data: req.body})
    
    if(!response_model_validation.status){
        return res.status(400).json({status:"error", message:response_model_validation.validation_erro})
    }

    const response_data_base = await models.select_user(req.body)

    if(!response_data_base.status){
        return res.status(400).json({status:"error", message:response_data_base.message})
    }

    const userId = response_data_base.user_id

    const response_create_jwt = await models.create_jwt({userId:userId})

    if(!response_create_jwt.status){
        return res.status(400).json({status:"error", message:response_create_jwt.message})
    }

    return res.status(200).json({status:"susecs", message:response_create_jwt.token})
}