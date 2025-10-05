import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'
import './style.css'

const order_status = [
    { label: "On the way", value: "on_the_way " },
    { label: "Delivered", value: "delivered " },
    { label: "Cancellled", value: "cancelled" },
    { label: "Returned", value: "returned" },
]


const Order = () => {
    return (
        <div>
            <Grid container spacing={3} sx={{ justifyContent: "space-between" }} className="px-10 lg:px-20 my-10">
                <Grid item size={3}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5 filter_card'>
                        <h1 className='text-xl font-bold'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='uppercase font-semibold'>order status</h1>

                            {
                                order_status.map((option) => (
                                    <div className='flex items-center '>
                                        <input type="checkbox" defaultValue={option.value} className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 mr-2' />
                                        <label htmlFor={option.value}>{option.label}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Grid>

                <Grid item size={9}>

                    <div className='space-y-5'>
                        {
                            [1, 1, 1, 1, 1, 1].map((item) => <OrderCard />)
                        }
                    </div>



                </Grid>
            </Grid>
        </div>
    )
}

export default Order