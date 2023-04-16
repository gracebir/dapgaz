import Layout from '@/components/Layout'
import { card, product } from '@/moks/servicesData'
import start from "/public/images/start.png";
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from 'next/image';
import Card from '@/components/Card';

function ProductDetail() {
const router = useRouter()
const [count, setCount] = useState(1);
const deincrement = () =>{
    if(count > 1){
        setCount(count - 1)
    }
}

const increment = () =>{
    setCount(count + 1)
}
  const { id } = router.query
  const produit = product[2]
  return (
    <Layout>
        <div className="mt-5 container lg:mx-auto px-4 py-10 flex flex-col gap-8">
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="max-w-[626.38px] h-[449.14px] lg:h-[549.14px] bg-slate-500 rounded-xl">
                    <img 
                    alt='detail'
                    className="w-full h-full rounded-xl"
                    src="https://res.cloudinary.com/dnzidlufh/image/upload/v1681627154/pexels-pixabay-533342_1_xivqbl.png"
                    />
                </div>
                <div className="lg:px-8 flex flex-col gap-10 lg:gap-16">
                    <div className='flex flex-col gap-12'>
                        <h1 className="text-4xl lg:text-5xl font-bold">{produit.title}</h1>
                        <div className='w-full border border-[#FC7F2A]'></div>
                    </div>
                    <div className="flex justify-between">
                        <div className='flex flex-col gap-2'>
                            <span className="text-[#949393] text-[1rem]">Catégorie:  GPL </span>
                            <span className="text-[#FC7F2A] text-[1rem]">En Stock</span>
                        </div>
                        <div>
                            <span className="text-[#FC7F2A] text-[.7rem] ml-4">5/5</span>
                            <Image width={24} height={24} src={start} alt='start'/>
                        </div>
                    </div>
                    <div className="text-[#949393] flex flex-col gap-8 text-[.825rem]">
                        <p>
                        Par GPL, on entend le gaz butane et le gaz propane. D'une part, les origines sont différentes. Si le gaz naturel est composé principalement de méthane, 60% des GPL, quant à eux, proviennent des champs de gaz naturel et de pétrole alors que 40% sont issues du raffinage du pétrole brut.
                        </p>
                        <p>
                        Par GPL, on entend le gaz butane et le gaz propane. D'une part, les origines sont différentes. Si le gaz naturel est composé principalement de méthane, 60% des GPL, quant à eux, proviennent des champs de gaz naturel et de pétrole alors que 40% sont issues du raffinage du pétrole brut.
                        </p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className="flex flex-col">
                            <span className="text-[14px] font-bold">Total {produit.price}$</span>
                            <span className="text-[9px] text-[#949393]">12$/kg</span>
                        </div>
                        <div className='lg:w-[119px] flex justify-between max-w-[119px] text-[#FC7F2A] border border-[#FC7F2A] rounded  py-1 px-2'>
                            <span onClick={()=> deincrement()} className="cursor-pointer">-</span>
                            <span>{count}</span>
                            <span onClick={()=> increment()} className='cursor-pointer'>+</span>
                        </div>
                        <button className="bg-cl-primary px-7 py-2 rounded-xl text-white">Ajouter</button>
                    </div>
                </div>
            </div>
            <div className='flex lg:justify-between lg:flex-row flex-col gap-4 items-center'>
                {card.map((item, i)=> (
                    <Card key={i} {...item}/>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default ProductDetail
