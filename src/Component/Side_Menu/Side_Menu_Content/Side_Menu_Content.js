import React from 'react';
import './Side_Menu_Content.css';
const Side_Menu_Content = (props) =>{
  return(
    <div className='Side_Menu_Content'>
      <h3>{props.name}</h3>
      <h3>{props.quantity}</h3>
    </div>
  );
}

export default Side_Menu_Content;