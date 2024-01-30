import React from 'react';
import Row from './Common/Row';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const ProductCart = () => {
    return ( 
        <>
            <Link to='product-detail' className='w-full pb-[5px] shadow'>
                <img src="https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="ProductCart"
                className='w-full object-cover h-[400px]'/>

                <Row className='px-[10px]'>
                <h6 className='text-black text-[16px] font-semibold mt-[18px]'>Demo</h6>
                </Row>
                <Row className='justify-between t-[16px] mb-[10px] px-[10px]'>
                <p className='text-[16px] text-[#00000080]'>Clothing</p>
                <p className='text-[16px] text-[#00000080] font-semibold'>$20</p>
                </Row>

            </Link>
        </>
     );
}
 
export default ProductCart;