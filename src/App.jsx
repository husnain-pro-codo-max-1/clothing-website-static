import { useState } from 'react'
import './App.css'
import SearchIcon  from '../src/svgs/SearchIcon'
import RotatedSquare  from '../src/svgs/RotatedSquare'
import Row from './Components/Common/Row'
import UserIcon from '../src/svgs/UserIcon'
import Carticon from '../src/svgs/BucketIcon'
import HeaderButton from  './Components/Header/HeaderButton'
import TopHeader from './Components/Header/TopHeader'
import BottomHeader from './Components/Header/BottomHeader'
import HeroSection from './Components/Home/HeroSection'
import Container from './Components/Common/Container'
import PopularProducts from './Components/Home/PopularProducts'
import BestSellerProduct from './Components/Home/BestSellerProduct'
import Footer from './Components/Footer'


import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import {BrowserRouter as Router , Route} from  'react-router-dom'
import Cart from './pages/Cart'

function App() {

  return (
    <>
  <Router>
    <Route  path='/' component={Home} exact />
    <Route  path='/product-detail' component={ProductDetail} exact />
    <Route  path='/cart' component={Cart} exact />
      

  </Router>

    </>

  )
}

export default App
