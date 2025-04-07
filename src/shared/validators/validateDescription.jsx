export const validateDescription = (description) => {
    return description.length >= 10 && description.length <= 200;
}

export const descriptionMessage = 'La descripcion debe de ser entre 10 y 200 caracteres'