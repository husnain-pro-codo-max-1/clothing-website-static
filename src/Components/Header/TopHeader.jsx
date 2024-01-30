import React from 'react'
import BucketIcon from '../../svgs/BucketIcon';
import RotatedSquare from '../../svgs/RotatedSquare';
import SearchIcon from '../../svgs/SearchIcon';
import UserIcon from '../../svgs/UserIcon';
import Row from '../Common/Row';
import HeaderButton from './HeaderButton';
import Cart from '../../pages/Cart';

const TopHeader = () => {
    return (
        
        <div className='w-full h-full px-[10%]'>
    <Row className='flex items-center h-full justify-between'> 
    <SearchIcon/>
    <Row className='items-center'>
    <RotatedSquare/>
    <h1 className='text-black text-[28px] mx-[10px]'>RiftCom</h1>
    <RotatedSquare/>
    </Row>
    
    <Row>
      <HeaderButton tittle = "Account"  Icon = {UserIcon}/>
      <HeaderButton tittle = "Cart"  Icon = {BucketIcon} url ='Cart'/>
    </Row>     

    </Row>
   </div>
);
}
 
export default TopHeader ;