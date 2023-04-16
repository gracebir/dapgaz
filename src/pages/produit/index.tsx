import Card from '@/components/Card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { product } from '@/moks/servicesData'
import { Be_Vietnam_Pro } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const bevietnam = Be_Vietnam_Pro({
    subsets: ['vietnamese'],
    weight: ['400', '500', '700']
  })

function Produit() {
    return (
        <div className={bevietnam.className}>
            <Header />
            <div className="flex flex-col lg:items-start mt-10 items-center gap-8 mb-8 lg:container lg:mx-auto">
                <div className="mb-8">
                    <h1 className='lg:text-7xl text-4xl font-bold'>Gaz a Gpl</h1>
                    <p className="text-[10px]">Produits disponibles pour cette catégories</p>
                </div>
                <div className="relative flex flex-col lg:flex-row lg:flex-wrap lg:gap-28 gap-10 items-center">
                    {product.map((items, i) => {
                        return <Card  key={i} {...items} />;
                    })}
                </div>
                <Link className="border border-[#fc7f2a] transition duration-300 ease-in hover:bg-[#fc7f2a] hover:text-white float-left rounded text-[1.2rem] font-semibold text-[#fc7f2a] px-16 py-3" href="#">Voir +</Link>
            </div>

            <div className="action">
                <h1 className="text-3xl text-white text-center font-bold">Décidez maintenant à préparer 10 fois plus rapidement et propre</h1>
                <Link className="text-white bg-[#FC7F2A] px-6 py-3 z-50 rounded" href="#">Commandez</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Produit
