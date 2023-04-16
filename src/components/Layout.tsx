import React from 'react'
import Header from './Header'
import Link from 'next/link'
import Footer from './Footer'
import { Be_Vietnam_Pro } from 'next/font/google'

type props = {
    children?: React.ReactNode
}

const bevietnam = Be_Vietnam_Pro({
    subsets: ['vietnamese'],
    weight: ['400', '500', '700','800']
})

function Layout({ children }: props) {
    return (
        <div className={bevietnam.className}>
            <Header />
            <main>
                {children}
            </main>
            <div className="action">
                <h1 className="text-3xl text-white text-center font-bold">Décidez maintenant à préparer 10 fois plus rapidement et propre</h1>
                <Link className="text-white bg-[#FC7F2A] px-6 py-3 z-50 rounded" href="#">Commandez</Link>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
