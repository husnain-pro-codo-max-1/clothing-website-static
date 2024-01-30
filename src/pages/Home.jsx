import React from 'react'
import Layout from '../Components/Common/Layout';
import BottomHeader from '../Components/Header/BottomHeader';
import BestSellerProduct from '../Components/Home/BestSellerProduct';
import HeroSection from '../Components/Home/HeroSection';
import PopularProducts from '../Components/Home/PopularProducts';


const Home = () => {
    return ( 
        
     <Layout>
     <BottomHeader/>      
     <HeroSection/>
     <PopularProducts/>
     <BestSellerProduct/>
    </Layout>
     );
}
 
export default Home;