import { product } from "@/app/utils/product"
import Container from "@/app/components/Container"
import ProductDetails from "./ProductDetails"

interface IPrams{
    productId?:string
}
const ProductPage = ({params}:{params:IPrams}) => {
  return (
    <div className="p-8">
        <Container>
            <ProductDetails product={product}/>
        </Container>
    </div>
  )
}

export default ProductPage