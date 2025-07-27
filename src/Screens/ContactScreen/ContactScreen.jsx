import React, { useState } from 'react';
import {ContactList} from '../../Components/ContactList/ContactList';
import { getContactList } from '../../Services/contactService';


const ContactScreen = () => {
    const contacts = getContactList()
  const [contactState, setContactsState] = useState(contacts)

  return (
    <div className="contact-screen-container">
     
      <ContactList contacts={contactState} />
    </div>
  );
};

export {ContactScreen};


//contactScreen llama al componente ContactList, y a este componente ContactScreen debemos llamarlo en la App.jsx , creando una nueva ruta path="/contacts"

/* CONSULTA A WINDSORF
hace un componente de React llamado ContactScreen, que tenga un estado con la lista de contactos, dicha lista de contactos
debera renderizarse dentro del componente, por cada contacto quiero que
crees un <div> con la informacion del contacto</div>
Observa las propiedades de los contactos para mostrar la informacion en pantalla
, necesito que dividas el renderizado de la lista en un componente aparte llamdo ContactList que reciba el
estadoo de la lista y cada ContactItem tambien será un componente aparte, (@ContactScreen) */