import React from 'react'

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DevicesIcon from '@mui/icons-material/Devices';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
const salesData = [
    {
        stats: '24K',
        title: "Sales",
        color: "#E5D68A",
        icon: <TrendingUpIcon sx={{ fontSize: "1.75rem" }} />
    },

    {
        stats: '12.5K',
        title: "Customers",
        color: "#22CB5C",
        icon: <PersonOutlineIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '1.5K',
        title: "Products",
        color: "#DE4839",
        icon: <DevicesIcon sx={{ fontSize: "1.75rem" }} />
    },
    {
        stats: '88K',
        title: "Revenue",
        color: "#12B0EB",
        icon: <AttachMoneyIcon sx={{ fontSize: "1.75rem" }} />
    },

]

const renderState = () => {
    return salesData.map((item, index) => (
        
        <Grid item size={{ xs: 12, sm: 3 }} key={index} >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                <Avatar variant='rounded' sx={{
                    marginRight: 3,
                    width: 44,
                    height: 44,
                    boxShadow: 3,
                    color: "white",
                    backgroundColor: item.color
                }}>
                    {item.icon}
                </Avatar>

                <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>

                </Box>
            </Box>


        </Grid>
    ))
}

const MonthlyOverview = () => {
    return (
        <Card sx={{ bgcolor: '#242B2E', color: "white", marginLeft:2 }}>
            <CardHeader title="Monthly Overview" action={
                <IconButton size='small'>
                    <MoreVertIcon />
                </IconButton>
            }
                subheader={
                    <Typography variant='body2'>
                        <Box component="span" sx={{ fontWeight: 600}}>
                            Total  49.5% growth
                        </Box>
                        this month
                    </Typography>
                }
                titleTypographyProps={{
                    sx: {
                        mb: 2.5,
                        lineHeight: '2rem !important',
                        letterSpacing: '.15px !important'
                    }
                }}
            />
            <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>
                    {renderState()}

                </Grid>

            </CardContent>
        </Card>
    )
}

export default MonthlyOverview