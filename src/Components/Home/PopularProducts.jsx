import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Container from '../Common/Container';
import Row from '../Common/Row';

const PopularProducts = () => {
    return (  

        <Container>
        <Row className='justify-center my-[20px] uppercase'>
          <h1 className='text-[30px] font-semibold text-[#1e2832]'>popular products</h1>
        </Row>
          <Row className='gap-[24px]'>
            <div className='h-[648px] w-[52px] relative'>
              <p className='text-[34px] h-full w-[648px] text-black -rotate-90 absolute text-center -z-[1] '>Explore new and popular styles</p>
            </div>

            <Link to ='/product-detail'>
            <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="top style"
            className='w-[510px] h-[648px] object-cover cursor-pointer' />
            </Link>

            <Row  className='w-1/2 flex-wrap gap-[24px]'>
              {[...new Array(4)].map((_ ,idx)=>(<Link to='/product-detail' className='w-[46%] h-[312px]' key={idx}>
                <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="top popular"
                  className='w-full h-[312px] object-cover'
                   />
              </Link>))}

            </Row>
      
          </Row>
        </Container>     

    );
}
 
export default PopularProducts;