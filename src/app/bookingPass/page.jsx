import Footer from '@/app/components/footer/footer'
import NavbarProfile from '@/app/components/navbarProfile/navbarProfile'
import PassBooking from '@/app/components/passBooking/passBooking'
import React from 'react'

export default function BookingPass() {
  return (
    <div className='bg-blue-400'>
        <NavbarProfile />
        <PassBooking />
        <Footer />
    </div>
  )
}
