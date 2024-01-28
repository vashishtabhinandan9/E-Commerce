import { useState } from 'react'

import './App.css'
import { Nav } from './Components/Navbar/HomeNavbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
