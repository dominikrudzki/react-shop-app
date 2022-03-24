import Product from "../components/product"
import { ProductInfo } from "../types"

const Main = () => {
  const products: Array<ProductInfo> = [
    {
      name: 'Flower',
      image: 'https://cdn.pixabay.com/photo/2021/06/14/12/44/tulip-6335814_960_720.png',
      description: 'Beautiful rose',
      price: 10.20
    },
    {
      name: 'Bike',
      image: 'https://cdn.pixabay.com/photo/2020/02/22/06/40/bicycle-silhouette-4869561_960_720.png',
      description: 'Gorgeous bike',
      price: 206.8
    },
    {
      name: 'Computer',
      image: 'https://cdn.pixabay.com/photo/2013/07/13/11/46/laptop-158648_960_720.png',
      description: 'Very fast pc',
      price: 550
    },
    {
      name: 'Headphones',
      image: 'https://cdn.pixabay.com/photo/2014/12/21/23/36/headphones-575633_960_720.png',
      description: 'Sounds really great',
      price: 80
    },
    {
      name: 'Briefcase',
      image: 'https://cdn.pixabay.com/photo/2013/07/12/14/06/briefcase-147768_960_720.png',
      description: 'Business briefcase',
      price: 40.6
    },
    {
      name: 'Phone',
      image: 'https://cdn.pixabay.com/photo/2015/06/15/18/09/smartphone-810440_960_720.png',
      description: 'The best phone',
      price: 200
    },
    {
      name: 'Cat',
      image: 'https://cdn.pixabay.com/photo/2016/08/19/12/24/cat-1605131_960_720.png',
      description: 'The sweetest cat on earth',
      price: 100
    },
    {
      name: 'Hot Dog',
      image: 'https://cdn.pixabay.com/photo/2012/04/26/10/44/hotdog-42015_960_720.png',
      description: 'Looks delicious',
      price: 3.2
    }
  ]

  return (
    <div className="flex flex-wrap">
      {products.map((product: ProductInfo, index: number) =>
        <Product key={index} {...product}/>
      )}
    </div>
  )
}

export default Main
