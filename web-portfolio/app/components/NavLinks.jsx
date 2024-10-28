import React from 'react'
import Link from 'next/link'

function NavLinks({ href, title}) {
  return (
    <Link href={href} className='block py-2 pl-3 pr-4 text-slate-200 grow hover:scale-105 transition-transform duration-200'>
        {title}
    </Link>
  )
}

export default NavLinks;
