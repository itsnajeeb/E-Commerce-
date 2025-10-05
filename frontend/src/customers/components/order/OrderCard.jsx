import React from 'react'
import { Grid } from '@mui/material'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {
    const navigate = useNavigate()
    const handleOrderDetailsNavigation = () => {
        navigate(`/account/order/:${101010}`)
    }
    return (
        <div className='order_details_card  px-5 py-4 transition-all' onClick={handleOrderDetailsNavigation}>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item size={6}>
                    <div className='flex cursor-pointer'>
                        <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="Kurta"
                            className='w-[5rem] h-[5rem] object-cover object-top'
                        />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Slim Mend Rise Black Pant</p>
                            <p className='opacity-50 text-xs font-semibold'>Size : M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color : Black</p>
                        </div>
                    </div>
                </Grid>

                <Grid item size={2}>
                    <p>₹1099</p>
                </Grid>
                <Grid item size={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: '15px', height: "15px" }} className='text-green-600 mr-2' />
                            <span> Delivered on Oct 6 2025 </span>
                        </p>
                        <p className='text-xs'>Your Item has been Delivered</p>
                    </div>}
                    {
                        false && <p>
                            <span>Expected Delivery on Oct 6 2025 </span>
                        </p>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard