import Product from "../components/Product"
import { ProductInfo, RootState } from "../types"
import { useSelector } from "react-redux"

const Main = () => {
  const products = useSelector(({products}: RootState) => products)

  return (
    <>
      <div className="flex flex-wrap">
        {products.map((product: ProductInfo, index: number) =>
          <Product key={index} {...product}/>
        )}
      </div>
    </>
  )
}

export default Main
