import React from 'react'
import '../Components/Styles/Skills.css'
import Slider from '@mui/material/Slider';
import { motion } from "framer-motion"

const Skills = () => {
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <div className='flex skills'>
        <motion.div className="container"
                  initial={{ opacity: 0 }}
                  transition={{duration:2}}
                  animate={{ opacity: 1 }}
                  >
          <div className="SkillItem flex justifyC alignC" >
          <span className='SkillItemNum'>HTML</span>
          <span className='SkillItemNum'>0</span>
            <Slider 
            defaultValue={80} 
            step={1} 
            marks 
            min={10} 
            max={100} 
            disabled
            valueLabelDisplay="on"
            color="secondary"/>
            <span className='SkillItemNum'>100</span>
            </div>
          </motion.div>
             <motion.div className="container"
                  initial={{ opacity: 0 }}
                  transition={{ duration:2, delay:1}}
                  animate={{ opacity: 1 }}
                  >
          <div className="SkillItem flex justifyC alignC" >
          <span className='SkillItemNum'>CSS</span>
          <span className='SkillItemNum'>0</span>
            <Slider 
            defaultValue={60} 
            step={1} 
            marks 
            min={10} 
            max={100} 
            disabled
            valueLabelDisplay="on"/>
            <span className='SkillItemNum'>100</span>
            </div>
            </motion.div>
             <motion.div className="container"
                  initial={{ opacity: 0 }}
                  transition={{ duration:2, delay:2}}
                  animate={{ opacity: 1 }}
                  >
          <div className="SkillItem flex justifyC alignC" >
          <span className='SkillItemNum'>JS</span>
          <span className='SkillItemNum'>0</span>
            <Slider 
            defaultValue={45} 
            step={1} 
            marks 
            min={10} 
            max={100} 
            disabled
            valueLabelDisplay="on"/>
            <span className='SkillItemNum'>100</span>
            </div>
            </motion.div>
             <motion.div className="container"
                  initial={{ opacity: 0 }}
                  transition={{ duration:2, delay:3}}
                  animate={{ opacity: 1 }}
                  >
          <div className="SkillItem flex justifyC alignC" >
          <span className='SkillItemNum'>REACT JS</span>
          <span className='SkillItemNum'>0</span>
            <Slider 
            defaultValue={70} 
            step={1} 
            marks 
            min={10} 
            max={100} 
            disabled
            valueLabelDisplay="on"/>
            <span className='SkillItemNum'>100</span>
            </div>
            </motion.div>
    </div>
  )
}

export default Skills