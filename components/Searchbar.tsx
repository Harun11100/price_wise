'use client'

import React from 'react'
const handleSubmit=()=>{

}
const Searchbar = () => {
  return (
    <form 
    action="submit"
    onSubmit={handleSubmit} className='mt-12'>
     <div className='flex flex-1'>

    <input type="text" placeholder='Enter Product Link'
     className='searchbar-input'/>
     <button type='submit' className='searchbar-btn'>
       Search </button>

     </div>

    </form>
  )
}

export default Searchbar