import React from 'react'
import "./Portfolio.css"
import project1Rooms from "../../img/projects/hotel-booking-Rooms.png"
import project1RoomsMobile from "../../img/projects/roomMobile.png"
import project1Rooms2 from "../../img/projects//rooms2.png"
import blogs from "../../img/projects/my-blog.png"
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
            <div className='Allprojects'>
                <span className='ProjectsHeading' style={{ color: '#08f49296' }}>Hotel Booking App</span>
                <div className='Projects'>
                    <div className='projectImages'>
                        <img src={window.innerWidth < 900 ? project1RoomsMobile : project1Rooms} ></img>
                    </div>
                    <div className='ProjectDesc'>
                        <span style={darkMode ? { color: 'black' } : { color: '' }}>This was the hotel booking app that I made using
                            <span className='tech' style={{ color: 'var(--gray' }}>: Php,MySQL,Html,javascript,CSS .</span>
                            This website is fully dynamic that it is helful for the hotel/manager teams
                            to easily handle the hotel booking tasks
                        </span>
                        <div>
                            <button className='ProjectButtons' style={{ color: '#08f49296' }}>Demo</button>
                            <button className='ProjectButtons' style={{ color: '#08f49296' }}>Code</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='Allprojects'>
                <span className='ProjectsHeading' style={{ color: 'skyblue' }}>Blog Website</span>
                <div className='Projects' >
                    <div className='projectImages'>
                        <img src={blogs} ></img>
                    </div>
                    <div className='ProjectDesc'>
                        <span style={darkMode ? { color: 'black' } : { color: '' }}>It is a blog-website where users can posts blogs. I used</span>
                        <span className='tech' style={{ color: 'var(--gray' }}>: React,Node.js,Express.js, MongoDb and CSS3</span> to make this blog website.
                        This website is the Example of Full-Stack-MERN-Web applications
                        <div>
                            <button className='ProjectButtons' style={{ color: 'skyblue' }}>Demo</button>
                            <button className='ProjectButtons' style={{ color: 'skyblue' }}>Code</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
