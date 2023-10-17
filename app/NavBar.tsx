'use client'

import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import classnames from "classnames"

const NavBar = ()=>{

    const currentPath = usePathname()

    const links = [
        {label: 'About', href:'/pages/about'},
        {label: 'We are', href:'/pages/weare'},
        {label: 'Contact', href:'/pages/contact'},
    ]

    return (
        <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
            <Link href="/">
            <Image
                src="/txt-logo.svg"
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
                    className={classnames({
                        'text-zinc-900' : link.href === currentPath,
                        'text-zinc-500' : link.href !== currentPath,
                        'hoover: text-zinc-800 transitions-colors' : true
                    })}
                    href={link.href}>
                        {link.label}   
                </Link>)}
            </ul>
        </nav>
    )
}
export default NavBar