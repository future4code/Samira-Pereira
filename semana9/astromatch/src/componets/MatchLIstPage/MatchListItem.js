import React from 'react'
import styled from 'styled-components'

const ListItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;

    :hover{
        background-color: lightgray
    }
`
const Avatar = styled.img `
    border-radius: 50%;
    margin-right: 15px;
    height: 40px;
    width: 40px;
`

function MatchListItem(props) {
    const profile = props.profile
    
    return (
        <ListItemContainer>
           <Avatar src={profile.photo}/>
            <p>{profile.name}</p>
           
        </ListItemContainer>
    )
}

export default MatchListItem;
