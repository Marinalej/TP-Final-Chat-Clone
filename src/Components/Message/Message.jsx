import React from 'react'
const Message = ({emisor, hora,texto, status, id,onDeleteMessage}) => {
  return (
        <div className={`message-container ${emisor}`}>
          <div className='message-bubble'>
            <p>{texto}</p>
            <div className='message-time'>
              {hora}
              {emisor === 'YO' && (
              <button onClick={() => {onDeleteMessage(id)}} className='btn-trash'>
                 <i class="bi bi-trash"></i>
              </button> 
              )}
            
            </div>
            
          </div>   
      
    </div>
  )
}

export default Message
