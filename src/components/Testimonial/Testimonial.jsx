import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from "../../img/profiles/lovedeep.jpg";
import profilePic2 from "../../img/profiles/himanshu.jpg";
import profilePic3 from "../../img/profiles/mitali.jpeg"
import profilePic4 from "../../img/profiles/parm.gif"
import "./Testimonial.css"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { themeContext } from '../../Context'
import { useContext } from 'react'
export default function Testimonial() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkmode
    var teamMember = [{
        img: profilePic1,
        name: 'Lovedeep ',
        heading: `Data Structure & algorithims`,
        responsibility: ['Using -Arrays, Strings methods for sorting & searching data','Using LinkedList, Stack to solve various problems'],
        about: `He is very passionate about coding and data structure & algorithims.
               His major is in C++ and Java.We worked on multiple C++ project in our begining of my courses At Lanara College. `,
        color: 'skyblue',
        experience: 'C++,Java'

    }, {
        img: profilePic2,
        name: 'Himanshu Sood',
        heading: `Unix-tools and Scripting`,
        responsibility: ['Script Development with bash, Shell and Python', 'Data Processing with different type of files','Testing files & source code using python '],
        about: `He is expert in python . As a team member We worked on various python projects and weekly assignments.We worked on various bash and shell commands
        to filter,analyze and sort the data using AWS labs `,
        color: 'rgb(212 95 122)'
    }, {
        img: profilePic3,
        heading: `Web-development-I,II`,
        name: 'Mitali',
        responsibility: ['Making React components', 'Styling using CSS3','Designing databses','Deployment-Process'],
        about: `An outstanding collaborator, she brings extensive experience in JavaScript, HTML, CSS, 
        Bootstrap, and Tailwind to the table. Together, we crafted device-compatible websites that 
        seamlessly adapt to various screens. `,
        color: '#D592FC'
    }, {
        img: profilePic4,
        name: 'Parminder',
        responsibility: ['Working with Java-Fx', 'Making classes,Interfaces for better organizing the data','Using Encapsulation to hide the data'],
        heading: `Program-Design & Object-Oriendted Programing`,
        about: `He is a  great problem-solver.We both worked on the object-oriented programming in Java.We worked on some projects 
        where we used various concepts of OOPs.`,
        color: 'darkblue'
    }]
    return (
        <div className='testinomial' id='Testimonials'>
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
            <span className='testimonialHeading'>Our Teams</span>
            <span className='teamDesc' style={darkMode ? { color: 'white' } : { color: '' }}>I have worked with these team members who was my classmates in differnt courses</span>

            <Swiper
                cssMode={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                className="team-swiper"
            >
                {teamMember.map((member, index) => {
                    return (<SwiperSlide key={index}
                        className="team-member-slide">
                        <div className='memebers' style={{ border: `4px solid ${member.color}`, background: darkMode ? 'white' : '' }}>
                            <div className="imgProfile">
                                <img src={member.img} style={{ border: `4px solid ${member.color}` }}></img>
                                <span className='memberName' style={{ color: `${member.color}` }}>{member.name}</span>
                            </div>
                            <div className='writtenContent'>
                                <span>
                                    {member.about}</span>
                                <span className='memberCourses' style={{ color: `${member.color}` }}><span style={{ textDecoration: 'underLine', fontSize: '22px' }}>COURSE:</span> {member.heading}</span>
                                <span className='memberName' style={{ color: `${member.color}`, textDecoration: 'underLine', }}>My-Responsibilities:</span>
                                <ul>
                                    {member.responsibility.map((memb, index) => {

                                        
                                        return <li key={index}>{memb}</li>

                                    })}
                                </ul>
                            </div>

                        </div>
                    </SwiperSlide>)
                })
                }


            </Swiper>

        </div>
    )
}
