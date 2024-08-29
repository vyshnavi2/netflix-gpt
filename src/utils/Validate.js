const checkValidData = (email,password) =>{
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); // if test email is valid, return true or false
  const isPasswordValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailValid) return "Email ID is not valid ID"
  if(!isPasswordValid) return "Password is not valid"

  return  null; //if both email and password are valid then return null (meaning no errors)
}

export default checkValidData;