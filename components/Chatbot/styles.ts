import styled, {css} from 'styled-components';

export const ChatBotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #262B4A;
  border-radius: 20px;
  width: 100%; 
  max-width: 700px;
  padding: 1rem;

  
`;

export const ChatMessageArea = styled.div`
 display: flex;
 flex-direction: column;
  padding: 1rem;
  max-width: 100%;
  max-height: 650px;  
  overflow-y: auto;

   &::-webkit-scrollbar {
    width: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background: #3c4473; 
    border-radius: 5px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #5c63a8; 
  }

  &::-webkit-scrollbar-track {
    background: #262b4a; 
  }

`;

interface MessageProps {
  sender: "user" | "bot";
}

export const MessageArea = styled.div<MessageProps>`
  display: flex;
  align-items: flex-start;
  width: fit-content;
  padding: 10px;
  border-radius: 10px;
  ${({ sender }) =>
    sender === "user"
      ? css`
          align-self: flex-end;
          background-color: #3C4473;
          font-family: 'Montserrat', sans-serif; 
          color: white;
        `
      : css`
          align-self: flex-start;
          background-color: #262b4a;
          font-family: 'Poppins', sans-serif; 
          color: #ccc;
        `}
 
`;


export const ButtonsNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 1rem;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 30px;
  border: 1px solid #00ffea;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #40b8bd;
  background-color: transparent;
  width: 100%;
  cursor: pointer;
  transition: ease.3s;

  &:hover {
    color: #00FFEA;
    box-shadow: 1px 1px 6px 2px #00FFEA;

  }
`;



