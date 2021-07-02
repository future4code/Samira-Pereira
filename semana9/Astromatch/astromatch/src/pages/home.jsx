import React from 'react'
import Header from '../../components/header'
import Card from '../../components/cards';
import ButtonMatch from '../../components/ButtonMatch';

import Refuse from '../../assets/refuse-color.png'
import Check from '../../assets/check-color.png'

import { PageContainer, MainContainer, ButtonsContainer, MessageNoProfileContainer } from './home'


export default function Homepage(props) {
  return (
    <PageContainer>
      <Header
        currentPage={props.currentPage}
        changePage={props.changePage}
        putClear={props.putClear}
      />

      {props.profileToChose !== null ?
        <MainContainer>
          <Card
            profileToChose={props.profileToChose}
          />
          <ButtonsContainer>
            <ButtonMatch
              borderColor={'red'}
              icon={Refuse}
              choiceYes={false}
              id={props.profileToChose.id}
              postChoosePerson={props.postChoosePerson}
            />
            <ButtonMatch
              borderColor={'green'}
              icon={Check}
              choiceYes={true}
              id={props.profileToChose.id}
              postChoosePerson={props.postChoosePerson}
            />
          </ButtonsContainer>
        </MainContainer>
        :
        <MainContainer>
          <MessageNoProfileContainer>
            <p>Não há mais perfis disponíveis</p>
            <p>Você pode limpar a lista de Matches e começar novamente,
              <span onClick={props.putClear}> clicando aqui</span>
            </p>
          </MessageNoProfileContainer>
        </MainContainer>


      }

    </PageContainer>
  );
}