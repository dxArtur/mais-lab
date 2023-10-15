import Link from "next/link"
import React from "react"
import Image from "next/image"
import {GiCat} from 'react-icons/gi'

const NavBar = ()=>{

    const links = [
        {label: 'About', href:'/about'},
        {label: 'We are', href:'/weare'},
        {label: 'Contact', href:'/contact'},
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/">
            <Image
                src="/icon-text.svg"
                alt="mais lab logo"
                width={100}
                height={50}
                priority
            />
             </Link>

            <ul className='flex space-x-6'>
                {links.map(link =>
                <Link 
                    key={link.href}
                    className="text-zinc-500 hover:text-zinc-300 transition-colors"
                    href={link.href}>
                        {link.label}   
                </Link>)}
            </ul>
        </nav>
    )
}
export default NavBar