import React, { createContext, useEffect, useState } from 'react'

const themeColor = {
  main:{
    backgroundColor:'#65dfc9',
    background: 'linear-gradient( to right top, #65dfc9, #6cdbeb)'
       },
  dark:{
        backgroundColor:'Black',
        background: 'linear-gradient( to right top, #lightblack, #6cdbeb)'
        }
}

window.localStorage.setItem('color','main')
const Color = localStorage.getItem('color')
export let Data = createContext(null)

export const SettingsContext = ({children}) => {
    const [themeData, setThemeData ] = useState(themeColor)

    
    
  return (
        <Data.Provider value={{themeData, setThemeData}}>
        {children}
        </Data.Provider>
  )
};