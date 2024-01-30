import React from 'react';
import Footer from '../Footer';
import TopHeader from '../Header/TopHeader';

const Layout = ({children}) => {
    return ( <div className='w-full h-[60px] bg-[#1e28320d]'>
    <TopHeader/>
    {children}
    <Footer/>
    </div> );
}
 
export default Layout;