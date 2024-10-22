import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
        <section className='px-6 md:px-20 py-24 border-2 border-red-500 '>
            <div className='flex mx-xl:flex-col gap-16'>
              <div className='flex flex-col justify-center'>
              <p className='small-text'>
              Smart Shopping Starts Here 
                  <Image
                  src='/assets/icons/arrow-right.svg'
                  alt='arrow-right'
                  width={16}
                  height={16}/>
              </p>
                 <h1 className='head-text'>
                  Explore the power of <span className='text-primary'>PriceWise</span>
                 </h1>
                 <p className='py-5 paragraph-text'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi ex eos sequi temporibus nulla! Aut, ad. Maxime dolor voluptatum culpa qui</p>
                <Searchbar/>
               
              </div>
              <HeroCarousel/>
            
            </div>
        </section>
        <section className='trending-section'>
          <h2 className='section-text'>Trending</h2>

          <div className='flex flex-wrap gap-x-8 gap-y-16'>
            {['apple','mac','ipad'].map(item=>(
              <div key={item}>
                {item}
              </div>
            ))}

          </div>
        </section>
    </>
  )
}

export default Home