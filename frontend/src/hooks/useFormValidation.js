import { useState } from "react"

const useFormValidation = () => {

  const [nameErr, setNameErr] = useState(false)
  const [emailErr, setEmailErr] = useState(false)
  const [roleErr, setRoleErr] = useState(false)

  function validateName(name) {
    return name?.trim() !== ""
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  function validateRole(role) {
    const validRoles = ["author", "editor", "subscriber", "administrator"]
    return validRoles.includes(role)
  }

  
  function validateUser(name, email, role) {

    const isNameValid = validateName(name)
    const isEmailValid = validateEmail(email)
    const isRoleValid = validateRole(role)

    setNameErr(!isNameValid);
    setEmailErr(!isEmailValid);
    setRoleErr(!isRoleValid);

    if (!isNameValid || !isEmailValid || !isRoleValid) {
      return false
    }

    return true
  }

  return { nameErr, emailErr, roleErr, validateUser }

};

export default useFormValidation;
