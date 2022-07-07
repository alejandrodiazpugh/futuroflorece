import React from 'react'
import Newsletter from './Newsletter'
import Hero from './Hero'
import CardListContainer from './CardListContainer'
import DonationsBanner from './DonationsBanner'
import Loading from './Loading'
import { useState, useEffect } from 'react'

export default function InicioContainer() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  
  }, [])
  
  return (
    <>
    {loading ? <Loading /> : 
    <div>
      <Hero />
      <Newsletter />
      <CardListContainer />
      <DonationsBanner />
    </div>
    
  }
    </>
  )
}
