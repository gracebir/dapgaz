import Link from 'next/link'
import React from 'react'

const navitem = [
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

function NavMob() {
  return (
    <div className='bg-black bg-opacity-30 fixed z-[9999] bottom-0 left-0 right-0 top-[12.2%] flex justify-center py-2 lg:hidden'>
      <div className='bg-clLightGray w-[88%] h-[42vh] flex flex-col gap-8 items-center rounded-md shadow-lg py-8 list-none'>
        {navitem.map((item, i) => (
          <Link href={item.href} key={i} className="font-semibold text-clVdarkBlue text-2xl">{item.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default NavMob
