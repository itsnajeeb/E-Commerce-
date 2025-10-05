import React from 'react'
import CartItem from './CartItem'
import './Cart.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate = useNavigate()
  const handleCheckout = ()=>{
    navigate('/checkout?step=2')
  }
  return (
    <div className='my-10'>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>

        <div className='col-span-2 space-y-7'>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className='px-5 sticky top-0 h-screen mt-5 lg:mt-0'>

          <div className='shadow-lg p-5 price_cart_container rounded-sm'>
            <p className='uppercase font-bold opacity-60 pb-3 text-sm'>Price Details</p>
            <hr className='bg-gray-300' color='gray' />
            <div className='space-y-2 font-semibold'>

              <div className='flex justify-between pt-3 text-black'>
                <span>Price (3 item)</span>
                <span className='text-green-600'>₹4697</span>
              </div>

              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>₹3419</span>
              </div>

              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>

              <hr />
              <div className='flex justify-between pt-3 text-black'>
                <span className='font-bold'>Total Account</span>
                <span className='text-green-600 font-bold'>₹1278</span>
              </div>

              <Button onClick={handleCheckout}
               variant='contained' sx={{bgcolor:"RGB(145 85 253)", px:"2.5rem", py:".7rem", color:"white", marginTop:3}} fullWidth>Check out</Button>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart 