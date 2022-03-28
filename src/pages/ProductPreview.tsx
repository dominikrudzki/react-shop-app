import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../types"

const ProductPreview = () => {
  const [searchParams] = useSearchParams()
  const product = useSelector(({products}: RootState) => products.find(item =>
    item.id === parseInt(searchParams.get('id') || '{}')
  ))

  return (
    <>
      <div className="flex flex-col dark:text-neutral-100 max-w-md mx-auto">
        <img
          src={product?.image}
          alt=""
          className="h-64 w-fit mx-auto"
        />
        <div className="p-5">
          <div className="mb-2">
            <span className="block font-semibold">Product:</span>
            <span>{product?.name}</span>
          </div>
          <div className="mb-2">
            <span className="block font-semibold">Description:</span>
            <span>{product?.description}</span>
          </div>
          <div className="mb-2">
            <span className="block font-semibold">Price:</span>
            <span>${product?.price}</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default ProductPreview
