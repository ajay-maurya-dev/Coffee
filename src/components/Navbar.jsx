import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='bg-slate-400 h-16 flex items-center justify-between px-10'>
        <ul className='flex space-x-4 text-lg font-bold justify-center place-items-end'>
            <li className='text-white'>Home</li>
            <li className='text-white'>About US</li>
            <li className='text-white'>Services</li>
            <li className='text-white'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
