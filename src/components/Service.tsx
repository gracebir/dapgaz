import React from 'react'
import ServiceContainer from './ServiceContainer'

function Service() {
  return (
    <div className="mx-auto max-w-[1600px] py-8 flex flex-col items-center gap-10">
      <div className="flex flex-col gap-6 px-2">
        <h1 className="text-3xl font-bold text-center">Découvrez nos services</h1>
        <p className="text-[1rem]">Lorem ipsum Lorem ipsum  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum </p>
      </div>
      <ServiceContainer/>
    </div>
  )
}

export default Service
