import react from 'react'
import Row from '../Common/Row';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const HeaderButton = ({tittle,Icon,url='/'})=> {
    return(

      <Link to ={url}>
        <Row className='mx-[5px]'>
          <Icon/>
          <p className=" text-[#1e2832]  text-[18px] hover:text-slate-400 ml-[2px]">
          {tittle}
          </p>
        </Row>
</Link>
    );
}

export default HeaderButton