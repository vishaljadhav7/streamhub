import React from 'react'

const Navbar = () => {
  return (
    <div
    className='absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-full '
    >
     <img
       className='h-[60px] w-[180px] object-cover rounded-lg' 
       src="/Nav_logo.jpg" 
       alt='logo'
     />
    </div>
 
  )
}

export default Navbar