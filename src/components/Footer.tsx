import { links } from '@/moks/servicesData'
import Link from 'next/link'
import React from 'react'
import {RiFacebookCircleLine} from 'react-icons/ri'
import { TiSocialTwitterCircular, TiSocialLinkedinCircular} from 'react-icons/ti'
import { GrInstagram } from 'react-icons/gr'


function Footer() {
  return (
    <div className="bg-black py-10">
      <div className="max-w-[1300px] mx-auto text-white flex justify-center gap-10 items-center flex-col lg:flex-row lg:items-start lg:justify-between">
      <img src="https://res.cloudinary.com/dnzidlufh/image/upload/v1681626123/DapLogo_n4zvjc.jpg" className="h-10 w-55" alt="logo" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl underline text-center lg:text-start font-medium text-[#FC7F2A]">Adresse</h1>
        <div>
            <p className='text-[1.125rem] text-center lg:text-start'>N° 121, Rue Président de la <br /> République ,Ville de <br /> Butembo,Nord-Kivu, RDC</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl underline font-medium text-[#FC7F2A] text-center lg:text-start">Liens</h1>
        <div className="flex flex-col gap-3">
            {links.map((item, i)=> (
                <Link className="text-[1.125rem] text-center lg:text-start" key={i} href={item.href}>{item.name}</Link>
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center lg:items-start">
        <h1 className="text-3xl underline font-medium text-[#FC7F2A] text-center lg:text-start">Nous contacter</h1>
        <div className='text-[1.125rem] text-center lg:text-start'>
            <p>+243 821 632 319</p>
            <p>contact@dap.Gaznet</p>
        </div>
        <div className="flex items-center gap-3">
            <RiFacebookCircleLine size={40}/>
            <TiSocialTwitterCircular size={40}/>
            <GrInstagram size={30}/>
            <TiSocialLinkedinCircular size={40}/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
