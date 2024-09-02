import { HeroImage } from '@/components/HeroImage'
import NavBar from '@/components/NavBar'
import Products from '@/components/Products'
import React from 'react'


const page = () => {
  return (
    <>
      <NavBar />
      <HeroImage />
      <Products />
    </>
  )
}

export default page