import React, { useEffect } from 'react'
import CartItem from './CartItem'
import './Cart.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'
const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cart } = useSelector(store => store)

  const handleCheckout = () => {
    navigate('/checkout?step=2')
  }
  useEffect(() => {
    dispatch(getCart())
  }, [cart.updateCartItem, cart.deleteCartItem])

  
  return (
    <div className='my-10'>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>

        <div className='col-span-2 space-y-7'>
          {cart.cart?.cartItems.map((item, index ) => <CartItem key={index}  item={item}/>)}
        </div>

        <div className='px-5 sticky top-0 h-screen mt-5 lg:mt-0'>

          <div className='shadow-lg p-5 price_cart_container rounded-sm'>
            <p className='uppercase font-bold opacity-60 pb-3 text-sm'>Price Details</p>
            <hr className='bg-gray-300' color='gray' />
            <div className='space-y-2 font-semibold'>

              <div className='flex justify-between pt-3 text-black'>
                <span>Price (3 item)</span>
                <span className='text-green-600'>₹{cart.cart?.totalPrice}</span>
              </div>

              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>- ₹{cart.cart?.discounte}</span>
              </div>

              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>

              <hr />
              <div className='flex justify-between pt-3 text-black'>
                <span className='font-bold'>Total Amount</span>
                <span className='text-green-600 font-bold'>₹{cart.cart?.totalDiscountedPrice}</span>
              </div>

              <Button onClick={handleCheckout}
                variant='contained' sx={{ bgcolor: "RGB(145 85 253)", px: "2.5rem", py: ".7rem", color: "white", marginTop: 3 }} fullWidth>Check out</Button>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart 