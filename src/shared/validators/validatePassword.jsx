export const validatePassword = (password) => {
    const regex = /^\S{6,12}$/;
    return regex.test(password);
}

export const validatePasswordMessage = '  La contraseña debe ser entre 6 y 12 caracteres'