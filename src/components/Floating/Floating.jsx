import React from 'react'
import "./Floating.css"
function Floating(prop) {
    return (
        <div className='floatingdiv'>
            <img src={prop.CrownImage} alt=""></img>
            <span>
                {prop.text1} <br></br>
                {prop.text2}
            </span>

        </div>
    )
}

export default Floating
