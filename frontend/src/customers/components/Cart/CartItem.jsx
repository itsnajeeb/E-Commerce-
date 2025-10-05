import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Cart.css'
const CartItem = () => {
    return (
        <div className='p-5 cart_item_container  rounded-md'>

            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='w-full h-full object-cover object-top rounded-sm'
                        src="https://rukminim1.flixcart.com/image/612/612/l4u7vrk0/ethnic-set/u/h/4/m-e916-the-style-story-original-imagfmqguehvhen3.jpeg?q=70" alt="" />
                </div>


                <div className='ml-5  space-y-1'>
                    <p className='font-semibold'>Mens Slim Mid Rise Black jeanse</p>
                    <p className='opacity-70'>Size : L, White</p>
                    <p className='opacity-70'>Seller : Brand Name Fashion</p>

                    <div className='flex space-x-3 items-center  text-gray-900 mt-6'>
                        <p className='font-semibold '>₹199</p>
                        <p className='opacity-50 line-through'>₹211 </p>
                        <p className='text-green-600 font-semibold'>5% Off</p>

                    </div>
                </div>

            </div>
            <div className='flex flex-center   lg:space-x-10  pt-4'>
                <div className='flex items-center'>
                    <IconButton  sx={{color:"gray"}}>
                        <RemoveCircleIcon />
                    </IconButton>
                        <span className='py-1 px-8 border rounded-sm ' >5</span>
                    <IconButton sx={{color:"RGB(145 85 253) "}}>
                            <AddCircleIcon />
                    </IconButton>
                </div>

                <div>
                    <Button  sx={{color:"RGB(145 85 253) "}}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem