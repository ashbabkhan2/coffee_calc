import React from 'react';
import './Main_Body.css';
import Main_Body_Inputs from './Inputs/Main_Body_Inputs';
const Main_Body = () =>{
  return(
      <div className='Main_Body'>
         <h1>Welcome to the coffee shop</h1>
         <Main_Body_Inputs />
      </div>
  )
}
export default Main_Body;