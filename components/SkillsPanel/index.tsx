'use client';
import React from 'react';

import {
  SkillsContainer,
  SkillItems,
  IconArea,
  StyledIcon,
  Position,
  SkillDescription,
} from './styles';
import {
  mdiApi,
  mdiCellphone,
  mdiLanguagePython,
  mdiMonitorCellphone,
  mdiPencilRuler,
  mdiRobotOutline,
} from '@mdi/js';

interface SkillProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  position: Position;
}

export default function SkillsPanel() {
  const skillsList: SkillProps[] = [
    {
      id: 1,
      title: 'Desenvolvimento Front-End',
      description:
        'Criação de interfaces responsivas e acessíveis com HTML, CSS, JavaScript, Typescript e Next.js, priorizando desempenho e experiência do usuário.',
      icon: mdiMonitorCellphone,
      position: 'left',
    },
    {
      id: 2,
      title: 'Integração de APIs',
      description:
        'Implementação de integrações entre aplicações e APIs RESTful, otimizando a comunicação de dados de forma segura e eficiente.',
      icon: mdiApi,
      position: 'right',
    },
    {
      id: 3,
      title: 'Prototipagem e UI/UX',
      description:
        'Desenvolvimento de interfaces com foco em usabilidade e design atrativo, utilizando ferramentas como Figma e Photoshop.',
      icon: mdiPencilRuler,
      position: 'left',
    },
    {
      id: 4,
      title: 'Desenvolvimento com Python',
      description:
        'Criação de soluções inteligentes com Python, incluindo automação, análise de dados e desenvolvimento de algoritmos voltados para IA e Machine Learning.',
      icon: mdiLanguagePython,
      position: 'right',
    },
    {
      id: 5,
      title: 'Inteligência Artificial e Machine Learning',
      description:
        'Desenvolvimento de modelos de aprendizado de máquina e soluções de IA, utilizando bibliotecas como TensorFlow, scikit-learn e NLTK.',
      icon: mdiRobotOutline,
      position: 'left',
    },
    {
      id: 6,
      title: 'Desenvolvimento Mobile',
      description:
        'Criação de aplicativos móveis interativos e eficientes com React Native e Expo, integrando APIs externas e garantindo design responsivo.',
      icon: mdiCellphone,
      position: 'right',
    },
  ];
  return (
    <SkillsContainer>
      {skillsList.map((skill) => (
        <SkillItems key={skill.id} position={skill.position}>
          {skill.position === 'left' ? (
            <IconArea>
              <StyledIcon path={skill.icon} size={1.5} />
            </IconArea>
          ) : (
            <div style={{ width: '100px', height: '100px' }} />
          )}
          <SkillDescription>
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </SkillDescription>
          {skill.position === 'right' ? (
            <IconArea>
              <StyledIcon path={skill.icon} size={1.5} />
            </IconArea>
          ) : (
            <div style={{ width: '100px', height: '100px' }} />
          )}
        </SkillItems>
      ))}
    </SkillsContainer>
  );
}
