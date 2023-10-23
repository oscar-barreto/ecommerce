import { product } from "@/app/utils/product";
import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import ListRating from '@/app/product/[productId]/ListRating';

interface IPrams{
    productId?:string
}
const ProductPage = ({params}:{params:IPrams}) => {
  return (
    <div className="p-8">
        <Container>
            <ProductDetails product={product}/>
            <div className="flex flex-col mt-20 gap-4 ">
                <div className="">Add Rating</div>
                <ListRating product={product}/>
            </div>
        </Container>
    </div>
  )
}

export default ProductPage