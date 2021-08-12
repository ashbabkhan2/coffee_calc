import React, { useState } from 'react';
import Main_Body from './Component/Main_Body/Main_Body';
import Navbar from './Component/Navbar/Navbar';
import Main_Context from './contexts/Main_Context';
import Side_Menu from './Component/Side_Menu/Side_Menu';
import './App.css';
import Set_Context from './contexts/Set_Context';

const App = () =>{
  const[water,setwater] = useState({name:'Water',quantity:1000});
  const[Milk,setmilk] = useState({name:'Milk',quantity:1000});
  const[Tea,settea] = useState({name:'Tea',quantity:200});
  const[Coffee,setcoffee] = useState({name:'Coffee',quantity:200});
  const[Sugar,setsugar] = useState({name:'Sugar',quantity:500});
  return(
    <Main_Context.Provider value={[water,Milk,Tea,Coffee,Sugar]}>
      <Set_Context.Provider value={{setwater:setwater,setMilk:setmilk,setTea:settea,setCoffee:setcoffee,setSugar:setsugar}}>
      <div className='App'>
         <Navbar />
         <div className='Grid-app'>
         <Side_Menu />
         <Main_Body />
         </div>
     </div>
     </Set_Context.Provider>
     </Main_Context.Provider>
  );
}

export default App;