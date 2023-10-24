import React from 'react'
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Toggle = () => {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkmode
    function handleClick(){
        theme.dispatch({type:'toggle'})
    }
  return (
    <div className='toggle' onClick={handleClick}>
      <Sun></Sun>
      <Moon></Moon>
      <div className='tooglebtn'
      style={darkMode ?{right:'2px'}:{left:'2px'}}>

      </div>
    </div>
  )
}

export default Toggle
