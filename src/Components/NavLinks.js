import React, { useEffect, useRef } from 'react'
import { navItems } from '../Utils/constants';
import { Link } from 'react-router-dom';

const NavLinks = ({handleSignOut, buttonStyle, navStyle, toggleNavSideBar = ( ) => {}}) =>{
  
    const navRef = useRef(null)

    const handleClickOutside = (e) => {

       if(navRef.current && !navRef.current?.contains(e.target)){
         toggleNavSideBar()
       }
    }

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    return (
      <div className= {navStyle} ref={navRef}>
            
       <ul className='flex md:flex-row flex-col'> 
          {navItems.map((item) => (
             <Link to={item.path} key={item.id}>
              <li>        
                 <button className={buttonStyle} >
                 {item.label} 
                 </button>
               </li>
             </Link>
          ))}
        </ul>    
  
       <button
       onClick={handleSignOut} 
       className={buttonStyle}
       >
         Sign Out
       </button>
  
   </div>
    )
  }
export default NavLinks