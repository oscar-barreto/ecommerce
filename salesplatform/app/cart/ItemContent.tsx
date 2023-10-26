import Link from "next/link"
import { CartProductType } from "../product/[productId]/ProductDetails"
import { formatPrice } from "../utils/formatPrice"
import { truncateText } from "../utils/truncateText"

interface ItemContentProps{
    item: CartProductType
}

const ItemContent:React.FC<ItemContentProps> = ({item}) => {
  return (
    <div className="grid grid-cols-5 text-xs gap-4 md:text-sm border-[1.5px] border-slate-200 py-4 items-center">
        <div className="col-span-2 justify-start flex gap-2 md:gap-4">
            <Link href={`/product/${item.id}`}>
                <div></div>
            </Link>
            <div className="flex flex-col justify-between">
                <Link href={`/product/${item.id}`}>
                    {truncateText(item.name)}
                </Link>
            </div>
        </div>
        <div>{formatPrice(item.price)}</div>
        <div>total</div>
    </div>
  )
}

export default ItemContent