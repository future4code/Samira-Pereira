import React from 'react'
import styled from 'styled-components'



const AppBarListContainer = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
    padding: 0 8px;
    text-align: Center;
`


function AppBarList(props) {

    

    return (
        <AppBarListContainer>
            <button onClick={props.goToChooseProfile}>Escolher</button>
            <p>Astromatch</p>
            <button onClick={props.goToMatchListPage}>Lista</button>
        </AppBarListContainer>
    )
}
export default AppBarList