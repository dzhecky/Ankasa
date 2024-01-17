import React from 'react'
import NavbarProfile from '@/app/components/navbarProfile/navbarProfile'
import Footer from '@/app/components/footer/footer'
import MyBookingPayment from '@/app/components/myBookingPayment/myBookingPayment'

export default function MyBooking() {
  return (
    <div className='bg-blue-400'>
        <NavbarProfile />
        <MyBookingPayment />
        <Footer />
    </div>
  )
}
