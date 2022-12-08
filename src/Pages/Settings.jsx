import React, { useContext, useEffect } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import '../Components/Styles/Settings.css'
import { Data } from '../Context/SettingsContext';
// SetTheme
// Theme
const Settings = () => {
    const {themeData, setThemeData} = useContext(Data)


console.log(themeData)



useEffect(()=>{
     if(themeData !== themeData.main || themeData !== themeData.dark){
        setThemeData(themeData.main) 
     }
},[])


const change =()=>{
        themeData.backgroundColor === '#65dfc9'  ? setThemeData(themeData.dark) : setThemeData(themeData.main)
}
   

  return (
    <div className='Settings'>
        <input type="button" value="" onClick={change} />
        <div className="colorSwitcher"><FormControlLabel control={<Switch />} label="Dark" /></div>
        <div className="fontSwitcher"></div>
    </div>
  )
}

export default Settings