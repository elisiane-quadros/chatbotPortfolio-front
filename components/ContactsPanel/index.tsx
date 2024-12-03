import React from 'react'
import { AskContact, ContactButton, ContactButtonContainer } from './styles'
import Icon from '@mdi/react'
import contactButtonList from './constants/contactButtonsList'

export default function ContactsPanel() {
  return (
    <ContactButtonContainer>
      <AskContact>
        <h2>Gostou do meu trabalho?</h2>
        <span>Entre em contato</span>
      </AskContact>
      {contactButtonList.map(contact => (
        <ContactButton key={contact.id}>
          <Icon path={contact.icon} size={1} />
          <span>{contact.label}</span>
          <Icon path={contact.actionIcon} size={1}/>
      </ContactButton>
      ))}
    </ContactButtonContainer>
  )
}
