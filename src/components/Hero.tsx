import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className="h-[556px] w-full flex items-center bg-bgHero bg-no-repeat bg-cover">
      <div className="mx-auto flex flex-col items-center container gap-6">
        <h2 className="text-3xl lg:text-6xl text-white font-bold text-center lg:leading-[80px]">Vivez des moments inoubliables en fammille <br /> avec DAP GAZ</h2>
        <Link className='px-6 py-3 bg-bgBright text-white font-bold rounded-full shadow-xl z-40' href="#getstarted">Commandez</Link>
      </div>
    </div>
  )
}

export default Hero
