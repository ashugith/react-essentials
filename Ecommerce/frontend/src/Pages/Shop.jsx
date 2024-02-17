import React from 'react'
import Popular from '../Popular/Popular'
import Hero from '../Hero/Hero'
import Offers from '../Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'
import NewsLetter from '../NewsLetter/NewsLetter'
import ShopCategory from '../Pages/ShopCategory'

const Shop  = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <ShopCategory/>
      
    </div>
  )
}

export default Shop
