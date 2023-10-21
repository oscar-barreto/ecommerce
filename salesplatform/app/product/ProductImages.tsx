'use client'
import Image from "next/image";
import { CartProductType, SelectedImgType } from "./[productId]/ProductDetails";

interface ProductImagesProps {
    cartProduct: CartProductType,
    product:any,
    handleColorSelect:(value:SelectedImgType) => void,
}


const ProductImages: React.FC<ProductImagesProps> = ({
    cartProduct, handleColorSelect, product
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
        <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
            {product.images.map((image:SelectedImgType)=>{
                return <div key={image.color} onClick={handleColorSelect(image)} className="relative -[80%]">
                    <Image src={image.image} fill className="object-contain" alt={image.color}/>
                </div>
            })}
        </div>
        <div>hello</div>
    </div>
  )
}

export default ProductImages