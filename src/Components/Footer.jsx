import React from 'react';
import Container from './Common/Container';
import Row from './Common/Row';


const Footer = () => {
    return ( 
    <Container className='bg-black h-[52] py-[14px]'>
        <Row className='text-white justify-between h-full items-center'>
        <p> 2023 RiftCom Inc.</p>
        <img src='/images/cards.png' alt="image" className='w-[283px]'/>

        <p className=''> Scroll to Top</p>
        </Row>
    </Container>

    );
}
 
export default Footer;