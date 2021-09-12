export const goToLoginPage =(history) =>{
    history.push("/login")
}

export const goToSignIn =(history) =>{
    history.push("/signin")
}

export const goToPostList =(history) =>{
    history.push("/")
}

export const goToAddPost =(history) =>{
    history.push("/addpost")
}

export const goToPostDetail =(history, id) =>{
    history.push(`/post/${id}`)
}