import Footer from '@/app/components/footer/footer'
import NavbarProfile from '@/app/components/navbarProfile/navbarProfile'
import ProfileMenu from '@/app/components/profileMenu/profileMenu'
import React from 'react'
import DetailMyBooking from '../components/detailMyBooking/detailMyBooking'

export default function Profile() {
  return (
    <div className=''>
      <NavbarProfile />
      <div className="flex justify-around h-auto pb-32 bg-white">
        <ProfileMenu />
        <DetailMyBooking />
      </div>
        <Footer />
    </div>
  )
}
