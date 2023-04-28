import React from 'react'
import AboutLight from '@/public/about_light.svg'
import AboutDark from '@/public/about.svg'
import Image from 'next/image'

function About() {
  return (
    <section className='wrapper py-28' id='experience'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase text-[#8CCE58] mb-8 tracking-wider'>
        who am i?
      </h2>
      <div className='flex flex-col-reverse md:flex-row gap-7 md:gap-14'>
        <p className='text-lg md:text-xl dark:text-gray-300 text-gray-600 leading-8 w-full md:w-2/5'>
          {`Hi there! I'm Recko, a Full stack web developer that loves bringing
          ideas to life through code. I first started of teaching myself how to
          code, mainly by watching tutorials. In 2019, I took a leap, I enrolled
          in the Computer Information Systems course at Holland College. I
          quickly absorbed new concepts, while bringing ambitious ideas and a
          positive attitude to every challenge. As a practical continuous
          learner, I love applying what I learn.`}
        </p>
        <div className='w-full md:w-3/5'>
          <Image
            src={AboutLight}
            alt='about image'
            className='dark:hidden block'
          />
          <Image
            src={AboutDark}
            className='dark:block hidden'
            alt='about image'
          />
        </div>
      </div>
    </section>
  )
}

export default About
