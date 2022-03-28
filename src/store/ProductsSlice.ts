import { ProductInfo } from "../types"
import { createSlice } from "@reduxjs/toolkit"

const initialState: Array<ProductInfo> = [
  {
    id: 0,
    name: 'Flower',
    image: 'https://cdn.pixabay.com/photo/2021/06/14/12/44/tulip-6335814_960_720.png',
    description: 'Beautiful rose',
    price: 10.20
  },
  {
    id: 1,
    name: 'Bike',
    image: 'https://cdn.pixabay.com/photo/2020/02/22/06/40/bicycle-silhouette-4869561_960_720.png',
    description: 'Gorgeous bike',
    price: 206.8
  },
  {
    id: 2,
    name: 'Computer',
    image: 'https://cdn.pixabay.com/photo/2013/07/13/11/46/laptop-158648_960_720.png',
    description: 'Very fast pc',
    price: 550
  },
  {
    id: 3,
    name: 'Headphones',
    image: 'https://cdn.pixabay.com/photo/2014/12/21/23/36/headphones-575633_960_720.png',
    description: 'Sounds really great',
    price: 80
  },
  {
    id: 4,
    name: 'Briefcase',
    image: 'https://cdn.pixabay.com/photo/2013/07/12/14/06/briefcase-147768_960_720.png',
    description: 'Business briefcase',
    price: 40.6
  },
  {
    id: 5,
    name: 'Phone',
    image: 'https://cdn.pixabay.com/photo/2015/06/15/18/09/smartphone-810440_960_720.png',
    description: 'The best phone',
    price: 200
  },
  {
    id: 6,
    name: 'Cat',
    image: 'https://cdn.pixabay.com/photo/2016/08/19/12/24/cat-1605131_960_720.png',
    description: 'The sweetest cat on earth',
    price: 100
  },
  {
    id: 7,
    name: 'Hot Dog',
    image: 'https://cdn.pixabay.com/photo/2012/04/26/10/44/hotdog-42015_960_720.png',
    description: 'Looks delicious',
    price: 3.2
  }
]

const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {} // feat: add new items e.g. from api
})

export default ProductsSlice.reducer
