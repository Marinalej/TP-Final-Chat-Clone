import React from 'react'



const Sidebar = () => {
   

  return (
    <div className="sidebar" >
      <div className="sidebar-icon">
        <i className="bi bi-chat-left-fill"></i>
        <i className="bi bi-circle"></i> 
        <i className="bi bi-chat"></i>
        <i className="bi bi-people"></i>
      </div>
        <div className='sidebar-inferior'>
                <i className="bi bi-star"></i>
                <i className="bi bi-archive-fill"></i>
                <i className= "bi bi-gear" ></i>
         </div>
    </div>
  );
}

export {Sidebar}