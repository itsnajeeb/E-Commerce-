import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className="relative lg:px-8 px-4 w-full">
        <h2 className='text-2xl font-semibold text-gray-900'>{sectionName}</h2>
      <div className="relative p-5 w-full">

        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableDotsControls
          disableButtonsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          animationDuration={600} // smoother animation
          animationType="fadeout" // options: "slide", "fadeout"
        />

        {/* Right button */}
        {activeIndex !== items.length - 5 && (
          <button
            onClick={slideNext}
            className="cursor-pointer absolute top-1/2 right-0 -translate-y-1/2 z-50 pr-3 bg-white py-4 shadow rounded-full hover:scale-110 transition-transform duration-300"
          >
            <ArrowBackIosIcon className="rotate-180" />
          </button>
        )}

        {/* Left button */}
        {activeIndex !== 0 && (
          <button
            onClick={slidePrev}
            className="cursor-pointer absolute top-1/2 left-0 -translate-y-1/2 pl-4 z-50 bg-white py-4 shadow rounded-full hover:scale-110 transition-transform duration-300"
          >
            <ArrowBackIosIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
