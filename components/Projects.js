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
  ]
  function Project({ name, date, link, image }) {
    return (
      <div>
        <Link href={link}>
          <Image src={image} alt={name} />
        </Link>
        <div className='flex flex-col justify-between md:flex-row md:items-center w-full md:mt-5'>
          <h3 className='text-xl md:text-2xl font-bold mb-2 md:mb-0'>{name}</h3>
          <p className='textxl font-bold md:text-2xl'>{date}</p>
        </div>
      </div>
    )
  }

  return (
    <section className='wrapper py-28'>
      <h2 className='text-center text-5xl font-bold mb-20'>
        {`Some of the projects I've worked on before`}
      </h2>
      <div className='flex flex-wrap justify-center'>
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
