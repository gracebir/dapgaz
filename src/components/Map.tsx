
import React, { useEffect } from 'react'
import { MapContainer, useMap, TileLayer } from "react-leaflet";
import { MarkerLayer, Marker } from 'react-leaflet-marker';
import {MdPlace} from 'react-icons/md'

export type position = {
    lat: number
    lng: number
}

type mapProps = {
    center: position
}

function Map({ center }: mapProps) {
    const RePositionAutomatically = ({ lat, lng }: position) => {
        const map = useMap();
        useEffect(() => {
            map.setView([lat, lng]);
            // eslint-disable-next-line 
        }, [center]);
        return null;
    }
    return (
        <div className="lg:w-[684px] w-full h-[504px]" id='map'>
            <MapContainer scrollWheelZoom={true} center={[center.lat, center.lng]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerLayer>
                    <Marker position={[center.lat, center.lng]}>
                        <MdPlace className="w-[32.67px] h-11 text-cl-primary"/>
                    </Marker>
                </MarkerLayer>
                <RePositionAutomatically lat={center.lat} lng={center.lng} />
            </MapContainer>
        </div>
    )
}

export default Map
