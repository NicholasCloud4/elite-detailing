import { HeroImage } from '@/components/HeroImage'
import ImageCards from '@/components/ImageCards'
import { MovingCards } from '@/components/MovingCards'
import NavBar from '@/components/NavBar'
import Products from '@/components/Products'
import { ProductsHover } from '@/components/ProductsHover'
import Video from '@/components/video'
import React from 'react'


const page = () => {
  return (
    <>
      <NavBar />
      <HeroImage />
      <ProductsHover />
      {/* <Products /> */}
      <ImageCards />
      <MovingCards />
      <Video />
    </>
  )
}

export default page