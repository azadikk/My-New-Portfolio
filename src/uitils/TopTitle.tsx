import React from 'react'
import { DarkModeContext } from '../contexts/DarkModeContext';

type propType = {
     children: React.ReactNode,
};

export const TopTitle:React.FC<propType> = ({children}) => {
  const {darkmode} = React.useContext(DarkModeContext)!;
  return (
    <div className={`top-title ${darkmode ? 'darkmodeTopTitleUitils' : ""}`}>{children}</div>
  )
}
