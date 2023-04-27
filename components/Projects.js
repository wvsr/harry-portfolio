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
          <Image src={image} />
        </Link>
        <div className='flex justify-between w-full text-2xl font-bold mt-5'>
          <h3>{name}</h3>
          <p>{date}</p>
        </div>
      </div>
    )
  }
  return (
    <section className='wrapper py-28'>
      <h2 className='text-center text-5xl font-bold mb-20'>
        Some of the projects I've worked on before
      </h2>
      {projectList.map((project) => {
        return (
          <Project
            name={project.name}
            image={project.image}
            link={project.link}
            date={project.date}
          />
        )
      })}
    </section>
  )
}

export default Projects
