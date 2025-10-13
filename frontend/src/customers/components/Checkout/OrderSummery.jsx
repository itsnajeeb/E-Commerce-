import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummery = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const orderId = searchParams.get("order_id")
  const dispatch = useDispatch()
  const { order } = useSelector(store => store)
    
  useEffect(() => {
    dispatch(getOrderById(orderId))
  }, [orderId])
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md order_summery '>
        <AddressCard address = {order?.order?.shippingAddress} />
      </div>


      <div className='lg:grid grid-cols-3 relative mt-10'>

        <div className='col-span-2 space-y-7'>
          {order.order?.orderItems.map((item) => (
            < CartItem item={item} />
          ))}
        </div>

        <div className='px-5 sticky top-0 h-screen mt-5 lg:mt-0'>

          <div className='shadow-lg p-5 price_cart_container rounded-sm'>
            <p className='uppercase font-bold opacity-60 pb-3 text-sm'>Price Details</p>
            <hr className='bg-gray-300' color='gray' />
            <div className='space-y-2 font-semibold'>

              <div className='flex justify-between pt-3 text-black'>
                <span>Price (3 item)</span>
                <span className='text-green-600'>{order?.order?.totalPrice}</span>
              </div>

              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>{order?.order?.discounte}</span>
              </div>

              <div className='flex justify-between pt-3 text-black'>
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>

              <hr />
              <div className='flex justify-between pt-3 text-black'>
                <span className='font-bold'>Total Account</span>
                <span className='text-green-600 font-bold'>{order?.order?.totalDiscountedPrice}</span>
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