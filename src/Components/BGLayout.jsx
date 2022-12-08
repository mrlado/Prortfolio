import React, { useContext, useEffect, useState } from 'react'
import '../Components/Styles/BGLayout.css'
import useScreenType from "react-screentype-hook";
import Navigation from './Navigation';
import { GiHamburgerMenu } from "react-icons/gi";
import Settings from '../Pages/Settings';
import { Data } from '../Context/SettingsContext';

const BGLayout = () => {
    const screenType = useScreenType();
    const {themeData, setThemeData} = useContext(Data)

 

  return (
    <div className='MainContainer' style={themeData}>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="mainPage glass flex">
              {screenType.isMobile? <GiHamburgerMenu className='backgroundColor navIcons'/> :  <Navigation/>} 
              <div className='MainContent'>      <Settings />       </div>
        </div>
    </div>
  )
}

export default BGLayout