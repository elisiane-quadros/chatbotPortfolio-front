import styled from 'styled-components';

export const WelcomePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 600px;
  margin: auto;
  gap: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-size: 3.5rem;
  color: #40b8bd;
  background: linear-gradient(
    45deg,
    rgba(0, 255, 234, 1) 0%,
    rgba(171, 182, 244, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 2.8rem;
  color: #7f728f;
  margin: 0;
`;

export const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  color: #ccc;
  line-height: 1.5;
  padding: 2rem;
  background-color: #262b4a;
  border-radius: 25px;
  box-shadow: 1px 1px 10px 2px #40b8bd;
  max-width: 800px;

  & span {
    font-size: 1.3rem;
    color: #00ffea;
  }
`;
