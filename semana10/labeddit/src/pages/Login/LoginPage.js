import React from 'react'
import {LogoImage, ScreenContainer, SignUpButtonContainer } from './styled'
import logo from "../../assets/logo2.png"
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { goToSignIn } from '../../routes/coordinates'


const LoginPage = () => {
    const history = useHistory()


    return (
        <ScreenContainer>
            <LogoImage src ={logo}/>
            <LoginForm/>
            <SignUpButtonContainer>
            <Button
                onClick={()=>goToSignIn(history)}                
                type={"submit"}
                fullWidth
                variant={"text"}
                color={"primary"}
                margin={"normal"}

                >Não possui conta? Cadastre-se!
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}


export default LoginPage