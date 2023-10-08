import React from 'react'
import '../styles/logo.scss'

const Logo = () => {
     const [closejob, setClosejob] = React.useState<boolean>(false);
     React.useEffect(() => {
          const closeJob = () => {
               if(window.innerWidth <=768){
                    setClosejob(true);
               } else {
                    setClosejob(false);
               }
          }
          window.addEventListener('resize', closeJob);
          return () => {window.removeEventListener('resize', closeJob)};
     }, []);
  return (
     <section className='logo'>
     <span>.Azad.</span>
     <span id="job" style={{display: closejob ? 'none' : "none"}}>
          Full Stack Developer
     </span>
     </section>
  )
}

export default Logo