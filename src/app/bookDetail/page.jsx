import React from 'react'
import ContactPersonForm from '@/app/components/contactPersonForm/contactPersonForm'
import NavbarProfile from '@/app/components/navbarProfile/navbarProfile'
import Footer from '@/app/components/footer/footer'

export default function BookDetail() {
  return (
    <div className='bg-slate-200'>
        <NavbarProfile />
        <div className="h-screen mb-[1100px]">
        <ContactPersonForm />
        </div>
        <Footer />
    </div>
  )
}
