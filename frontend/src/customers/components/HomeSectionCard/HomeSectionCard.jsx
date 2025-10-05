import React from 'react'

const HomeSectionCard = ({product}) => {
    return (
        <div className='cursor-pointer bg-white shadow-lg w-60 h-74  flex flex-col items-center overflow-hidden my-5'>
            <div  className='h-[13rem] w-[10rem] '>
                <img 
                className='object-cover object-top w-full h-full'
                src={product.image} alt="image" />
            </div>
            <div className='px-6 py-2'>
                <h3 className='text-base font-semibold text-gray-900'>{product.brand}</h3>
                <p className='text-sm text-gray-500'>{product.title}</p>
            </div>
        </div>
    )
}

export default HomeSectionCard  