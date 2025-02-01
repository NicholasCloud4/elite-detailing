import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { HeroImage } from '@/components/HeroImage'
import ImageCards from '@/components/ImageCards'
import { MovingCards } from '@/components/MovingCards'
import NavBar from '@/components/NavBar'
import Products from '@/components/Products'
import { ProductsHover } from '@/components/ProductsHover'
import SignUp from '@/components/SignUp'
import Video from '@/components/Video'
import React from 'react'


const page = () => {
  return (
    <>
      <NavBar />
      <HeroImage />
      <ProductsHover />
      <ImageCards />
      <MovingCards />
      <Video />
      <Contact />
      <SignUp />
      <Footer />
    </>
  )
}

export default page