import * as yup from "yup";

export async function validations({ params, data }) {
  let validation_yup;

  if (params === "header") {
    validation_yup = yup.object().shape({
      token: yup.string("Token invalido").required("Token obrigatório")
    });
  }

  if (params === "create_user") {
    validation_yup = yup.object().shape({
      email: yup.string("Email invalido").required("Email obrigatório").email("Formato de email não valido"),
      name: yup.string("Formato invalido").required("Nome obrigatorio").min(4, "Minimo quatro letras").max(20, "Maximo vinte letras"),
      pass: yup.string("Senha invalida").required("Senha obrigatoria").min(6, "minimo 6 caracteres")
    });
  }

  if (params === "update_user") {
    validation_yup = yup.object().shape({
      pass: yup.string("Formato invalido").required("Nova senha obrigatoria").min(6, "minimo 6 caracteres"),
      passConfirm: yup.string("Formato invalido").required("Senha origatoria").oneOf([yup.ref("pass"), null], "Senha não é igual")
    })
  }

  if (params === "Auth") {
    validation_yup = yup.object().shape({
      email: yup.string("Email invalido").required("Email obrigatório").email("Formato de email não validado"),
      pass: yup.string("Senha invalida").required("Senha obrigatória")
    });
  }
  
  if (params === "remove_user") {
    validation_yup = yup.object().shape({
      id: yup.string("Email invalido").required("ID é obrigatório")
    });
  }

  if (params === "create_doctor") {
    validation_yup = yup.object().shape({
      name: yup.string("Formato invalido").required("Nome obrigatório").min(4, "Minimo quatro letras").max(20, "Maximo vinte letras"),
      crm: yup.string("Formato invalido").required("Crm obrigatorio").min(9, "Minimo nove caracteres").max(9, "Maximo nove caracteres"),
      specialty: yup.string("Especialidade invalida").required("Especialidade obrigatoria")
    });
  }

  if (params === "update_doctor") {
    validation_yup = yup.object().shape({
      specialty: yup.string("Especialidade invalida").required("Especialidade obrigatoria"),
      id: yup.string("Formato não é valido").required("Id obrigatorio")
    });
  }

  if(params === "remove_doctor") {
    validation_yup = yup.object().shape({
      id:yup.string("Formato não é valido").required("Id obrigatorio")
    })
  }

  if (params === "create_clinics") {
    validation_yup = yup.object().shape({
      cnpj: yup.string("Formato invalido").required("Cnpj obrigatorio").min(14, "Minimo catorze letras").max(14, "Maximo catorze letras"),
      razao_social: yup.string("Formato invalido").required("Razão social obrigatorio"),
      address: yup.string("Formato invalido").required("Endereço obrigatorio")
    });
  }

  if (params === "update_clinics") {
    validation_yup = yup.object().shape({
      address: yup.string("Formato invalido").required("Endereço obrigatorio"),
      id: yup.string("Formato não é valido").required("Id obrigatorio")
    });
  }

  if(params === "remove_clinics") {
    validation_yup = yup.object().shape({
      id:yup.string("Formato não é valido").required("Id obrigatorio")
    })
  }

  try {
    await validation_yup.validate(data, {abortEarly: false})
    return {status:true}
  } catch(error){
    const validation_erro = {}
    error.inner.forEach(error => {
        validation_erro[error.path] = error.message
    })

    return {status: false, validation_erro}
  }
  
}
