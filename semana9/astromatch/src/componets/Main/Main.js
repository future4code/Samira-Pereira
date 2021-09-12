import React, { useState } from 'react'

import ChooseProfile from '../ChooseProfile/ChooseProfile'
import MatchListPage from '../MatchLIstPage/MatchListPage'
import styled from 'styled-components';
import AppBarList from '../Appbar/AppBarList';
/*import AppBarChoose from '../Appbar/AppBarChoose';
*/




const MainContainer = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    width: 400px;
    height: 600px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    margin-botton: 10px
`


function Main() {
  const [selectedPage, setSelectedPage] = useState('choose-profile')

  const renderSelectedPage = () =>{
    switch(selectedPage){
      case 'choose-profile':
        return <ChooseProfile/>
      case 'match-list':
        return <MatchListPage/>
      default:
        return <ChooseProfile/>
    }
  }

const goToChooseProfile = () =>{
  setSelectedPage('choose-profile')
} 

const goToMatchListPage = () =>{
  setSelectedPage('match-list')
} 


  return (
    <MainContainer>
      <AppBarList 
      goToMatchListPage={goToMatchListPage}
      goToChooseProfile={goToChooseProfile}
    />
  {renderSelectedPage()}
      </MainContainer>
  )
 }  
 

export default Main
