import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

// const responsive = {
//     0: { items: 1 },
//     568: { items: 2 },
//     1024: { items: 3 },
// };

const items = mainCarouselData.map((item) => <img src={item.image} role='presentation' alt='image' />)
const MainCarousel = () => (
    <div className=''>
        <AliceCarousel
            disableButtonsControls
            items={items}
            autoPlay
            autoPlayInterval={1500}
            infinite
        />
    </div>
);
export default MainCarousel