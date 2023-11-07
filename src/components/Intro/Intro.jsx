import React from 'react'
import "./Intro.css"
import github from "../../img/github.png"
import linkedin from "../../img/linkedin.png"
import intsa from "../../img/instagram.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/boy2.png"
import crown from "../../img/crown.png"
import thumbUp from "../../img/thumbup.png"
import emoji from "../../img/glassesimoji.png"
import Floating from '../Floating/Floating'
import { themeContext } from '../../Context'
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'
function Intro() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkmode

    const transition = { duration: 2, type: 'spring' };
    return (
        <div className='intro-wrapper' id='Intro'>
            <div className='intro-left'>
                <div className='intro-name'>
                    <span style={darkMode ? { color: 'white' } : { color: '' }}>Hy! I AM</span>
                    <span className='animate-charcter'>Gurdev Singh</span>
                    <div className="textWrapper">
                        I am a web developer and have experience in
                        <div className="typed-out">React, Node.js,Express,MongoDb, Javascript,C++ </div>
                    </div>
                    <div>made multiple projects to gain some practical experience.
                    </div>
                </div>
                <Link spy={true} smooth={true} to={'contacts'}><button type='button' className='button intro-button'>Contact Me</button></Link>
                <div className='intro-socaialicons'>
                    <a href="https://github.com/Gurdl?tab=repositories" target="_blank"><img src={github} alt="" className='socailIconImage'></img></a>
                    <a href="https://www.linkedin.com/in/gurdevsingh12/" target="_blank"><img src={linkedin} alt="" className='socailIconImage'></img></a>
                    <a href="https://www.instagram.com/gurdev_jawandha/" target='_blank'><img src={intsa} alt="" className='socailIconImage'></img></a>
                </div>
            </div>
            <div className='intro-right'>
                <img src={vector1}></img>
                <img src={vector2}></img>
                <img src={boy}></img>
                <motion.img
                    className='intro-floating-div'
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-20%' }}
                    transition={transition}
                    src={emoji} alt=""></motion.img>
                <motion.div
                    className='intro-floating-div'
                    initial={{ top: '-4%', left: '82%' }}
                    whileInView={{ left: '60%' }}
                    transition={transition}
                    style={{ top: "-4%", left: "82%" }}>
                    <Floating CrownImage={crown} text1='web' text2="developer"></Floating>
                </motion.div>
                <motion.div
                    className='intro-floating-div'
                    initial={{ top: '70%', left: '-20%' }}
                    whileInView={{ left: '1%' }}
                    transition={transition}
                    style={{ top: "70%", left: "-20%" }}>
                    <Floating CrownImage={thumbUp} text1='Best design' text2="Awards"></Floating>
                </motion.div>
                <div className='blur' style=
                    {{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem"

                    }}
                ></div>

            </div>

        </div>
    )
}

export default Intro
