import React from 'react';
import {
  ImageCard,
  PanelCardsContainer,
  PreojectCard,
  ProjectsArea,
  ProjectsMenu,
} from './styles';
import projectInfoList from './constants/projectInfoList';

export default function ProjectsPanel() {
  return (
    <ProjectsArea>
      <ProjectsMenu>
        <a href="#">Todos</a>
        <a href="#">Front-end</a>
        <a href="#">Mobile</a>
        <a href="#">Python</a>
        <a href="#">Machine Learning</a>
      </ProjectsMenu>
      <PanelCardsContainer>
        {projectInfoList.map((project) => (
          <PreojectCard key={project.id}>
            <ImageCard
              src={project.image}
              alt={project.title}
              width={250}
              height={250}
            />
            <p>{project.title}</p>
            <div></div>
          </PreojectCard>
        ))}
      </PanelCardsContainer>
    </ProjectsArea>
  );
}
