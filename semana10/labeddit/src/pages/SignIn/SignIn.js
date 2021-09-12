import React from 'react'
import logo from '../../assets/logo2.png'
import { ScreenContainer } from './styled'
import SignForm from './SignForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignIn = ({setRightButtonText}) => {
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default SignIn