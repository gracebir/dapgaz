import { card } from '@/moks/servicesData';
import React from 'react'
import Card from './Card'
import Link from 'next/link';

function Offre() {
    return (
        <div className="mx-auto max-w-[1300px] pb-6 flex flex-col items-center gap-14 lg:items-end my-16 px-2">
            <h1 className="font-bold text-3xl text-center lg:mx-auto">Nos vous offrons</h1>
            <div className="bg-[#0000002e] flex flex-col lg:w-[760px] items-center text-[1.5rem] w-full mx-auto text-center px-4 py-4 lg:h-14 lg:flex-row lg:justify-around rounded">
                <p className="cursor-pointer font-semibold transition duration-300 ease-in hover:text-[#FC7F2A]">Gaz à GPL</p>
                <p className="cursor-pointer font-semibold transition duration-300 ease-in hover:text-[#FC7F2A]">Gaz en Bouteille</p>
                <p className="cursor-pointer font-semibold transition duration-300 ease-in hover:text-[#FC7F2A]">Réchauds à Gaz</p>
            </div>
            <p className="text-[1.7rem] text-center"><span className="font-semibold">La cuisson au gaz GPL est la solution la moins chère et la plus simple à utiliser</span> Le passage à la bonbonne de gaz pour la cuisson permet d’éviter les inconvénients du bois de chauffage pour la santé, d’atténuer l’impact environnemental et de limiter les risques liés à la collecte de bois.</p>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-[24px]">
                {card.map((items) => {
                    return <Card key={items.id} {...items} />;
                })}
            </div>
            <Link className="border border-[#fc7f2a] transition duration-300 ease-in hover:bg-[#fc7f2a] hover:text-white float-left rounded text-[1.2rem] font-semibold text-[#fc7f2a] px-16 py-3" href="#">Voir +</Link>
        </div>
    )
}

export default Offre
