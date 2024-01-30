import React from 'react';
import Row from '../Common/Row';

const menu =
[
'Jewelry & Accesories',
'Clothing & Shoes',
'Home & living',
'wedding & Party',
'Toys & Entertainment',
'Art & Collectibles',
'Craft Supplies & Tools'
];


const BottomHeader = () => {
    return ( 
    <div className='w-full h-[60px] px-[10%] bg-[#888f950d]'>
   
    <Row className='flex items-center h-full justify-between'> 
    {menu.map(item=>(<p className='text-[16px] text-slate-800'key={item}>{item}</p>))}
    </Row>
   
   </div>
 );
}
 
export default BottomHeader;