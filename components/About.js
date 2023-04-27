import React from 'react'
import AboutLight from '@/public/about_light.svg'
import AboutDark from '@/public/about.svg'
import Image from 'next/image'
import { useTheme } from 'next-themes'
function About() {
  const { theme } = useTheme()
  const aboutImage = theme === 'light' ? AboutLight : AboutDark
  return (
    <section className='wrapper py-28'>
      <h2 className='text-xl lg:text-5xl font-extrabold uppercase text-[#8CCE58] mb-8 tracking-wider'>
        who am i?
      </h2>
      <div className='flex gap-14'>
        <p className='text-xl dark:text-gray-300 text-gray-600 leading-8 w-2/5'>
          {`Hi there! I'm Recko, a Full stack web developer that loves bringing
          ideas to life through code. I first started of teaching myself how to
          code, mainly by watching tutorials. In 2019, I took a leap, I enrolled
          in the Computer Information Systems course at Holland College. I
          quickly absorbed new concepts, while bringing ambitious ideas and a
          positive attitude to every challenge. As a practical continuous
          learner, I love applying what I learn.`}
        </p>
        <div className='w-3/5'>
          <Image src={aboutImage} alt='about image' />
        </div>
      </div>
    </section>
  )
}

export default About
