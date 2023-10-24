import React from 'react'
import "./Footer.css"
import wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Github from "@iconscout/react-unicons/icons/uil-github"
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin"
const Footer = () => {
  return (
    <div className='Footer'>
      <img src={wave} alt="" style={{width:'100%'}}></img>
      <div className="footerContent">
        <span>Gurdevsingh95801@gmail.com</span>
        <div className='footerIcons'>
        <a href="https://www.instagram.com/gurdev_jawandha/" target='_blank'><Insta color={'white'} size={'3rem'}></Insta></a>
        <a href="https://github.com/Gurdl?tab=repositories" target="_blank"><Github color={'white'} size={'3rem'}></Github></a>
        <a href="https://www.linkedin.com/in/gurdevsingh12/" target="_blank"><Linkedin color={'white'} size={'3rem'}></Linkedin></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
