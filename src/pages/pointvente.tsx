import Layout from '@/components/Layout'
import Map, { position } from '@/components/Map'
import { mapPoints } from '@/moks/servicesData'
import React, { useState } from 'react'
import { MdPlace, MdKeyboardArrowRight } from 'react-icons/md'
import 'leaflet/dist/leaflet.css';

function PointVente() {
    const [center, setCenter] = useState<position>({lat: -4.368219188288317, lng:15.256476559450432})
    const positionChange = (lat:number, lng: number) => {
        console.log(lat, lng)
        setCenter({lat, lng})
    }
    return (
        <Layout>
            <div className='container mx-auto py-14 flex flex-col gap-20'>
                <h1 className="text-4xl lg:text-[40px] font-extrabold text-center">POINT DES VENTES BUKAVU</h1>
                <div className="flex justify-between lg:flex-row flex-col">
                    <div className="flex flex-col gap-12">
                        {mapPoints.map((mapPoint, i) => (
                            <button key={i} onClick={()=> positionChange(mapPoint.lat, mapPoint.lng)} className="w-[413px] py-7 border border-black flex justify-between px-4 items-center">
                                <MdPlace className="w-[32.67px] h-11" />
                                <div>
                                    <h1 className='text-[24px] font-semibold'>{mapPoint.ville}</h1>
                                    <span className='text-[#949393]'>Avenue MONGO, N° 72</span>
                                </div>
                                <MdKeyboardArrowRight height={60} width={30} />
                            </button>
                        ))}

                    </div>
                    <div className="border border-black">
                        <Map center={center}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PointVente
