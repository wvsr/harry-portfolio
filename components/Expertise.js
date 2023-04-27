import React from 'react'
import Image from 'next/image'
import CSS from '@/public/language_logo/css.png'
import Docker from '@/public/language_logo/docker.png'
import Flutter from '@/public/language_logo/flutter.png'
import Git from '@/public/language_logo/git.png'
import Go from '@/public/language_logo/go.png'
import MongoDb from '@/public/language_logo/mongodb.png'
import Nodejs from '@/public/language_logo/nodejs.png'
import Postgres from '@/public/language_logo/postgres.png'
import ReactLogo from '@/public/language_logo/react.png'
import Tailwind from '@/public/language_logo/tailwind.png'
import Typescript from '@/public/language_logo/typescript.png'
import { useTheme } from 'next-themes'
import ExpertiseLight from '@/public/expertise_light.svg'
import ExpertiseDark from '@/public/expertise.svg'

function Expertise() {
  const skillList = [
    { title: 'CSS', component: CSS },
    { title: 'Docker', component: Docker },
    { title: 'Flutter', component: Flutter },
    { title: 'Git', component: Git },
    { title: 'Go', component: Go },
    { title: 'MongoDB', component: MongoDb },
    { title: 'Node.js', component: Nodejs },
    { title: 'PostgreSQL', component: Postgres },
    { title: 'React', component: ReactLogo },
    { title: 'Tailwind CSS', component: Tailwind },
    { title: 'TypeScript', component: Typescript },
  ]

  const { theme } = useTheme()
  const expertiseImage = theme === 'light' ? ExpertiseLight : ExpertiseDark
  return (
    <section className='wrapper flex md:flex-row flex-col-reverse py-28'>
      <div className='w-3/5'>
        <h2 class='text-xl lg:text-5xl font-extrabold uppercase text-[#8CCE58] mb-8 tracking-wider'>
          my expertise
        </h2>

        <p className='text-base mb-7 dark:text-gray-300 text-gray-700'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{' '}
        </p>
        <div>
          <div className='flex gap-3 items-start'>
            <div>
              <div className='w-5 h-5 border border-black rounded-full mt-2 dark:border-white border-lb'></div>
            </div>
            <article>
              <h3 className='text-2xl font-bold mb-2 '>Software Development</h3>
              <p className='dark:text-gray-300 text-gray-700'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud ame
              </p>
            </article>
          </div>
          <div>
            <h4 className='text-xl dark:text-gray-300 text-gray-700 font-bold mt-14'>
              Full stack Dev
            </h4>
            <div className='flex flex-wrap items-center justify-start gap-4'>
              {skillList.map((skill, id) => {
                return (
                  <div key={skill.title} className='max-w-xs'>
                    <Image
                      height={30}
                      width={40}
                      src={skill.component.src}
                      alt={skill.title}
                      title={skill.title}
                      className='max-w-full'
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/5'>
        <Image
          src={expertiseImage}
          alt='expertise image'
          className='w-full h-auto'
        />
      </div>
    </section>
  )
}

export default Expertise
