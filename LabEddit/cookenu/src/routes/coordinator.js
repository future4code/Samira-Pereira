export const goToLogin =(history) =>{
    history.push("/login")
}

export const goToSingUp =(history) =>{
    history.push("/singup")
}

export const goToRecipieList =(history) =>{
    history.push("/")
}

export const goToAddRecipie =(history) =>{
    history.push("/addreceita")
}

export const goToDetail =(history , id) =>{
    history.push(`/detalhe/${id}`)
}

export const goToError =(history) =>{
    history.push("")
}

