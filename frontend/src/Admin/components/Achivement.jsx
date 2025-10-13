import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'
const TringleImage = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute"
})


const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute'
})

const Achivement = () => {
    return (
        <Card sx={{ position: 'relative', bgcolor:"#242B2E", color:"white" }} >
            <CardContent>
                <Typography variant='h6' sx={{ letterSpacing: ".25px" }}>
                    Blaze Men's wear shop
                </Typography>
                <Typography variant='body2'>  Congratulation </Typography>
                <Typography variant='h5' sx={{my:3.1}}>  420.9K </Typography>
                <Button size='small' variant='contained'>View Seles</Button>
                <TringleImage></TringleImage>
                <TrophyImg src='https://png.pngtree.com/png-vector/20240624/ourlarge/pngtree-isolated-cute-golden-trophy-transparent-background-png-image_12839352.png'></TrophyImg>
            </CardContent>
        </Card>
    )
}

export default Achivement