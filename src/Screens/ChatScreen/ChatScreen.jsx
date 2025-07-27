import React from "react";
import MessagesList from "../../Components/MessagesList/MessagesList";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getContactById } from "../../Services/contactService";



const ChatScreen = () => {
   const { contact_id } = useParams()
   console.log("contact_id recibido:", contact_id)

    const [contact_selected, setContact] = useState(null)

    const [messages, setMessages] = useState([])

    const [newMessage, setNewMessage] = useState("")

     useEffect(() => {
        const contact_selected = getContactById(contact_id)
        if (contact_selected) {
            setContact(contact_selected);
            setMessages([...contact_selected.messages])
        }
    }, [contact_id])
    
        const deleteMessageById = (messages_id) => {
            const new_message_list = []
            for (let message of messages) {
                if (message.id !== messages_id) {
                    new_message_list.push(message)
                }
            }
            setMessages(new_message_list)
                
        }
        const handleSubmit = (event) =>{
            event.preventDefault()
            if(!newMessage) 
                return
            const new_message = {
                emisor: "YO",
                hora: "23:10",
                id: messages.length + 1,
                texto: newMessage,
                status: "visto",
            }
            setMessages([...messages, new_message])
            setNewMessage("")
        }
        if(!contact_selected){
          
          return(
            <div className="chat-screen-container">
              <div className="no-contact"> 
                <span>selecciona un chat para comenzar</span>
              </div>
            </div>
          )
         
        }
 
        return (
    <div className="chat-screen">
      <header className="chat-header">
        
        <div className="contact-info">
            <img 
              src={contact_selected.avatar} 
              alt={contact_selected.name} 
              className="contact-avatar"
            />
            <div className="contact-status-container">
              <h2>{contact_selected.name}</h2>
              <span className="contact-status">{contact_selected.status}</span>
              <span className="contact-lastseen">última conexión: {contact_selected.lastSeen}</span>
            </div> 
            <div className="contact-icons">
              <i className="bi bi-camera-video"></i>
              <i class="bi bi-telephone"></i>
            </div> 
              <i class="bi bi-search-heart"></i> 
          </div>
       
      </header>
      <div className="chat-body">
         <MessagesList messages={messages} onDeleteMessage={deleteMessageById} />
            <form onSubmit={handleSubmit} className="message-form">
              <div className="input-container">
                <div className="icons-left">
                  <i className="bi bi-paperclip" />
                  <i className="bi bi-emoji-smile" />
              </div>
                <input
                  type="text"
                  className="message-input"
                  placeholder="Escribe un mensaje"
                  value={newMessage}
                  onChange={(event) => setNewMessage(event.target.value)}
                />
                    <div className="icon-rigth">
                      <i class="bi bi-mic"></i>
                </div>
              </div>  
            </form>
      </div> 
    </div>
    )
        }
        

export {ChatScreen}

//usé useEfect sin crear contexto, no me funcionaba, se me rompía la página