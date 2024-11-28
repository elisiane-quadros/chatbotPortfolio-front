'use client'

import React from "react";
import { LeftPanelContainer } from "./styles";
import WelcomePanel from "../WelcomePanel";
import { CurrentButton } from "@/app/page";
import AboutPanel from "../AboutPanel";
import ContactsPanel from "../ContactsPanel";
import ProjectsPanel from "../ProjectsPanel";
import SkillsPanel from "../SkillsPanel";

interface LeftPanelProps {
  activeButton: CurrentButton,

}

export default function LeftPanel({activeButton}: LeftPanelProps) {
  const handleComponent = (button: CurrentButton) => {
    switch(button){
      case "ABOUT":
        return <AboutPanel />
      case "CONTACTS": 
        return <ContactsPanel />
      case "PROJECTS": 
        return <ProjectsPanel />
      case "SKILLS": 
        return <SkillsPanel />
      case "WELCOME": 
        return <WelcomePanel />
    }
  }

  return (
  <LeftPanelContainer>
    {handleComponent(activeButton)}
  </LeftPanelContainer>)
}