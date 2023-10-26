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
import ItemContent from "./ItemContent";

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
      {cartProducts &&
        cartProducts.map((item) => {
          return <ItemContent key={item.id} item={item}/>;
        })}
    </div>
    <div
      className="border-t-[1.5px]
    border-slate-200 py-4 flex justify-between gap-4"
    >
      <div className="w-[90px]">
        <Button
          label="Clear Cart"
          onClick={() => {
            handleClearCart();
          }}
          small
          outline
        />
      </div>
      <div className="text-sm flex flex-col gap-1 items-start">
        <div className="flex justify-between w-full text-base font-semibold">
          <span>Subtotal</span>
          <span>$1000</span>
        </div>
        <p className="text-slate-500">
          Taxes and shipping calculated at checkout
        </p>
        <Button onClick={()=>{}} label='Checkout'/>
        <Link
          href={"/"}
          className="text-slate-500 flex items-center gap-1 mt-2"
        >
          <MdArrowBack />
          <span>Continue Shopping</span>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default CartClient