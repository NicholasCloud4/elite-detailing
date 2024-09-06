import { HeroImage } from '@/components/HeroImage'
import ImageCards from '@/components/ImageCards'
import NavBar from '@/components/NavBar'
import Products from '@/components/Products'
import { ProductsHover } from '@/components/ProductsHover'
import React from 'react'


const page = () => {
  return (
    <>
      <NavBar />
      <HeroImage />
      <ProductsHover />
      <Products />
      <ImageCards />
    </>
  )
}

export default page