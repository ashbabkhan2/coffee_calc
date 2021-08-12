import React, {useContext} from 'react';
import Side_Menu_Content from './Side_Menu_Content/Side_Menu_Content';
import Main_Context from '../../contexts/Main_Context';
import './Side_Menu.css';
import Set_Context from '../../contexts/Set_Context';
const Side_Menu = () =>{
    // const arr=[{name:'water',quantity:1000}]
    const ctx = useContext(Main_Context);
    const ctx1 = useContext(Set_Context);
    const setvalue=() =>{
       ctx1.setwater({name:'Water',quantity:1000});
      ctx1.setMilk({name:'Milk',quantity:1000});
       ctx1.setTea({name:'Tea',quantity:200});
       ctx1.setCoffee({name:'Coffee',quantity:200});
    }
   return(
     <div className='Side_Menu'>
        <h2>Stock Available</h2>
         {
          ctx.map((e)=>{
            //  console.log(e.name,e.quantity);
            return <Side_Menu_Content name={e.name} quantity={e.quantity}/>
          })
         }
         <div className='refill_button'>
               <a href='#' onClick={setvalue}>Refill Stock</a>
         </div>
     </div>

    

   );
}
export default Side_Menu;