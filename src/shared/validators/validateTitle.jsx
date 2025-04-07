export const validateTitle = (tittle) => {
    return tittle.lenght >= 3 && tittle.lenght <= 30;
}

export const validateTitleMessage = 'El titulo debe de tener entre 3 y 30 caracteres'