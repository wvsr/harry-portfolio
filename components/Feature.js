import React from 'react'
import AppStore from '@/public/icons/appstore.png'
import Github from '@/public/icons/github.png'
import PlayStore from '@/public/icons/playstore.png'
import Image from 'next/image'
import FeatureImage from '@/public/feature.png'
function Feature() {
  return (
    <section className='wrapper flex gap-28'>
      <div className='w-2/5'>
        <Image src={FeatureImage} className='w-full h-full' />
      </div>
      <div className='w-3/5'>
        <h2 className='text-8xl font-bold'>Featured Projects</h2>
        <div className='max-w-lg text-xl font-normal text-gray-300'>
          <p className='mt-7'>
            I’m helping for creating products that provide meaningful and
            relevant experiences for users.
          </p>
          <p className='my-10'>
            I’m helping for creating products that provide meaningful and
            relevant experiences for users.
          </p>
        </div>
        <div className='flex gap-3 flex-wrap'>
          <Image src={AppStore} />
          <Image src={Github} />
          <Image src={PlayStore} />
        </div>
      </div>
    </section>
  )
}

export default Feature
