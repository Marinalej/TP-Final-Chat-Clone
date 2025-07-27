import React, {useContext, useState} from 'react'
import {  Route, Routes } from 'react-router'
import { ContactScreen } from './Screens/ContactScreen/ContactScreen'
import { ChatScreen } from './Screens/ChatScreen/ChatScreen'
import './App.css'
import { Header } from './Components/Header/Header'
import { AppThemeContext } from './Contexto/AppThemeContext'
import { Sidebar } from './Components/Sidebar/Sidebar'

const App = () => {
  const { app_theme } = useContext(AppThemeContext);
  
  return (
    <div className={'App-container ' + app_theme + '-theme'}>  
      <Header/>
      <div className='main-content'>
        <Sidebar/>
        <div className='App-content'>
          <ContactScreen />
          <Routes>
            <Route path="/contact/:contact_id/messages" element={
             
                <ChatScreen />
              
              } />
          </Routes>
        </div>
      </div>
    </div>
  )
}
export default App



































