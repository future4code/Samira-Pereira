import React from 'react'
import Header from '../../components/Header'
import ListMatch from '../../components/ListMatch'

import { PageContainer, MainContainer } from './match'


export default function Matches(props) {
  return (
    <PageContainer>
      <Header
        currentPage={props.currentPage}
        changePage={props.changePage}
        putClear={props.putClear}
      />
      <MainContainer>
        <MatchesList 
          matches={props.matches}
        />
      </MainContainer>
    </PageContainer>
  );
}