import React from 'react'
import '../styles/skills.scss'
import { TopTitle } from '../uitils/TopTitle'
import Loading from '../uitils/Loading'
import { DarkModeContext } from '../contexts/DarkModeContext'
import '../responsivestyles/skills.scss'

type skillsBoxType = {
     id: number,
     title: string,
}

const Skills = () => {
     //skills box list
     const skillBox:skillsBoxType[] = [
          {
               id: 1,
               title: 'Html',
          },
          {
               id: 2,
               title: 'Css',
          },
          {
               id: 3,
               title: 'Scss/sass',
          },
          {
               id: 4,
               title: 'Bootstrap',
          },
          {
               id: 5,
               title: 'Figma',
          },
          {
               id: 6,
               title: 'Javascript',
          },
          {
               id: 7,
               title: 'Typescript',
          },
          {
               id: 8,
               title: 'Reactjs',
          },
          {
               id: 9,
               title: 'React Native',
          },
          {
               id: 10,
               title: 'Mobile Development',
          },
          {
               id: 11,
               title: 'Redux',
          },
          {
               id: 12,
               title: 'Nodejs',
          },
          {
               id: 13,
               title: 'Expressjs',
          },
          {
               id: 14,
               title: 'Nestjs',
          },
          {
               id: 15,
               title: 'Mysql',
          },
          {
               id: 16,
               title: 'Mongodb',
          },
          {
               id: 17,
               title: 'Websocket',
          },
          {
               id: 18,
               title: 'Api/RESTful Api',
          },
          {
               id: 19,
               title: 'Git',
          },
     ]

     const { darkmode } = React.useContext(DarkModeContext)!;

  return (
    <div className={`skills-container ${darkmode ? 'activeSkillsDarkmode' : ""}`}>
     <Loading>Skills</Loading>
          <TopTitle>
               <h1>Skills</h1>
          </TopTitle>
          <div className='skills'>
               {skillBox.map((skills) => (
                    <div className='box' key={skills.id}>
                         <span>{skills.title}</span>
                         {
                         skills.id === 1 ? 
                         <img src='../html.svg' />:
                         skills.id === 2 ?             
                         <img src='../css.svg' />:
                         skills.id === 3 ?
                         <img src='../sass.svg' />:
                         skills.id === 4 ?
                         <img src="../bootstrap.svg" />:
                         skills.id === 5 ? 
                         <img src="../figma.svg" />:
                         skills.id === 6 ? 
                         <img src="../javascript.svg" />:
                         skills.id === 7 ? 
                         <img src="../ts.svg" />:
                         skills.id === 8 ? 
                         <img src="../react.svg" />:
                         skills.id === 9 ? 
                         <img src="../reactnative.svg" />:
                         skills.id === 10 ?
                         <img src="../android.svg" />:
                         skills.id === 11 ? 
                         <img src="../redux.svg" />:
                         skills.id === 12 ?
                         <img src="../nodejs.svg" />:
                         skills.id === 13 ? 
                         <img src="../expressjs.svg" />:
                         skills.id === 14 ? 
                         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" />:
                         skills.id === 15 ?
                         <img src="../mysql.svg" />:
                         skills.id === 16 ? 
                         <img src="../mongodb.svg" />:
                         skills.id === 17 ?
                         <img src="../websocket.svg" />:
                         skills.id === 18 ?
                         <img width="100" height="100" src="https://img.icons8.com/ios/100/api-settings.png" alt="api-settings"/>:
                         skills.id === 19 ? 
                         <img src="../git.svg" />: ""
                         }
                    </div>
               ))}
          </div>
    </div>
  )
}

export default Skills