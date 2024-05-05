import { useState } from 'react'

import './App.css'
import HomeLayoutHOC from './HOC/Home.LayoutHOC'
import { Nav } from './Components/Navbar/HomeNavbar'
import { MobileTabs } from './Components/MobileTabs/MobileTabs'
import Home from './Pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <HomeLayoutHOC Component={<Home/>}/>
    <MobileTabs/>
    </>
  )
}

export default App
