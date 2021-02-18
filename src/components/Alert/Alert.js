import React from 'react';
import './Alert.css';

export const Alert = ({ message }) => {
  return (
    <div className="Alert">
      {message}
    </div>
  )
}
