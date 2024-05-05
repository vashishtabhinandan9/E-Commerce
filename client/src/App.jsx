import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomeLayoutHOC from './HOC/Home.LayoutHOC'
import Home from './Pages/Home'
import CollectionLayoutHOC from './HOC/Collection.LayoutHOC';
import Collection from './Pages/Collection';
import ErrorPage from './error-page';
import { Nav } from './Components/Navbar/HomeNavbar'
import Footer_HomePage from './Components/Footer/Footer_HomePage';
import { MobileTabs } from './Components/MobileTabs/MobileTabs'
import { Outlet } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' exact element={<HomeLayoutHOC Component={<Home/>}/>}/>
      <Route path="/Category/Electronics" exact element={<CollectionLayoutHOC Component={<Collection/>} CategoryName={"Electronics"} />} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer_HomePage/>
    <MobileTabs/>
    
    </>
  )
}

export default App
