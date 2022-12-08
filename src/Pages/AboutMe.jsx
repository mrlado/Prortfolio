import React from 'react'
import '../Components/Styles/AboutMe.css'
import { GiAnubis, GiAnatomy,GiAngularSpider,GiBrain } from "react-icons/gi";
import { RxComponent1 } from "react-icons/rx";
import { BsBootstrapFill } from "react-icons/bs";
import { MdOutlineSlowMotionVideo } from "react-icons/md";



const AboutMe = () => {
  return (
    <div className='flex justifyC aboutMe'>
        <div className="title"><h1>About Me</h1></div>
        <div className="content">
                <span>Hello! My name is Lado  and I enjoy creating things that live on the internet. 
My interest in web development started back in 2021 when I decided to scratch!
My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
Here are a few technologies I’ve been working with recently:</span>
            <div className="knowledge flex justifyC">
                <div className="navigationLinks flex">
                    <ul>
                        <li className='flex alignC navIcons'><GiAnubis className='backgroundColor'/> JavaScript (ES6+)</li>
                        <li className='flex alignC navIcons'><GiAnatomy className='backgroundColor'/> React</li>
                        <li className='flex alignC navIcons'><GiAngularSpider className='backgroundColor'/> Html</li> 
                        <li className='flex alignC navIcons'><GiBrain className='backgroundColor'/> Css</li> 
                    </ul>
                    <ul>
                        <li className='flex alignC navIcons'><RxComponent1 className='backgroundColor'/> MUI</li>
                        <li className='flex alignC navIcons'><BsBootstrapFill className='backgroundColor'/> Bootstrap</li>
                        <li className='flex alignC navIcons'><MdOutlineSlowMotionVideo className='backgroundColor'/> React Motion</li> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe