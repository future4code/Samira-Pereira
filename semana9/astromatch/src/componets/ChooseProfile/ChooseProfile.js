import React, { useEffect, useState } from 'react'
import ChoosesBottons from './ChoosesBottons'
import ProfileCard from './ProfileCard'
import axios from 'axios';




function ChooseProfile() {
const [profileToChoose, setProfileToChoose] = useState ({})

const getProfileToChoose = () =>{
  axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Samira/person").then(response =>{
    setProfileToChoose(response.data.profile)
  })
}

const getChooseProfile = (choice) =>{
  const body = {
      choice: choice,
      id: profileToChoose.id
    }

    setProfileToChoose(undefined)
         
  axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Samira/choose-person", body).then(response =>{ 
  console.log(response)  
  getProfileToChoose()
  })
}



useEffect(() => {
   getProfileToChoose()

}, []);

const onClickNo = () => {
    getChooseProfile(false)
}
const onClickYes = () => {
    getChooseProfile(true)
}

  return (
    
    <div>
      { profileToChoose  ?
      (<>
      
     <ProfileCard profile={profileToChoose}/>
     <ChoosesBottons 
     onClickNo={onClickNo}
     onClickYes={onClickYes}
     />
     </>) : <p>Carregando...</p>
      }
    </div>
  )}

export default ChooseProfile;
