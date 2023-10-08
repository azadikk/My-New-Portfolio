import React from 'react'
import '../styles/header.scss'
import { Link } from 'react-router-dom';
import { ModalContext } from '../contexts/ModalContext';
import { DarkModeContext } from '../contexts/DarkModeContext';
import '../responsivestyles/header.scss'
import { FaList } from 'react-icons/fa6'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../uitils/Logo';
import DarkMode from '../uitils/DarkMode';

//constant navbar list 'type'
type navbarListType = {
     id: number,
     title: string,
};
//navbar list
const NavList:navbarListType[] = [
     {id: 1, title: 'Me'},
     {id: 2, title: 'Projects'},
     {id: 3, title: 'Skills'},
     {id: 4, title: 'CV & Certificates'},
]



const Header = () => {
     //if Modal open? outline added the HEADER component
     const { modal } = React.useContext(ModalContext)!;
     const { darkmode, ToggleSwitch } = React.useContext(DarkModeContext)!;

     //Responsive mode header 
     const [mobile, setMobile] = React.useState<boolean>(false);
     React.useEffect(() => {
          const MobileResponsive = () => {
               if(window.innerWidth <= 768) {
                    setMobile(true);
               } else if(window.innerWidth >= 768){
                    setMobile(false);
               }
          }
          MobileResponsive();
          window.addEventListener('resize', MobileResponsive);
          return () => window.removeEventListener('resize', MobileResponsive);
     }, []);
     

  return (
     <React.Fragment>
       {mobile ? (<MobileHeader darkmode={darkmode} ToggleSwitch={ToggleSwitch}/>) : (
      <header className={`header ${darkmode ? 'activeDarkMode' : ''}`} id={modal ? 'outlineHeader' : ''}>
          <section className='header-left'>
               <Logo />
          </section>
          <section className='header-right'>
               {NavList.map((nav) => (
                    <ul className='list' key={nav.id}>
                         <Link className='li' to=
                         {nav.id === 1 ? '/me' : nav.id === 2 ? '/projects' : 
                          nav.id === 3 ? '/skills' : nav.id === 4 ? '/cv-certificates' : ""}
                         >{nav.title}</Link>
                    </ul>
               ))}
          </section>
          <DarkMode />
      </header>)}
     </React.Fragment>
  )
}

type mobileHeaderProp = {
     darkmode: boolean,
     ToggleSwitch: () => void,
};
//mobile header
const MobileHeader: React.FC<mobileHeaderProp> = ({ darkmode, ToggleSwitch }) => {

     //mobile mode list menu
     const [mobileModal, setMobileModal] = React.useState<boolean>(false);
     const listRef = React.useRef<HTMLDivElement>(null);
     const handleMobileModal = () => {
          setMobileModal(true);
     }
     const closeMobileModal = () => {
          setMobileModal(false);
     }
     React.useEffect(() => {
          const ifOutsideClick = (e:any) => {
               if(listRef.current && !listRef.current.contains(e.target)){
                    setMobileModal(false);
               };
          };
          document.addEventListener("mousedown", ifOutsideClick);
          return () => {document.removeEventListener("mousedown", ifOutsideClick)}
     }, []);
  

     

     return (
          <header className={`mobile-header ${darkmode ? 'active-mobile-header-dark-mode' : ""}`}>
               <div className='left'>
               <section className='logo'>
                    <div className='names'>     
                    <Logo />
                    </div>
               </section>
               </div>
               <div className='right'>
                    <FaList id='openicon' onClick={handleMobileModal}/>
               </div>

               {mobileModal && (
                    <div className="list-container"
                     ref={listRef}
                     style={{background: darkmode ? '#141414' : "#1B9C85"}}>
                         <div className='closedcontainer'>
                              <AiOutlineClose id='closeicon'
                              style={{color: darkmode ? '' : '#fff'}}
                              onClick={closeMobileModal}
                              />
                              <Logo />
                         </div>
                         <div className='list'>
                              {NavList.map((navlist) => (
                                   <Link to=
                                   {navlist.id === 1 ? '/me' : navlist.id === 2 ? '/projects' : 
                                    navlist.id === 3 ? '/skills' : navlist.id === 4 ? '/cv-certificates' : ""} 
                                    key={navlist.id} 
                                    style={{color: darkmode ? "white" : ""}}
                                    onClick={() => setMobileModal(false)}
                                    className='li'>
                                        {navlist.title}
                                   </Link>
                              ))}
                         </div>
                         <div className='mobile-mode'>
                              <span id='switch-container'
                                style={{background: darkmode ? "wheat" : "white"}}>
                                   <span id="switcher" 
                                     onClick={ToggleSwitch}
                                     className={darkmode ? 'active' : ''}
                                     style={{background: darkmode ? "#141414" : "#303030"}}></span>
                              </span>
                         </div>
                    </div>
               )}
          </header>
     )
}

export default Header
