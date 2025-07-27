import React, {useContext} from 'react';
import { AppThemeContext } from '../../Contexto/AppThemeContext';

const Header = () => {
  const { toggleAppTheme } = useContext(AppThemeContext)
  return (
    <div className="header-logo">
      <div className='header-logo-container'>
        <i className="bi bi-whatsapp"></i>
        <p className='header-logo-text'>Whatsapp</p>
      </div>
      <button 
        onClick={toggleAppTheme} 
        className="theme-toggle-btn"
      >
        <i className='bi bi-sun'></i>
      </button>
      <div className='header-icon-container'>
        <i class="bi bi-dash-lg"></i>
        <i className="bi bi-window-stack"></i>
        <i class="bi bi-x-lg"></i>
      </div>
    </div>
  );
};

export {Header};