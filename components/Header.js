import React from 'react'
import Link from 'next/link'
import Logo from '@/public/logo.png'
function Header() {
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Work', href: '#work' },
    { title: 'Expertise', href: '#expertise' },
    { title: 'Experience', href: '#experience' },
  ]
  return (
    <header className='flex w-full justify-around items-center py-3'>
      <img src={Logo.src} alt='logo' />
      <nav>
        <ul className='flex gap-6'>
          {navLinks.map((link) => {
            return (
              <li key={link.title}>
                <Link href={link.href} className=''>
                  {link.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <Link href=''>Contact</Link>
    </header>
  )
}

export default Header
