import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch } from 'react-redux'
import './style.css'
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";
const DeliveryAddressForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const address = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            streetAddress: data.get('streetAddress'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zipCode'),
            mobile: data.get('mobile'),
        }
        const orderData = {address, navigate}

        dispatch(createOrder(orderData))
    }

    return (
        <Grid container spacing={4} >
            <Grid item size={{ xs: 12, lg: 5 }}>
                <Box className="address_form rounded-e-md shadow-md h-[29rem] overflow-y-auto p-5">
                    <AddressCard />
                    <Button
                        sx={{ mt: 2, bgcolor: "rgb(145, 85, 253)" }}
                        size="large"
                        variant="contained"
                    >
                        Delivery Here
                    </Button>
                </Box>
            </Grid>

            <Grid item size={{ xs: 12, lg: 7 }}>
                <Box className=" rounded-s-md p-5 address_form">
                    <form onSubmit={handleSubmit} >
                        <Grid container spacing={2}>
                            <Grid item size={{ xs: 12, lg: 6 }} >
                                <TextField fullWidth required label="First Name" id="firstName" name="firstName" autoComplete="given-name" />
                            </Grid>

                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth required label="Last Name" name="lastName" id="lastName" autoComplete="give-name" />
                            </Grid>

                            <Grid item size={{ xs: 12, lg: 12 }}>
                                <TextField fullWidth required label="Address " name="streetAddress" id="streetAddress" autoComplete="give-name" multiline rows={4} />
                            </Grid>

                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth required label="City " name="city" id="city" autoComplete="give-name" />
                            </Grid>

                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth required label="State/Province/Region " name="state" id="state" autoComplete="give-name" />
                            </Grid>

                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth required label="Zip / Postal Code " name="zipCode" id="zipCode" autoComplete="give-name" />
                            </Grid>

                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth required label="Phone No " name="mobile" id="mobile" autoComplete="give-name" />
                            </Grid>

                            <Grid item size={{ xs: 12, lg: 6 }}>
                                <Button
                                    sx={{ py: 1.5, mt: 2, bgcolor: "rgb(145, 85, 253)" }}
                                    size="large"
                                    variant="contained"
                                    type="submit"
                                >
                                    Delivery Here
                                </Button>
                            </Grid>



                        </Grid>


                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

export default DeliveryAddressForm;
