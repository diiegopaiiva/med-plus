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

  if (params === "Auth") {
    validation_yup = yup.object().shape({
      email: yup.string("Email invalido").required("Email obrigatório").email("Formato de email não validado"),
      pass: yup.string("Senha invalida").required("Senha obrigatória")
    });
  }

  if (params === "create_clinics") {
    validation_yup = yup.object().shape({
      cnpj: yup.string("Formato invalido").required("Cnpj obrigatorio").min(14, "Minimo catorze letras").max(14, "Maximo catorze letras"),
      razao_social: yup.string("Formato invalido").required("Razão social obrigatorio"),
      address: yup.string("Formato invalido").required("Endereço obrigatorio")
    });
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
