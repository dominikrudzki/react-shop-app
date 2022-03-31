import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import Cart from "./Cart"

jest.mock("react-redux", () => ({
	useDispatch: jest.fn(),
	useSelector: () => ({
		cartItems: [],
		cartTotalQuantity: 0,
		cartTotalAmount: 0
	})
}))

describe('Cart', () => {

	test('inform when is empty', async () => {
		render(<Cart/>)
		await waitFor(() => screen.findByText('Your cart is empty!'))
	})

})

export {}
