"use client";

import { useRouter } from "next/navigation";
import { CiShoppingCart } from "react-icons/ci";
import { useCart } from "../hooks/useCart";

const CartCount = () => {
  const router = useRouter();
  const { cartTotalQty } = useCart();

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      <div className="text-xl md:text-3xl">
        <CiShoppingCart />
      </div>
      <span
        className="
      absolute
      top-[-10px]
      right-[-10px]
      bg-slate-700
      text-white
      md:h-6
      md:w-6
      w-4
      h-4
      rounded-full
      flex
      items-center
      justify-center
      text-xs
      "
      >
        {cartTotalQty}
      </span>
    </div>
  );
};

export default CartCount;
