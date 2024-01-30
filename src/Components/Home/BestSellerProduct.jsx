import React from 'react';
import Container from '../Common/Container';
import Row from '../Common/Row';
import ProductCart from '../ProductCart';

const BestSellerProduct = () => {
    return ( 
    <Container>
        
           <h1 className='w-full text-center text-[30px] text-[#1e2832] mt-[80px] font-semibold mb-[40px] uppercase'>
                Best Seller Products
            </h1>
    
        <Row>
            <Row className='items-cnter'>
            
            <p className='text-[16px] mr-[40px] cursor-pointer text-black font-bold hover:text-[#757575]'>All Products</p>
            <p className='text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]'>Clothing</p>
            <p className='text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]'>Shoes</p>
            <p className='text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]'>Bags</p>
            <p className='text-[16px] mr-[40px] cursor-pointer text-[#00000080]  hover:text-[#757575]'>Others</p>
            
            </Row>
        </Row>

        <Row className='flex-wrap gap-[1%] mt-[40px]'>
       <div className='w-[24%] mb-[20px]'>
        <ProductCart/>
      </div>

      <div className='w-[24%] mb-[20px'>
        <ProductCart/>
      </div>

      <div className='w-[24%] mb-[20px'>
        <ProductCart/>
      </div>
      <div className='w-[24%] mb-[20px'>
        <ProductCart/>
      </div>
      <div className='w-[24%] mb-[20px'>
        <ProductCart/>
      </div>
      <div className='w-[24%] mb-[20px'>
        <ProductCart/>
      </div>

      <div className='w-[24%] mb-[20px'>
        <ProductCart/>
      </div>
      <div className='w-[24%] mb-[20px'>
        <ProductCart/>
      </div>
        </Row>

    </Container>
     );
}
 
export default BestSellerProduct;