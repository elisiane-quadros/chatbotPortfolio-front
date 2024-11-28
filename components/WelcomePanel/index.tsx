'use client'
import React from 'react'
import { Description, Subtitle, Title, TitleContainer, WelcomePanelContainer } from './styles'


function WelcomePanel() {
  return (
    <WelcomePanelContainer> 
      <TitleContainer>
        <Title>Elisiane Quadros</Title>
        <Subtitle>Desenvolvedora Web</Subtitle>
      </TitleContainer>
      
      <Description>Bem-vindo(a) ao Meu Portfólio Interativo!<br/>
        Deixe-me apresentar o <span>CyberBot</span> , meu assistente virtual. Ele irá guiar você pelos tópicos do meu portfólio, responder suas perguntas, oferecer insights e tornar sua visita divertida! 
      </Description>
    </WelcomePanelContainer>
  )
}


export default WelcomePanel