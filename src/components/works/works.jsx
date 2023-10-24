import React,{ useContext } from 'react'
import langara from "../../img/langara.png"
import react from "../../img/react.png"
import nodejs from "../../img/nodejs.png"
import mongoDb from "../../img/mongoDb.jpeg"
import javascript from "../../img/javascript.png"
import "./works.css"
import {motion} from 'framer-motion'
import { themeContext } from '../../Context';
import { Link } from 'react-scroll'
function Works() {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkmode
    return (
        <div className='works' id='Works'>
            <div className='services'>
                <div className='blur' style=
                    {{
                        background: 'var(--blueCard)',
                        top: '142rem',
                        width: '37rem',
                        height: '19rem',
                        left: '-7rem',

                    }}
                ></div>
                <div className='services-left'>
                    <span style={darkMode ?{color:'white'}:{color:''}}>works for clients</span>
                    <span>Using various tech</span>
                    <span>I have worked for various teams in Langara College using various technologies
                        <br></br><span className="headingText2">Front-End:</span>React,Redux,Rest-Api,Html,JavaScript,Css
                        <br></br><span className="headingText2">Back-End:</span>Express.js, Node.js,MongoDb,Php,Mysql
                        <br></br><span className="headingText2">Programing Languages:</span>During My college course I have experience with java and OOPs concepts with Java
                        however I am also very confident about C++ and data structure and algorithims.
                    </span>
                    <div className='servicesbtns'>
                    <Link spy={true} smooth={true} to={'contacts'}><button className='button servicesbtn'>Hire Me</button></Link>

                    </div>
                </div>

                <div className='works-right'>
                    <motion.div className='MainCircle'
                      initial={{rotate:45}}
                      whileInView={{rotate:0}}
                      viewport={{margin:'-40px'}}
                      transition={{duration:3.5, type:'spring'}}
                    >
                        <div className='works-secondcircle'>
                            <img src={langara} style={{ width: '111px', height: '111px' }}></img>
                        </div>
                        <div className='works-secondcircle'>
                            <img src={react} style={{ width: '111px', height: '111px' }}></img>
                        </div>
                        <div className='works-secondcircle'>
                            <img src={nodejs} style={{ width: '111px', height: '111px' }}></img>
                        </div>
                        <div className='works-secondcircle'>
                            <img src={mongoDb} style={{ width: '111px', height: '90px' }}></img>
                        </div>
                        <div className='works-secondcircle'>
                            <img src={javascript} style={{ width: '111px', height: '111px' }}></img>
                        </div>
                    </motion.div>
                    {/* Backgrorund two circles */}
                    <div className='bigCircles blueCircle'>

                    </div>
                    <div className='bigCircles yellowCircle'>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Works
