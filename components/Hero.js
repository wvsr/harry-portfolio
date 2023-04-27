import React, { useState } from 'react'
import HeroDark from '@/public/hero.svg'
import { useTheme } from 'next-themes'
import HeroLight from '@/public/hero_light.svg'
function Hero() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [enabled, setEnabled] = useState(theme !== 'light' ? true : false)
  const heroImage = theme === 'light' ? HeroLight : HeroDark
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div className='flex items-center flex-col py-32'>
      <h1 className='text-center'>
        <span className='text-8xl font-light'>
          Hi!, I’m <span className='text-[#8BD650] font-black'>HARRY.</span>
        </span>{' '}
        <p className='text-5xl my-5 font-bold'>
          A full stack developer based in Canada
        </p>
      </h1>
      <div className='relative flex flex-col items-center justify-center overflow-hidden py-10'>
        <div className='flex'>
          <label class='inline-flex relative items-center mr-5 cursor-pointer'>
            <input
              type='checkbox'
              className='sr-only peer'
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled)
                theme == 'dark' ? setTheme('light') : setTheme('dark')
              }}
              className="w-24 h-10 bg-[#8BD650] rounded-full peer peer-focus:ring-green-300 peer-checked:after:right-[5px] peer-checked:after:left-auto peer-checked:after:border-l peer-checked:after:border-black after:content-[''] after:absolute after:top-[4px] after:left-[5px] after:bg-black after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all peer-checked:bg-[#6da83f]"
            ></div>
          </label>
        </div>
      </div>
      <div className='mt-6'>
        <img src={heroImage.src} alt='hero image' />
      </div>
    </div>
  )
}

export default Hero
