import React from 'react'
import "./Services.css"
import Cards from '../Cards/Cards'
import resume from "../../files/Gurdev_Singh_Resume_2.pdf"
import cv from "../../files/Gurdev_Singh_CoverLetter_v2.pdf"
import heartEmoji from "../../img/heartemoji.png"
import glassEmoji from "../../img/glassesimoji.png"
import humble from "../../img/humble.png"
import { themeContext } from '../../Context'
import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
function Services() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkmode
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <div className='services' id='Services'>
            <div className='services-left'>

                <span style={darkMode ? { color: 'white' } : { color: '' }}>My Awesome</span>
                <span>services</span>
                <span>I have experince in multiple languages including front-end and backend.
                    All this experince helped me to become a good web-developer. I can easily work as front-end and backend developer.
                    However I also have good knowledge of data-structure and algorithims</span>

                <div className='servicesbtns'>
                    <a href={resume} download><button className='button servicesbtn'>Download Resume</button></a>
                    <a href={cv} download><button className='button servicesbtn2'>Download CV</button></a>
                </div>
            </div>
            <div className='services-right' >
                <motion.div
                    initial={windowWidth < 900 ? { top: '1rem', left: '-5rem' } : { top: '2rem', left: '20rem' }}
                    whileInView={windowWidth < 900 ? { left: '1rem' } : { left: '15rem' }}
                    transition={{ duration: 2, type: 'spring' }}
                    className='cards' style={{ top: "2rem", left: '20rem' }}>
                   <Cards image={heartEmoji} txt="I have experinece with React,Html,Css,Javascript" heading={"Front-End"}></Cards>
                </motion.div>
                <motion.div className='cards'
                    initial={windowWidth < 900 ? { top: '0rem', left: '5rem' } : { top: '15rem', left: '-5rem' }}
                    whileInView={windowWidth < 900 ? { top: '0rem',left: '1rem' } : { top: '15rem',left: '-1rem' }}
                    transition={{ duration: 2, type: 'spring' }}
                    style={{ top: "15rem", left: "-5rem" }}>
                    <div className='blur' style=
                        {{
                            background: "#C1F5FF",
                            top: "-5rem",
                            width: "25rem",
                            height: "11rem",
                            left: "-7rem"

                        }}
                    ></div>
                    <Cards image={glassEmoji} txt="I  have also worked with node.js, express.js and mongoDb database" heading={"back-end"}></Cards>
                </motion.div>
                <motion.div className='cards'
                    initial={windowWidth < 900 ? { top: '0rem', left: '-5rem' } : { top: '25rem', left: '20rem' }}
                    whileInView={windowWidth < 900 ? { top: '0rem', left: '1rem' } : { top: '25rem',left: '15rem' }}
                    transition={{ duration: 2, type: 'spring' }}
                    style={{ top: "25rem", left: "20rem" }}>
                    <Cards image={humble} txt="I have worked on various languages like java,c++ and on Rest API as well " heading={"API/Design"}></Cards>
                    <div className='blur' style=
                        {{
                            background: '#FFEFC1',
                            top: '-2rem',
                            width: "25rem",
                            height: "11rem",
                            left: "-7rem"

                        }}
                    ></div>
                </motion.div>
            </div>

        </div>
    )
}

export default Services
