import React from 'react'
import Button from '../Common/Button';
import Row from '../Common/Row';

const HeroSection = () => {
    return ( <div className='w-full px-[10%] py-[90px]'>
    <Row className='w-full items-center justify-between'>
      <div  className='w-[46%]'>
        <h1 className='text-[74px] text-slate-950 font-light'>Collection</h1>
        <p className='text-[30px] text-black mt-[52px]'>you can explor and shop many products different Collections from various brands here</p>
      <Button/>
      </div>

      <div className='w-[46%]'>
      <div className='w-[424px] h-[520px] relative'>
        <img src="https://images.unsplash.com/photo-1532103054090-3491f1a05d0d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" 
          className='animate-[wobble_10s_ease-in] w-full h-full rounded-tl-[160px] rounded-br-[160px]' />
          <div  className='animate-[wobble_10s_ease-in] absolute top-[20px] left-[18px] -z-[1] w-full h-full rounded-tl-[160px] rounded-br-[160px] border-[2px] border-[#00000040]'/>
        </div>
      </div>
    </Row>        
      </div>
      );
}
 
export default HeroSection;