import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcon=[
      {src:'/assets/icons/search.svg', alt:'search'},
      {src:'/assets/icons/red-heart.svg', alt:'heart'},
      {src:'/assets/icons/user.svg', alt:'user'}
]


const Navbar = () => {
  return (
   
      <header className='w-full '>
            <nav className='nav'>
                  <Link href='/' className='flex items-center gap-1'>
                    <Image 
                    src='/assets/icons/logo.svg' 
                    width={27}
                    height={27}
                    alt='logo'/>
                    <p className='nav-logo'>
                          Price<span className='text-primary'>Wise</span>
                    </p>
                  
                  </Link>
                  <div className='flex items-center gap-3'>
                        {navIcon.map(icon=>(
                              <div key={icon.alt}>
                                    <Image
                                    src={icon.src}
                                    alt={icon.alt}
                                    width={27}
                                    height={27}
                                    className='object-contain'
                                    />
                              </div>
                        ))}
                  </div>
            </nav>
      </header>
  )
}

export default Navbar