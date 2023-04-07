import Link from "next/link";
import { useState } from "react";
import { Poppins, Be_Vietnam_Pro } from 'next/font/google'
import NavMob from "./NavMob/NavMob";

const bevietnam = Be_Vietnam_Pro({
    subsets: ['vietnamese'],
    weight: ['400', '500', '700']
})

const links = [
    {
        name: 'Acceuil',
        href: '/acceuil',
    },
    {
        name: 'A propos',
        href: '/apropos',
    },
    {
        name: 'Produits',
        href: '/produit',
    },
    {
        name: 'Points des ventes',
        href: '/pointsventes',
    },
    {
        name: 'Contact',
        href: '/contact',
    }
]

// src="./imgs/DapLogo.jpg"

function Header() {
    const [open, setOpen] = useState(false)
    const isOpen = () => setOpen(!open)
    return (
        <header className={`${bevietnam.className} lg:container mx-auto px-6 py-10 flex justify-between items-center z-40`}>
            <img src="./imgs/DapLogo.jpg" className="h-10 w-55" alt="logo" />
            {/* hamburger menu */}
            <div onClick={isOpen} className='w-7 h-7 flex flex-col gap-1 cursor-pointer lg:hidden justify-center items-center'>
                <div className={`h-1 bg-bgDarkBlue transition-all ease-in duratin-300 w-full ${open ? 'rotate-[-45deg] translate-x-[-5px] translate-y-[8px]' : 'rotate-0'}`}></div>
                <div className={`h-1 bg-bgDarkBlue transition-all ease-in duration-300 w-full ${open ? 'opacity-0' : 'opacity-1'}`}></div>
                <div className={`h-1 bg-bgDarkBlue transition-all ease-in duratin-300 w-full ${open ? 'rotate-[45deg] translate-x-[-5px] translate-y-[-8px]' : 'rotate-0'}`}></div>
            </div>
            {open && (
                <NavMob />
            )}
            <nav className='hidden lg:flex lg:gap-10 text-clDarkBlue list-none z-40'>
                {links.map((link, i) => (
                    <Link href={link.href} key={i} className='text-clDarkBlue transition ease-in duration-300 text-lg hover:text-clGrayish'>{link.name}</Link>
                ))}
            </nav>
            <Link className='hidden lg:block px-6 py-3 bg-bgBright text-white font-bold rounded-full shadow-xl z-40' href="#getstarted">Commandez</Link>
        </header>
    )
}

export default Header
