import React from 'react'
import "./Expr.css"
import { themeContext } from '../../Context'
import { useContext } from 'react'
function Exper() {
  const theme=useContext(themeContext)
    const darkMode=theme.state.darkmode
  return (
    <div className='ExperWrapper'>
        <div className="achievements">
            <div className='circle' style={darkMode ?{color:'white',boxShadow:'5px 2px 1px skyblue',backgroundImage:'linear-gradient(to bottom ,orange 0%, skyblue 100%)'}:{color:''}}>2+</div>
            <span>years </span>
            <span>Experience </span>
        </div>
        <div className="achievements">
            <div className='circle' style={darkMode ?{color:'white',boxShadow:'5px 2px 1px skyblue',backgroundImage:'linear-gradient(to bottom ,orange 0%, skyblue 100%)'}:{color:''}}>5+</div>
            <span>completed </span>
            <span>Projects</span>
        </div>
        <div className="achievements">
            <div className='circle' style={darkMode ?{color:'white',boxShadow:'5px 2px 1px skyblue',backgroundImage:'linear-gradient(to bottom ,orange 0%, skyblue 100%)'}:{color:''}}>5+</div>
            <span>worked with </span>
            <span>different teams</span>
        </div>
      
    </div>
  )
}

export default Exper
