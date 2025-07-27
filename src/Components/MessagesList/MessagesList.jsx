import React from "react"
import Message from "../Message/Message"

const MessagesList = ({messages, onDeleteMessage}) => {
    if(messages.length === 0){
        return(
            <div>
                <p>No hay mensajes</p>
            </div>
        )
    }

  const message_list = messages.map(
    (message)=>{
        return(
            <Message 
            key={message.id}
            emisor={message.emisor}
            hora={message.hora}
            texto={message.texto}
            status={message.status}
            id={message.id}
            onDeleteMessage={onDeleteMessage}
            />
        )
    })
    return (
        <div>
           {message_list}
        </div>
    )
}

export default MessagesList;