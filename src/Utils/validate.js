export const checkValidData = (email, password) => {
 
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%?&^])[A-Za-z\d@.#$!%?&]{8,15}$/.test(password);
    
    if(!isEmailValid) return "Invalid Email";
    if(!isPasswordValid) return "Invalid Password";

    return null; // that means no error
}

