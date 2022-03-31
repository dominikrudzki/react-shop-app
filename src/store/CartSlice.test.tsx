import reducer, { addToCart, removeFromCart } from "./CartSlice"

describe('CartSlice', () => {

	const item = {
		id: 0,
		name: 'Product',
		image: 'anyUrl',
		description: 'description',
		price: 12
	}

	test('handle new item add', () => {
		const initialState = {
			cartItems: [],
			cartTotalQuantity: 0,
			cartTotalAmount: 0
		}

		expect(reducer(initialState, addToCart(item))).toEqual({
			cartItems: [...initialState.cartItems, {...item, quantity: 1}],
			cartTotalQuantity: initialState.cartTotalQuantity + 1,
			cartTotalAmount: initialState.cartTotalAmount + item.price
		})
	})

	test('increase quantity of item if already exist in cart', () => {
		const initialState = {
			cartItems: [{...item, quantity: 1}],
			cartTotalQuantity: 1,
			cartTotalAmount: 1
		}

		expect(reducer(initialState, addToCart(item))).toEqual({
			cartItems: [{...item, quantity: 2}],
			cartTotalQuantity: initialState.cartTotalQuantity + 1,
			cartTotalAmount: initialState.cartTotalAmount + item.price
		})
	})

	test('handle remove item', () => {
		const item2 = {
			id: 7,
			name: 'Hot Dog',
			image: 'https://cdn.pixabay.com/photo/2012/04/26/10/44/hotdog-42015_960_720.png',
			description: 'Looks delicious',
			price: 3.2
		}

		const initialState = {
			cartItems: [{...item, quantity: 1}, {...item2, quantity: 1}],
			cartTotalQuantity: 1,
			cartTotalAmount: 1
		}

		expect(reducer(initialState, removeFromCart(item.id))).toEqual({
			cartItems: [{...item2, quantity: 1}],
			cartTotalQuantity: initialState.cartTotalQuantity - 1,
			cartTotalAmount: initialState.cartTotalAmount - item.price
		})
	})
})

export {}
