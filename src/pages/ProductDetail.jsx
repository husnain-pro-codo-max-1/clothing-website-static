import React from 'react'
import Footer from '../Components/Footer';
import BottomHeader from '../Components/Header/BottomHeader';
import TopHeader from '../Components/Header/TopHeader';
import HeroSection from '../Components/Home/HeroSection';
import PopularProducts from '../Components/Home/PopularProducts';
import Container from '../Components/Common/Container';
import Row from '../Components/Common/Row';
import Button from '../Components/Common/Button';
import Layout from '../Components/Common/Layout';
import Qtycontainer from '../Components/Common/QtyContainer';

const ProductDetail = () => {
    return ( 
        
     <Layout> 
    <Container className='my-[40px]'>
        <Row className='justify-between'>
        <Row className='w-[47%]'> 
            <img src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
             alt="product"  className='w-full h-[83vh] object-cover'/>
        </Row>
        <Row className='flex-col w-[47%] '>
            <h1 className='text-[30px] font-semibold text-slate-700 mb-[70px]'> Clothing | Demo Product</h1>

        
            <Row className='gap-[20px] mb-[10px]'>
            <p className='text-[18px] text-black font-semibold w-[15%]'>Rating:</p> 
            <p className='text-[18px] text-black'>2/5</p> 
            </Row>

           <Row className='gap-[20px]'>
            <p className='text-[18px] text-black font-semibold w-[15%]'>Price:</p> 
            <p className='text-[18px] text-black'>$20</p> 
            </Row>


            <Row className='gap-[20px] '>
            <p className='text-[18px] text-black font-semibold w-[15%] ]'>Category:</p> 
            <p className='text-[18px] text-black'>Clothing</p> 
            </Row>

             <Row className='gap-[20px] mt-[30px]'>
            <p className='text-[18px] text-black font-semibold'>Description</p> 
            <p className='text-[18px] text-black'>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Quam tenetur ea animi sed adipisci quo veniam 
            ducimus cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
             quibusdam. Corrupti illum dicta eum dolore!</p> 
            </Row>        

        <div className='mt-[40px] w-full'>
        <Qtycontainer/>       
        </div>
        <Button  className='h-[52px] w-[174px] mt-[10px]'  title='Add to Cart'/>
 
        </Row>

 
        </Row>
    </Container>
    </Layout>
     );
}
 
export default  ProductDetail;