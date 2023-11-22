
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CartProductType } from "../product/[productId]/ProductDetails";
import toast , {Toaster} from 'react-hot-toast'

type CartContextType ={
    cartTotalQty : number,
    cartProducts: CartProductType[] | null,
    handleAddProductToCart: (product:CartProductType) => void,
    handleRemoveProductFromCart: (product: CartProductType) => void,
    handleCartQtyDecrease: (product: CartProductType) => void,
    handleCartQtyIncrease: (product: CartProductType) => void,
    handleClearCart: () => void,
    cartTotalAmount: number,
    paymentIntent: string | null,
    handleSetPaymentIntent:(val:string | null) => void,

}

interface Props {
    [propName:string]:any
}

export const CartContext = createContext<CartContextType | null>(null)

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null >(null);
    const [paymentIntent, setPaymentIntent] = useState<string | null>(null);

    useEffect(() => {
        const cartItems: any = localStorage.getItem("eShopCartItems");
        const cartProducts: CartProductType[] | null = JSON.parse(cartItems);
        const eShopPaymentIntent: any = localStorage.getItem("eShopPaymentIntent");
        const paymentIntent: string | null = JSON.parse(eShopPaymentIntent);
    
        setCartProducts(cartProducts);
        setPaymentIntent(paymentIntent);
      }, []);

    useEffect(() => {
        const getTotals = () => {
          if (cartProducts) {
            const { total, qty } = cartProducts.reduce(
              (acc, item) => {
                const itemTotal = item.price * item.quantity;
    
                acc.total += itemTotal;
                acc.qty += item.quantity;
    
                return acc;
              },
              {
                total: 0,
                qty: 0,
              }
            );
    
            setCartTotalAmount(parseFloat(total.toFixed(2)));
            setCartTotalQty(qty);
          }
        };
    
        getTotals();
      }, [cartProducts]);

    const handleAddProductToCart = useCallback((product:CartProductType)=>{
        setCartProducts((prev)=>{
            let updatedCart;
            if(prev){
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            toast.success('Product added cart')
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
            return updatedCart;
        });
    }, []);

    const handleRemoveProductFromCart = useCallback((
        product: CartContextType
    )=>{
        if(cartProducts){
            const filteredProducts = cartProducts.filter((item)=>{
                return item.id !==product.id
            })
            setCartProducts(filteredProducts)
            toast.success('Product Removed');
            localStorage.setItem('eShopCartItems', JSON.stringify(filteredProducts))
        }

    }, [cartProducts]);

    const handleCartQtyIncrease = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(product.quantity === 99){
            return toast.error('Whoops! Maximum reached');
        }
        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
                );
            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
        }
    },[cartProducts])

    const handleCartQtyDecrease = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(product.quantity === 1){
            return toast.error('Whoops! Minimum reached');
        }
        if(cartProducts){
            updatedCart = [...cartProducts]
            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
                );
            if(existingIndex > -1){
                updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))
        }
    },[cartProducts])

    const handleClearCart = useCallback((product: CartProductType)=>{
        setCartProducts(null);
        setCartTotalQty(null);
        localStorage.setItem('eShopCartItems', JSON.stringify(null))
    },[cartProducts])
    
    const handleSetPaymentIntent = useCallback(
        (val: string | null) => {
          console.log("setting payment intent");
          setPaymentIntent(val);
          localStorage.setItem("eShopPaymentIntent", JSON.stringify(val));
        },
        [paymentIntent]
      );

    const value = {
        cartProducts,
        cartTotalAmount,
        handleAddProductToCart,
        cartTotalQty,
        handleCartQtyDecrease,
        handleCartQtyIncrease,
        handleRemoveProductFromCart,
        handleClearCart,
        paymentIntent,
        handleSetPaymentIntent,
    }
    return <CartContext.Provider value={value} {...props} />;
}


export const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
      throw new Error("useCart must be used within a CartContextProvider");
    }
    return context;
  };