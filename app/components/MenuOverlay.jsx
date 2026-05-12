import React from 'react'
import NavLinks from './NavLinks'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col items-center md:hidden'>
            {
                links.map((link, index) => (
                    <li key={index}>
                        <NavLinks href={link.path} title={link.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export default MenuOverlay
