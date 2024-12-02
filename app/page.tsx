'use client';
import RigthPanel from '@/components/RightPanel';
import styles from './page.module.css';
import LeftPanel from '@/components/LeftPanel';
import React, { useState } from 'react';

export type CurrentButton =
  | 'ABOUT'
  | 'CONTACTS'
  | 'SKILLS'
  | 'PROJECTS'
  | 'WELCOME';

export default function Home() {
  const [activeButton, setActiveButton] = useState<CurrentButton>('WELCOME');
  return (
    <div className={styles.pageContainer}>
      <div className={styles.sectionContainer}>
        <LeftPanel activeButton={activeButton} />
        <RigthPanel onActiveButton={setActiveButton} />
      </div>
      <footer>
        <span>&copy; 2024 Elisiane Quadros. Meu ChabotFolio.</span>
      </footer>
    </div>
  );
}
