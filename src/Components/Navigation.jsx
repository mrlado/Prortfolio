import React from 'react'
import { GiSkills } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import { MdDownloading } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";


import './Styles/Navigation.css'

const Navigation = () => {
  return (
    <div className="flex alignC navigation spaceBetween ">
    <div className="logo">
        {/* <img src={myLogo} alt=" myLogo" srcset="" width='100px' /> */}
        </div>
        <div className="navigationLinks">
            <ul>
                <li className='flex alignC navIcons'><SiAboutdotme className='backgroundColor'/> About</li>
                <li className='flex alignC navIcons'><IoCodeWorkingSharp className='backgroundColor'/> Works</li>
                <li className='flex alignC navIcons'><GiSkills className='backgroundColor'/> Skills</li> 
                <li className='flex alignC navIcons'><MdDownloading className='backgroundColor'/> Resume</li>
                <li className='flex alignC navIcons'><MdAlternateEmail className='backgroundColor'/> Contact</li>  
                <li className='flex alignC navIcons'><FiSettings className='backgroundColor'/> Settings</li> 
            </ul>
        </div>
        <div className='social navigationLinks'>
            <ul>
                <li className='flex alignC navIcons'><AiFillLinkedin className='backgroundColor '/>LinkedIn</li>
                <li className='flex alignC navIcons'><AiFillGithub className='backgroundColor'/>GitHub</li>
                <li><div className='line'></div></li>
            </ul>
            
        </div>
        
</div>
  )
}

export default Navigation