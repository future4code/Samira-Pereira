import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MatchListItem from './MatchListItem'
import ResetBotton from '../ResetBotton/ResetBotton'
import axios from 'axios'


const ListContainer = styled.div`
    padding: 8px;
    
`


function MatchListPage() {
  const [matches, setMatches] = useState([])
  

useEffect (() =>{
  axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Samira/matches").then(response =>{
       setMatches(response.data.matches)
      
  })
},[]);


  return (
    <>
   
    <ListContainer>
       {matches.map((profile) =>{
       return <MatchListItem profile={profile}/>
     })}
      <ResetBotton/>
    </ListContainer>
   </>
  )
}
export default MatchListPage;