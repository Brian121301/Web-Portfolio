import React from 'react'
import Link from 'next/link'

function NavLinks({ href, title}) {

  const handleClick = (event) => {
    if (href.startsWith('#')) {
      event.preventDefault(); // Prevent default anchor behavior
      const section = document.querySelector(href); // Find the target section
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
      }
    }
  };

  return (
    <Link href={href} onClick={handleClick} 
    className='block py-2 pl-3 pr-4 text-slate-200 grow hover:scale-105 transition-transform duration-200'>
        {title}
    </Link>
  )
}

export default NavLinks;
