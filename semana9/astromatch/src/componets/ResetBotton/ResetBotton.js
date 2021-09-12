import React from 'react'
import axios from 'axios'
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { IconButton } from '@material-ui/core';




function ResetBotton() {


const onClikReset = () =>{
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Samira/clear").then(response =>{
      console.log(response)
      
    })
}

  return (
    <IconButton>
      <RotateLeftIcon onClick={onClikReset} alt="ResetList"/>Limpar Lista
     
    </IconButton>
  )
}
export default ResetBotton
