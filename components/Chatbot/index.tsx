'use client';
import React, { useState } from 'react';
import { ChatBotContainer, ChatMessageArea, ButtonsNav, Button, MessageArea } from './styles';
import ChatInputArea, { Message } from './components/ChatInputArea';
import { CurrentButton } from '@/app/page';

interface ChatBotProps {
  onActiveButton: (activeButton: CurrentButton) => void;
}

function ChatBot({onActiveButton}: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: Date.now(),
      text: "Olá, sou o CyberBot, e vou guiá-lo pelo portfólio da Elisiane. Escolha uma opção para começarmos!",
      options: [],
      sender: "bot",
    },
  ]);
  
  return (
    <ChatBotContainer>
        <ChatMessageArea>
          {messages.map((msg) => (
            <MessageArea  sender={msg.sender} key={msg.id}>
              {msg.text}
            </MessageArea>
          ))}
        </ChatMessageArea>
      <div>
        <ButtonsNav>
          <Button onClick={() => onActiveButton('WELCOME')}>Home</Button>
          <Button onClick={() => onActiveButton('ABOUT')}>Sobre</Button>
          <Button onClick={() => onActiveButton('SKILLS')}>Habilidades</Button>
          <Button onClick={() => onActiveButton('PROJECTS')}>Projetos</Button>
          <Button onClick={() => onActiveButton('CONTACTS')}>Contatos</Button>
        </ButtonsNav>
        <ChatInputArea onMessages={setMessages} messages={messages}/>
      </div>
 
    </ChatBotContainer>
  );
}

export default ChatBot;
