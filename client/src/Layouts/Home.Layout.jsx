/**
 * anything that you dont want to put in home component  but wanat it to be shown in home screen 
 * then you can put it here 
 * this file  congigure the looks around the  home data
 * like home component ke niche kya aayega uske uppar kya ayega 
 * 
 */
import React from 'react'
export default function Home_Layout(props) {
  return (
    <div id='Home_layout' className=' flex-col justify-center'>
        {props.children}
    </div>
  )
}

