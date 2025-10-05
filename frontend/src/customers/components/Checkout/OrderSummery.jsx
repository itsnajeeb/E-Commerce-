import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummery = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md order_summery '>
        <AddressCard />
      </div>


      <div className='lg:grid grid-cols-3 relative mt-10'>

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

              <Button variant='contained' sx={{ bgcolor: "RGB(145 85 253)", px: "2.5rem", py: ".7rem", color: "white", marginTop: 3 }} fullWidth>Check out</Button>

            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default OrderSummery