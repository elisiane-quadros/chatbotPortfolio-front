'use client'
import React from "react";
import {RightPanelContainer} from './styles'
import ChatBot from "../Chatbot";
import { CurrentButton } from "@/app/page";

interface RigthPanelProps {
  onActiveButton: (activeButton: CurrentButton) => void;
}
export default function RigthPanel({onActiveButton}: RigthPanelProps) {
  return (
  <RightPanelContainer>
    <ChatBot onActiveButton={onActiveButton} />
  </RightPanelContainer>);
}