import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
    return (
        <div className="px-10 lg:px-20 my-10">
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>

            <div className='py-20'>
                < OrderTracker />
            </div>

            <Grid className="space-y-5 " container size={12}>

                {[1, 1, 1, 1, 1, 1].map((item) => (
                    <Grid item container size={12} className="rounded-md p-5 order_details_card " sx={{ alignItems: "center", justifyContent: "space-between" }}>

                        <Grid item size={6}>
                            <div className='flex items-center space-x-7 '>
                                <img
                                    className='w-[6rem] h-[7rem] object-cover object-top rounded-sm'
                                    src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="" />
                                <div className=' mt-2'>
                                    <p className='font-semibold'>meain kur a ksi ak e</p>
                                    <p className='space-x-5 font-semibold opacity-50'><span>Color : Black</span> <span>Size : M</span></p>
                                    <p>Seller : Lineria</p>
                                    <p>₹1999</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid>
                            <Box sx={{ color: deepPurple[500], display: "flex", justifyContent: "center", alignItems: "center" }} >
                                <StarBorderIcon fontSize='5xl' className='px-2 text-5xl' />
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>

                    </Grid>
                ))}



            </Grid>
        </div>
    )
}

export default OrderDetails