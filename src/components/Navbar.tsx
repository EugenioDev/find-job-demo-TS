import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <nav className='p-3 bg-gradient-to-r from-cyan-200 to-blue-300'>
        <div className='w-full md: max-w-5xl mx-auto'>
            <Link  to="/" className='font-bold text-xl cursor-pointer'>devFindJob</Link>
            <div>
                {/* Some buttons */}
                
            </div>
        </div>
   </nav>
  )
}

export default Navbar