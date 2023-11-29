import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { products } from "./utils/products";
import { truncateText } from "./utils/truncateText";
import ProductCard from "./components/Card";
import getProducts from "@/actions/getProducts";
import { IProductParams } from "@/actions/getProducts";
import NullData from "./components/NullData";

interface HomeProps{
  searchParams:IProductParams,
}

const Home =  async ({searchParams}:HomeProps) => {
  const products = await getProducts(searchParams)

  if(products.length === 0){
    return <NullData title="Whoops. No products found. Click 'All' to clear filters"/>
  }

  function shuffleArray(array: any){
    for(let i = array.length - 1; i>0; i-- ){
      const j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j],array[i]]
    }
    return array
  }
  const shuffledProducts = shuffleArray(products)

  return (
    <div className='p-8'>
      <Container>
          <div>
            <HomeBanner/>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
          {shuffledProducts.map((product:any)=>{
            return <ProductCard data={product}/>
          }
            )}
          </div>
      </Container>
    </div>
  )
}

export default Home