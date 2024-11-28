import styled from 'styled-components';
import Image from 'next/image'


export const ProjectsArea = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;

`

export const ProjectsMenu = styled.div`
  display: flex;
  gap: 2rem;
  & a {
    text-decoration: none;
     font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #40b8bd;
  }
`

export const PanelCardsContainer = styled.div`
display: grid;
justify-items: center;
align-content: space-evenly;
grid-template-columns: repeat(3, 1fr);
gap: 1rem;
`

export const PreojectCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 300px;
height: 300px;
border-radius: 30px;
background-color: #262b4a;
padding: 1rem;

`
export const ImageCard = styled(Image)`
border-radius: 30px;
`

