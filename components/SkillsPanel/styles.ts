import styled from 'styled-components';
import { Icon } from '@mdi/react';

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export type Position = 'left' | 'right';

interface SkillItemsProps {
  position: Position;
}

export const SkillItems = styled.div<SkillItemsProps>`
  display: flex;
  justify-content: ${(props) =>
    props.position === 'left' ? 'flex-start' : 'flex-end'};
  align-items: center;
  gap: 1.5rem;
  background-color: #262b4a;
  border-radius: 50px;
  height: 100px;
  width: 900px;
`;

export const IconArea = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202540;
  box-shadow:
    0px 0px 10px #9977dd,
    0px 0px 10px #9977dd inset;
  border: 2px solid #9977dd;
`;
export const StyledIcon = styled(Icon)`
  padding: 2rem;
  align-items: center;
  color: #40b8bd;
`;

export const SkillDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & h2 {
    color: #40b8bd;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }

  & p {
    color: #ccc;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    margin: 0;
  }
`;
