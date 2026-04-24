export const validname=(name)=>{
    const nameregex=/^[a-zA-Z]{0,50}$/
    return nameregex.test(name)
}
export const validemail=(email)=>{
    const emailregex=/^[a-zA-Z0-9,%.+-]+@[a-zA-Z0-9,-]+.[a-zA-Z]{2,}$/
    return emailregex.test(email)
}

export const validpassword  = (password)=>{
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    return passwordRegex.test(password)
}