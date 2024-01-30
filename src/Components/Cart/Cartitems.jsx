import React from 'react'
import Qtycontainer from '../Common/QtyContainer';
import Row from '../Common/Row';
const Cartitems = () => {
    return ( 
        <Row className='w-full py-[10px] items-center  px-[20px] border-[1px] border-gray-400 rounded  mb-[30px]'>
       <Row className='w-[20%]'>
       <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="cart product"
        className='w-2/3 h-[150px] object-cover rounded-[6px]' />

       </Row>
       
        <p className='w-[20%] text-[16px] text-black font-medium'>
            Demo Product
        </p>
        <p className='w-[20%] text-[16px] text-black font-medium'>
            $20
        </p>
        <Row className='w[20%] justify-center '>
        <Qtycontainer/>
        </Row>

        <p className='w-[20%] text-center  text-[16px] text-black font-medium'>
            $1040 
         </p>
       </Row> 
        );
}
 
export default Cartitems;