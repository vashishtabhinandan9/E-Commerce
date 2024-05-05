import React from 'react'
import Home_Layout from '../Layouts/Home.Layout'
import CategoryCaousal from '../Components/Categories/CategoryCaousal'
import Footer_HomePage from '../Components/Footer/Footer_HomePage'
export default function HomeLayoutHOC(props) {
  
  return (
    <>
    <Home_Layout>
      <CategoryCaousal/>
      {props.Component}

      <Footer_HomePage/>
    </Home_Layout>
    </>
  )
}
