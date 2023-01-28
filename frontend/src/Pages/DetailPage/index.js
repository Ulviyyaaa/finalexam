import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'

function DetailPage() {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <titlel>
            Detail page
          </titlel>
        </Helmet>
        <Navbar/>
        <DetailPage/>
        <Footer/>
        </HelmetProvider>
    </div>
  )
}

export default DetailPage