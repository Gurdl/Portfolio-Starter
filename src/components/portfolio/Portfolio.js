import React from 'react'
import "./Portfolio.css"
import project1 from "./images/Project1Image.png"
import project2 from "./images/Project2Image.png"
import project3 from "./images/Dall-E.png"
import project4 from "./images/sql.png"
import project5 from "./images/apple.png"
import project6 from "./images/blog.png"

import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import './Portfolio.css';
import { themeContext } from '../../Context'
import { useContext } from 'react'
export default function Portfolio() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkmode
    return (
        <div className='portfolio' id='Portfolio'>
            <span className='PortfolioHeading' style={darkMode ? { color: 'white' } : { color: '' }}>Recent Projects</span>
            <span className='PortfolioHeading2'>Portfolio</span>
            <div className='blur' style=
                {{
                    background: 'var(--blueCard)',
                    top: '0rem',
                    width: '37rem',
                    height: '19rem',
                    left: '-7rem',

                }}
            ></div>
            <div className='blur' style=
                {{
                    background: '#f4e1ff',
                    top: '7rem',
                    width: '28rem',
                    height: '21rem',
                    left: '39rem'
                }}
            ></div>
            <div className='MultipleProjects'>
                <div className='Allprojects'>
                    <span className='ProjectsHeading' style={{ color: 'Orange', margin: '10px' }}>YouTube CommentGuardian</span>
                    <div className='Projects'>
                        <div className='projectImages'>
                            <img src={project1} ></img>
                        </div>
                        <div className='ProjectDesc'>
                            <div>
                                <button className='ProjectButtons' style={{ color: 'Orange' }}><a href='https://www.youtube.com/watch?v=zYEwI9loBR4' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Demo</a></button>
                                <button className='ProjectButtons' style={{ color: 'Orange' }}><a href='https://github.com/Gurdl/Youtube-Comment-Guardian' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Code</a></button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='Allprojects'>
                    <span className='ProjectsHeading' style={{ color: 'black', margin: '10px' }}>Enhance-Gpt with Voice </span>
                    <div className='Projects' >
                        <div className='projectImages'>
                            <img src={project2} ></img>
                        </div>
                        <div className='ProjectDesc'>
                            <div>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://www.youtube.com/watch?v=7bS3od3Znec' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Demo</a></button>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://github.com/Gurdl/Enhance-Gpt' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Code</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Allprojects'>
                    <span className='ProjectsHeading' style={{ color: 'black', margin: '10px' }}>Dall-E-Clone </span>
                    <div className='Projects' >
                        <div className='projectImages'>
                            <img src={project3} ></img>
                        </div>
                        <div className='ProjectDesc'>
                            <div>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://www.youtube.com/watch?v=YRS3jB61n-8' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Demo</a></button>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://github.com/Gurdl/DALL.E-Clone' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Code</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Allprojects'>
                    <span className='ProjectsHeading' style={{ color: 'black', margin: '10px' }}>SQl-Generator </span>
                    <div className='Projects' >
                        <div className='projectImages'>
                            <img src={project4} ></img>
                        </div>
                        <div className='ProjectDesc'>
                            <div>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://www.youtube.com/watch?v=f2Dtysg4K7M' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Demo</a></button>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://github.com/Gurdl/SQL-Generator' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Code</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Allprojects'>
                    <span className='ProjectsHeading' style={{ color: 'black', margin: '10px' }}>Apple-Vision-Pro Clone </span>
                    <div className='Projects' >
                        <div className='projectImages'>
                            <img src={project5} ></img>
                        </div>
                        <div className='ProjectDesc'>
                            <div>
                            <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://apple-vision-pro-gurdevsingh.netlify.app/' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Live</a></button>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://www.youtube.com/watch?v=XUJZrvH1NiU' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Demo</a></button>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://github.com/Gurdl/Apple-Vision-Pro' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Code</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Allprojects'>
                    <span className='ProjectsHeading' style={{ color: 'black', margin: '10px' }}>Blog-App </span>
                    <div className='Projects' >
                        <div className='projectImages'>
                            <img src={project6} ></img>
                        </div>
                        <div className='ProjectDesc'>
                            <div>
                            <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='  https://my-blogs-website.netlify.app/' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Live</a></button>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://www.youtube.com/watch?v=q7ONckMJtxU' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Demo</a></button>
                                <button className='ProjectButtons' style={{ color: '#08f49296' }}><a href='https://github.com/Gurdl/MERN-Blog-App' target="_blank" style={{ color: 'Orange', textDecoration: 'none' }}>Code</a></button>
                            </div>
                        </div>
                    </div>
                </div>

               
            </div>



        </div>
    )
}
