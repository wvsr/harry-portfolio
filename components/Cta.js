import React from 'react'
import Link from 'next/link'
import LinkdinDark from '@/public/icons/linkdin_dark.svg'
import LinkdinLight from '@/public/icons/linkdin_light.svg'
import Image from 'next/image'
import { useTheme } from 'next-themes'

function Cta() {
  return (
    <section className='flex justify-center items-center flex-col'>
      <div className='mb-8 mt-10 block dark:hidden'>
        <Image src={LinkdinLight} width={50} height={50} />
      </div>
      <h2 className='text-8xl font-bold text-center leading-tight mb-24'>
        Keep in touch with me <br /> Say Hi
      </h2>
      <Link
        href={'mailto:harry@gmail.com'}
        className='text-center font-semibold underline text-3xl text-gray-300 mb-24'
      >
        harry@gmail.com
      </Link>
      <div className='mb-24 hidden dark:block'>
        <Image src={LinkdinDark} width={50} height={50} />
      </div>
    </section>
  )
}

export default Cta
