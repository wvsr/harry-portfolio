import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Work', href: '#work' },
    { title: 'Expertise', href: '#expertise' },
    { title: 'Experience', href: '#experience' },
  ]

  return (
    <header className='flex  flex-wrap md:flex-nowrap items-center justify-between py-4 px-3'>
      <div className='flex items-center'>
        <Image src={Logo} alt='logo' width={50} height={50} />
      </div>

      <nav className='hidden md:block ml-6'>
        <ul className='flex space-x-6'>
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.href} className='hover:text-gray-500'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href='#contact'
        className='md:block px-4 py-2 rounded hover:bg-gray-700 hidden'
      >
        Contact
      </Link>
      <button
        className='md:hidden flex items-center px-3 py-2 rounded text-black hover:text-gray-700 dark:text-gray-200 dark:hover:text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {isOpen && (
        <nav className='md:hidden w-full mt-4'>
          <ul className='flex flex-col space-y-2'>
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className='block px-4 py-2 rounded hover:bg-gray-700'
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href='#contact'
                className='block px-4 py-2 rounded hover:bg-gray-700 md:hidden'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
