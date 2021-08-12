import React, { useContext,useEffect,useState } from 'react';
import Main_Context from '../../../contexts/Main_Context';
import Set_Context from '../../../contexts/Set_Context';
import './Main_Body_Inputs.css';
const Main_Body_Inputs = () =>{
    const ctx = useContext(Main_Context);
    const ctx1 = useContext(Set_Context);
    const [selects,setselects] = useState(0);
    const [price,setprice] =useState(0);
    const [input_values,set_input_values] = useState(0);
    
    const setvalue = (water,Milk,Tea,Coffee) =>{
        let v = ctx[0].quantity-input_values*water;
        let v1 = ctx[1].quantity-Milk*input_values;
        let v2 = ctx[2].quantity-Tea*input_values;
        let v3 = ctx[3].quantity-Coffee*input_values;
        ctx1.setwater({name:'water',quantity:v});
        ctx1.setMilk({name:'Milk',quantity:v1});
        ctx1.setTea({name:'Tea',quantity:v2});
        ctx1.setCoffee({name:'Coffee',quantity:v3});
    }
    const setinputvalue = (e)=>{
        set_input_values(parseInt(e));
    }
    const c_values = (e)=>{
        setselects(parseInt(e));
    }
    const show_value=() =>{
        switch(selects){
            case 1:
                setvalue(4,10,0,8);
                break;
            case 2:
                setvalue(4,15,0,4);
                break;
            case 3:
                setvalue(8,10,8,0);
                break;
            case 4:
                setvalue(8,15,8,0);
                break;            

        }
    }

   useEffect(()=>{
       switch(selects){
            case 1:
                setprice(100*input_values);
                break;
            case 2:
                setprice(75*input_values);
                break;
            case 3:
                setprice(60*input_values);
                break;
            case 4:
                setprice(50*input_values);
                break;            

        }
    })

  return(
    <div className='Main_Body_Input'>
        <h2>Select Order Preference</h2>
        <select className='Select' onChange={(e)=>{c_values(e.target.value)}}>
           <option value='none' selected hidden disabled>Select drink type</option>
           <option value='1'>Strong Coffee</option>
           <option value='2'>Light Coffee</option>
           <option value='3'>Strong Tea</option>
           <option value='4'>Light Tea</option>
        </select>
        <input className='no_of_cups' defaultValue={0} onChange={(e)=>{setinputvalue(e.target.value)}} type='number' placeholder='Enter no. of cups'/>
        <div className='input_button'><a href='#' onClick={show_value}>{`Pay Rs ${price}`} </a></div>
    </div>
  );
}
export default Main_Body_Inputs;