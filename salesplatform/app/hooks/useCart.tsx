import { createContext, useState } from "react";

type CartContextType ={
    cartTotalQty : number,
}

interface Props {
    [propName:string]:any
}

export const CartContext = createContext<CartContextType | null>

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const value = {
        cartTotalQty
    }
    return <CartContext.Provider value={value} {...props} />
}