import React from 'react'
import "./Cards.css"
import { themeContext } from '../../Context'
import { useContext } from 'react'
function Cards(props) {
  const theme = useContext(themeContext)
    const darkMode = theme.state.darkmode
  return (
    <div className='CardsWrapper'>
        <img src={props.image}></img>
        <span style={darkMode ?{color:'white'}:{color:''}}>{props.heading}</span>
        <span>{props.txt}</span>
       <button className='cardbtn'>LEARN MORE</button>
      
    </div>
  )
}

export default Cards
