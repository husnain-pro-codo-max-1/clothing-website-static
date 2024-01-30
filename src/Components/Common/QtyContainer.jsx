import React from 'react'
import Row from './Row';
import Button from './Button';
import { useReducer } from 'react';

 const Qtycontainer = () => {

  const initialstate = 0 ;
  const reducer = (state, action)=>
  {
switch (action) 
{
    case 'increment' :
        return  state + 1;
    case 'decrement' :
    
       if(state===0){return 0;}
       else {
        return state -1;
       }  
            
        default :
        
        return state ;
    
      }

   }

   const [count, dispatch] = useReducer(reducer,initialstate);
  return ( 
  
  <Row className=' items-center'>
  
            <Button className='h-[52px] w-[52px]' title='-' onClick={()=> dispatch('increment')} />
  
            <p className='w-[70px] text-center text-[16px] font-semibold'>{count}</p>
  
            <Button  className='h-[52px] w-[52px]'  title='+'  onClick={()=> dispatch('decrement')} />
        </Row>
  );
}
 
export default Qtycontainer;