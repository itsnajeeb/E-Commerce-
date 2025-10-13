import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Button, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Cart.css'
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action.js';
const CartItem = ({ item }) => {
    
    const dispatch = useDispatch()
    const handleUpdateCartItem = (num) => {
        const data = { data: { quantity: item.quantity + num }, cartItemId: item?._id }
        dispatch(updateCartItem(data))
    }

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item._id))
    }

    return (
        <div className='p-5 cart_item_container  rounded-md'>

            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='w-full h-full object-cover object-top rounded-sm'
                        src={item?.product?.imageUrl} alt="" />
                </div>



                <div className='ml-5  space-y-1'>
                    <p className='font-semibold'>{item?.product?.title}</p>
                    <p className='opacity-70'>Size : {item?.size}, {item?.product?.color}</p>
                    <p className='opacity-70'>Seller : {item?.product?.brand}</p>

                    <div className='flex space-x-3 items-center  text-gray-900 mt-6'>
                        <p className='font-semibold '>₹{item.price}</p>
                        <p className='opacity-50 line-through'>₹{item.discountedPrice} </p>
                        <p className='text-green-600 font-semibold'>{item.product?.discountPersent}% Off</p>

                    </div>
                </div>

            </div>
            <div className='flex flex-center   lg:space-x-10  pt-4'>
                <div className='flex items-center'>
                    <IconButton sx={{ color: "gray" }} onClick={() => handleUpdateCartItem(-1)} disabled={item.quantity <= 1}>
                        <RemoveCircleIcon />
                    </IconButton>
                    <span className='py-1 px-8 border rounded-sm ' >{item.quantity}</span>
                    <IconButton sx={{ color: "RGB(145 85 253) " }} onClick={() => handleUpdateCartItem(+1)} >
                        <AddCircleIcon />
                    </IconButton>
                </div>

                <div>
                    <Button sx={{ color: "RGB(145 85 253) " }} onClick={handleRemoveCartItem}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem