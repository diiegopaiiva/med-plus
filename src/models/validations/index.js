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

  if (params === "create_appointments") {
    validation_yup = yup.object().shape({
      idUser: yup.string("formato inválido").required("id do usuário obrigatório"),
      idClinics: yup.string("formato inválido").required("id da clinica obrigatória"),
      idDoctors: yup.string("formato inválido").required("id do médico obrigatório"),
    });
  }

  if (params === "update_appointments") {
    validation_yup = yup.object().shape({
      date: yup.date("Formato invalido").required("Data obrigatoria"),
      id: yup.string("Formato não é valido").required("Id obrigatorio")
    });
  }

  if(params === "remove_appointments") {
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
