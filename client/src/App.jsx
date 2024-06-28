import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomeLayoutHOC from './HOC/Home.LayoutHOC'
import Home from './Pages/Home'
import CollectionLayoutHOC from './HOC/Collection.LayoutHOC';
import Collection from './Pages/Collection';
import ProductLayoutHOC from './HOC/Product.LayoutHOC';
import Product from './Pages/Product';
import ErrorPage from './error-page';
import { Nav } from './Components/Navbar/HomeNavbar'
import Footer_HomePage from './Components/Footer/Footer_HomePage';
import { MobileTabs } from './Components/MobileTabs/MobileTabs'

import { Outlet } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div  className='flex flex-col h-full'>
    <Nav/>
    <div className='flex-1'>
    <Routes>
      <Route path='/' exact element={<HomeLayoutHOC Component={<Home/>}/>}/>
      <Route path="/Category/Electronics" exact element={<CollectionLayoutHOC Component={<Collection/>} CategoryName={"Electronics"} />} />
      <Route path="/Category/Electronics/Product/:id" exact element={<ProductLayoutHOC Component={<Product/>}/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </div>
   <div>
   <Footer_HomePage/>
   <MobileTabs/>
   </div>
  
    </div>
    
    
    </>
  )
}

export default App
