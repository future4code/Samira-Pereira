import React from 'react'
import styled from 'styled-components'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';


const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
      
`


function ChoosesBottons(props) {
  
    return (
        <ButtonsContainer>
           <IconButton>
              <CloseIcon onClick={props.onClickNo}/>
              </IconButton>
              <IconButton>
              <FavoriteIcon  onClick={props.onClickYes}/>
           </IconButton>
       </ButtonsContainer>
    )
}

export default ChoosesBottons
