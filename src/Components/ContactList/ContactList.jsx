import { useState } from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import { useNavigate } from "react-router";


const ContactList = ({ contacts }) => {

  const navigate = useNavigate()

  const handleContactClick = (contactId) => {
  navigate(`/contact/${contactId}/messages`)
  const chatScreen = document.querySelector(`.chat-screen-${contactId}`)
  chatScreen.classList.add('active')
  document.querySelector('.contact-screen-container').classList.add('hidden')
}
  return (
    <div className="contact-list-container">
      <div className="contact-list-header">
        <h2 className="contact-list-title">Chats</h2>
        <div className="contact-list-menu">
         <i class="bi bi-chat-left"></i>
          <i class="bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className="chat-seek">
          <input type="text" className="chat-seek-input"
          placeholder="Buscar un chat o iniciar uno nuevo" />
          <div className="chat-seek-icon">
            <i className="bi bi-search"></i>
          </div>
        </div>
      
      <div className="contact-list">
       {contacts.map((contact) => (
        <div key={contact.id} className="contact-item" onClick={() => handleContactClick(contact.id)}>
            <ContactItem contact={contact} />
          </div>
        )
        )
        } 
      </div>
      
    </div>
  );
};

export {ContactList};

//llamamos al componente ContactItem, y le pasamos la lista de contactos