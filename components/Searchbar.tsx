'use client'

import React, { FormEvent, useState } from 'react'
import { clearScreenDown } from 'readline';

const isValidAmazonProductUrl=(url:string)=>{
    try{
      const parsedURL= new URL(url);
      const hostName= parsedURL.hostname

      if(hostName.includes('amazon.com')|| hostName.includes('amazon.')||hostName.endsWith('amazon')){
        return true;
      }

    }catch(error){
      return false;
    }
}


const Searchbar = () => {
   const [searchPrompt,setSearchPrompt]=useState('');
  const [isloading,setIsLoading]=useState(false)

   const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
     
    const isValidLink=isValidAmazonProductUrl(searchPrompt)
    
    if(!isValidLink){
      alert('Please provide a valid link')
    }
    try{
      setIsLoading(true);
      //scrape the first page
    }catch(error){
      console.log(error);
      
    }finally{
      setIsLoading(false);
    }
   
  }
  return (
    <form 
    action="submit"
    onSubmit={handleSubmit} className='mt-12'>
     <div className='flex flex-1'>

    <input type="text" value={searchPrompt} onChange={(e)=>setSearchPrompt(e.target.value)} placeholder='Enter Product Link'
     className='searchbar-input'/>
     <button type='submit' className='searchbar-btn'
     disabled={searchPrompt===''}>
    {(isloading)?"Searching..":'search'}</button>

     </div>

    </form>
  )
}

export default Searchbar