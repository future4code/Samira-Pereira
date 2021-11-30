import React from 'react'
import styled from 'styled-components'


const AppBarChooseContainer = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
    padding: 0 8px;
    
`


function AppBarChoose(props) {


    return (
        <AppBarChooseContainer>
            <p>Astromatch</p>
            <button onClick={props.goToMatchListPage}>Lista</button>
        </AppBarChooseContainer>
    )
}
export default AppBarChoose