import React from 'react'
import MainCarousel from '../../components/MainCarousel/MainCarousel'
import HomeSectionCard from '../../components/HomeSectionCard/HomeSectionCard'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { kurtaPage1 } from '../../../data/mens_kurta'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    
    <div>
        <MainCarousel/>

        <div className='my-20 '>
            <HomeSectionCarousel data={kurtaPage1} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={kurtaPage1} sectionName={"Mens's Pajama"}/>
            <HomeSectionCarousel data={kurtaPage1} sectionName={"Women's Kurta"}/>
            <HomeSectionCarousel data={kurtaPage1} sectionName={"women's Saree"}/>
        </div>
        
    </div>
  )
}

export default HomePage