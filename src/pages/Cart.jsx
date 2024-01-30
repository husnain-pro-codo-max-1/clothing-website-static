import React from 'react'
import Cartitems from '../Components/Cart/Cartitems';
import Container from '../Components/Common/Container';
import Layout from '../Components/Common/Layout' 
import Qtycontainer from '../Components/Common/QtyContainer';
 import Row from '../Components/Common/Row';

const Cart = () => {
    return ( <>
        
        <Layout>
            <Container className='my-[40px]'>
            <Row className='mb-[30px] justify-center'>
                <h6 className='text-[24px] text-slate-700 font-semibold'>Cart Detail</h6>
            </Row>
            <Row  className='flex-col mb-[30px]'>
           <Row className='h-[40px] bg-gray-400 w-full items-center px-[20px] '> 
           <h6 className='text-white text-[18px] font-medium w-[20%]'>Image </h6>
           <h6 className='text-white text-[18px] font-medium w-[20%]'>Title </h6>
           <h6 className='text-white text-[18px] font-medium w-[20%]'>Price </h6>
           <h6 className='text-white text-[18px] font-medium w-[20%] text-center'>Qty</h6>
           <h6 className='text-white text-[18px] font-medium w-[20%] text-center'>Total </h6>
           </Row>   
            
           </Row>
          <Cartitems/>
          <Cartitems/>
          <Cartitems/>
          <Cartitems/>
          <Cartitems/>
            </Container>
        </Layout>
        </>
     );
}
 
export default Cart;