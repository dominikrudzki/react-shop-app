import reducer, { addToCart } from "./CartSlice"

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
			cartTotalAmount: 0 // money
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
			cartTotalAmount: 1 // money
		}

		expect(reducer(initialState, addToCart({...item}))).toEqual({
			cartItems: [{...item, quantity: 2}],
			cartTotalQuantity: initialState.cartTotalQuantity + 1,
			cartTotalAmount: initialState.cartTotalAmount + item.price
		})
	})

})

export {}
