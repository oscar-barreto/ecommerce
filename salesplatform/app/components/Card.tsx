'use client'

import Image from "next/image";
interface ProductCardProps{
    data: any
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {
  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
        <div className="flex flex-col w-full gap-1 items-center">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image alt={data.name} src={data.images[0].image} fill className="w-full h-full object-contain"/>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default ProductCard