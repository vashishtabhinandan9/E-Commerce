import React from 'react'
import Home_Layout from '../Layouts/Home.Layout'
import CategoryCaousal from '../Components/Categories/CategoryCaousal'

export default function HomeLayoutHOC(props) {
  
  return (
    <>
    <Home_Layout>
      <CategoryCaousal/>
      {props.Component}
    </Home_Layout>
    </>
  )
}
