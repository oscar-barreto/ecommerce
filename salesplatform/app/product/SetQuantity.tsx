'use client'

import { CartProductType } from "./[productId]/ProductDetails"

interface SetQuantityProps{
    cartCounter?:boolean,
    cartProduct:CartProductType,
    handleQtyIncrease: ()=> void;
    handleQtyDecrease: ()=> decrease;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'

const SetQuantity: React.FC<SetQuantityProps> = ({
    cartCounter,
    cartProduct,
    handleQtyIncrease,
    handleQtyDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
        <div>
            {
                cartCounter ? null : <div className="font-semibold">Quantity: </div>
            }
            <div className="flex gap-4">
                <button className={btnStyles} onClick={handleQtyDecrease}>-</button>
                <div>{cartProduct.quantity}</div>
                <button className={btnStyles} onClick={handleQtyIncrease}>+</button>
            </div>
        </div>
    </div>
  )
}

export default SetQuantity