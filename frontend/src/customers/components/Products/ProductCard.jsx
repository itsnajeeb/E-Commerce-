import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({product}) => {
    const navigate = useNavigate()

  return (
    <div onClick={()=>{navigate(`/product/:${5}`)}} className=' productCard w-[15rem] m-3 transition-all cursor-pointer p-1'>
        <div className='h-[20rem] '>
            <img  className="object-cover object-left-top w-full h-full" src={product.image} alt="" />
        </div>

        <div className="textPart py-5 px-3 bg-gray-50">
            <div>
                <p className='font-bold opacity-60'>{product.brand}</p>
                <p className=''>{product.title}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>{product.selling_price}</p>
                <p className='line-through opacity-50'>{product.price}</p>
                <p className='text-green-600 font-semibold'>{product.disscount}</p>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard