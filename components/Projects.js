import React from 'react'
import ProjectOne from '@/public/project/project-1.png'
import Image from 'next/image'
import Link from 'next/link'

function Projects() {
  const projectList = [
    {
      name: 'Wireframing for GoPlane SuperApp',
      date: 'October 21, 2019',
      link: '#',
      image: ProjectOne,
    },
    {
      name: 'Wireframing for GoPlane SuperApp',
      date: 'October 21, 2019',
      link: '#',
      image: ProjectOne,
    },
    {
      name: 'Wireframing for GoPlane SuperApp',
      date: 'October 21, 2019',
      link: '#',
      image: ProjectOne,
    },
  ]
  function Project({ name, date, link, image }) {
    return (
      <div>
        <Link href={link}>
          <Image src={image} alt={name} className='w-full h-auto' />
        </Link>
        <div className='flex flex-col justify-between md:flex-row md:items-center w-full mt-3 md:mt-5'>
          <h3 className='text-base md:text-2xl font-bold mb-2 md:mb-0'>
            {name}
          </h3>
          <p className='text-base font-bold md:text-2xl dark:text-gray-400'>
            {date}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section className='wrapper py-28' id='work'>
      <h2 className='text-center text-3xl md:text-5xl font-bold mb-20'>
        {`Some of the projects I've worked on before`}
      </h2>
      <div className='flex flex-wrap justify-center gap-y-10 md:gap-y-14'>
        {projectList.map((project, id) => {
          return (
            <Project
              key={id}
              name={project.name}
              image={project.image}
              link={project.link}
              date={project.date}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
