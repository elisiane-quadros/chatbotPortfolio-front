import styled from "styled-components";

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #202540;
`;

export const ChatInput = styled.input`
  border: none;
  height: 50px;
  width: 100%;
  background-color: transparent;
  color: #ccc;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: #7F728F;
    font-family:'Montserrat', sans-serif; 
  }
`;

export const SendButton = styled.button`
  padding: 5px;
  border-radius: 50%;
  border: #202540;
  background-color:#00FFEA ;
  color:  #202540 ;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #00FFEA;
    box-shadow: 1px 1px 6px 2px #40B8BD;
    
  }
`;