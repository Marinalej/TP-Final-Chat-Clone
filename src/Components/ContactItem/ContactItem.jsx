import React from 'react';
import { Link } from 'react-router';
import { getLastMessage, getLastSeen } from '../../Services/contactService';

const ContactItem = ({ contact }) => {
  return (
  
    <Link to={`/contact/${contact.id}/messages`} className='contact-item'>
      <div className='contact-avatar-container'>
        <img src={contact.avatar} alt={contact.name}  className='contact-avatar'/>
        <div className='contact-name-container'>
          <h2 className='contact-name'>{contact.name}</h2> 
         <p className='contact-last-seen'>{getLastSeen(contact)}</p>
        </div>
        
      </div>
      <div className='last-message'>
        <p className='contact-last-message'>{getLastMessage(contact)}</p>
        </div>
  
    </Link>
  )
}

export {ContactItem};

//recibe el objeto {contact} muestra contacto en detalles,a este componente lo llamamos en ContactList