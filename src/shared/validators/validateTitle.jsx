export const validateTitle = (tittle) => {
    return tittle.length >= 3 && tittle.length<= 30;
}

export const validateTitleMessage = 'El titulo debe de tener entre 3 y 30 caracteres'