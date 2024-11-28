"use client";
import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import { mdiArrowUp } from "@mdi/js";
import { ChatInput, ChatInputContainer, SendButton } from "./styles";
import { sendMessageToAPI } from "@/services/chatService";

export interface Message {
  id: number;
  text: string;
  options: string[];
  sender: "user" | "bot";
}

interface SendMessageProps {
  messages: Message[]
  onMessages: (messages: Message[]) => void;
}

  const ChatInputArea = ({ onMessages, messages }: SendMessageProps) => {
    const [inputValue, setInputValue] = useState("");
  
    const handleSubmit = () => {
      const newMessage: Message = {
        id: Date.now(),
        text: inputValue,
        options: [],
        sender: 'user'
      }
      onMessages([...messages, newMessage])
    };

  const sendMessageRequest = async () => {
    if (inputValue.trim()) {
      const response = await sendMessageToAPI(inputValue)
      console.log(response)
      const newResponseMessage: Message = {
        id: Date.now(),
        text: response.response,
        options: response.options,
        sender: 'bot'
      }

      console.log(newResponseMessage)
      onMessages([...messages, newResponseMessage])

      setInputValue("");
    }
  }

  useEffect(()=> {
    sendMessageRequest()
  }, [messages])

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  return( 
    <ChatInputContainer>
      <ChatInput
          type="text"
          placeholder="Digite aqui para começar..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          >
      </ChatInput>
      <SendButton onClick={handleSubmit}>
        <Icon path={mdiArrowUp} size={1} />
      </SendButton>
    </ChatInputContainer>
)
}

export default ChatInputArea