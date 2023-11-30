'use client'

import Image from "next/image";
import { truncateText } from "../utils/truncateText";
import { products } from "../utils/products";
import {Rating} from '@mui/material';
import { formatPrice } from "../utils/formatPrice";
import { useRouter } from "next/navigation";
import { Open_Sans } from "next/font/google";


const openSans = Open_Sans({ subsets: ["latin"], weight: ["700"] });
interface ProductCardProps{
    data: any
}

const ProductCard:React.FC<ProductCardProps> = ({data}) => {


    const router = useRouter();
    const productRating = data.reviews.reduce((acc:number,item:any)=> item.rating+ acc,0) / data.reviews.length


  return (
    <div onClick={()=> router.push(`/product/${data.id}`)}
     className="col-span-1 bg-[#EDEEF2] cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm">
        <div className="flex flex-col w-full gap-1 items-center">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image alt={data.name} src={data.images[0].image} fill className="w-full h-full object-contain"/>
            </div>
            <div className="flex flex-row justify-center items-end">
            <div className="flex flex-col">
            <div className="mt-4 text-xs">{truncateText(data.name)}</div>
            {/* <div>
                <Rating value={productRating}/>
            </div> */}
            {/* <div>{data.reviews.length} reviews</div> */}
            <div className={`${openSans.className} font-bold flex justify-start`}>{formatPrice(data.price)}</div>
            </div>
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-9 h-9 border p-2 bg-slate-950">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductCard