import Link from 'next/link'
import React from 'react'

function Action() {
  return (
    <div className="action">
      <h1 className="text-3xl text-white text-center font-bold">Décidez maintenant à préparer 10 fois plus rapidement et propre</h1>
      <Link className="text-white bg-[#FC7F2A] px-6 py-3 z-50 rounded" href="#">Commandez</Link>
    </div>
  )
}

export default Action
