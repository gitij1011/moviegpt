export const validateForm=(email,password)=>{
    // using regex expression to check the validation
//    if(name[0]!=null)
//      { 
//         const isnamevalid=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name)
//         if(!isnamevalid) 
//             return "name not valid"
//     }
    const isemailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const ispassvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
//  if not valid diplays the following error message
    if(!isemailvalid)
        return "email not valid"
    if(!ispassvalid)
        return "pass not valid"
    else
      return null
}