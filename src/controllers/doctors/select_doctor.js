import { models } from "../../models/index.js"


export async function select_doctor (req, res) {

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

    const response_select_doctors = await models.select_doctor()

    if(!response_select_doctors.status){
        return res.status(400).json({status: "error", message: response_select_doctors.message})
    }

    return res.status(200).json({status: "success", doctors: response_select_doctors.data})
}