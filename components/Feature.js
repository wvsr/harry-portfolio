import React from 'react'
import AppStore from '@/public/icons/appstore.png'
import Github from '@/public/icons/github.png'
import PlayStore from '@/public/icons/playstore.png'
import Image from 'next/image'
import FeatureImage from '@/public/feature.png'
function Feature() {
  return (
    <section className='wrapper flex flex-col md:flex-row gap-14 md:gap-28'>
      <div className='w-full md:w-2/5'>
        <Image
          src={FeatureImage}
          alt='feature image'
          className='w-full h-full'
        />
      </div>
      <div className='w-full text-5xl md:w-3/5'>
        <h2 className='md:text-7xl lg:text-8xl font-bold'>Featured Projects</h2>
        <div className='sm:max-w-lg text-lg md:text-xl font-normal text-gray-600 dark:text-gray-300'>
          <p className='mt-7 mb-4 md:mb-6'>
            I’m helping for creating products that provide meaningful and
            relevant experiences for users.
          </p>
          <p className='mb-10'>
            I’m helping for creating products that provide meaningful and
            relevant experiences for users.
          </p>
        </div>
        <div className='flex gap-3 flex-wrap'>
          <Image src={AppStore} alt='applestore' />
          <Image src={Github} alt='github' />
          <Image src={PlayStore} alt='playstore' />
        </div>
      </div>
    </section>
  )
}

export default Feature
