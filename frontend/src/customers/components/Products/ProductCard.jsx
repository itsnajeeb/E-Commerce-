import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ product }) => {
    // console.log("PRD DATA >", product);
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/product/${product._id}`)
    }
    return (
        <div onClick={handleNavigate} className=' productCard w-[15rem] m-3 transition-all cursor-pointer '>
            <div className="relative h-80 w-full overflow-hidden rounded-t-xl border-t border-l border-r border-gray-200 bg-gray-100 shadow-sm">
                <img
                    src={product.imageUrl}
                    alt={product.title || "Product image"}
                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105"
                />
            </div>


            <div className="textPart py-5 px-3 ">
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p className=''>{product.title}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>{product.discountedPrice}</p>
                    <p className='line-through opacity-50'>{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
                </div>
            </div>

        </div>
    )
}

export default ProductCard