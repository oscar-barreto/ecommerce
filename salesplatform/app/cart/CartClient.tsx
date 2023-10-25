'use client'
import Link from "next/link";
import { useCart } from "../hooks/useCart";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import {
    useEffect,
    useState,
    createContext,
    useContext,
    useCallback,
  } from "react";

const CartClient = () => {
    const {cartProducts} = useCart();
    if(!cartProducts || cartProducts.length === 0 ){
        return 
        <div className="flex flex-col items-center">
            <div>Your cart is empty</div>
            <Link  className={'text-slate-500 flex items-center gap-1 mt-2'} href={'/'}>
                <MdArrowBack/>
                <span>Start shopping</span>
            </Link>
        </div>
    }
  return (
   <div>

        <div>
            <h2 className="text-2xl text-center mb-8">Shopping Cart</h2>
            <div
                className="grid
            grid-cols-5
            text-xs
            gap-4
            pb-2
            items-center"
            >
                    <div className="col-span-2 justify-self-start">PRODUCT</div>
                    <div className="justify-self-center">PRICE</div>
                    <div className="justify-self-center">QUANTITY</div>
                    <div className="justify-self-end">TOTAL</div>
                    
            </div>
            <div>
                {cartProducts && cartProducts.map((item)=>{
                    return <div key={item.id}>
                            {item.name}
                        </div>
                })}
            </div>
            <div>
            <Button
            label="Clear Cart"
            onClick={() => {
            
            }}
            small
            outline
          />            </div>
        </div>

   </div>
  )
}

export default CartClient