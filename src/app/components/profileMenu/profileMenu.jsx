import React from 'react'
import Image from 'next/image'
import Profile from '../../assets/profiles.png'

export default function ProfileMenu() {
  return (
    <div className='grandContent w-[320px] my-10 bg-white p-5 rounded-[10px]'>
        <div className="topProfile">
        <Image src={Profile} className='m-auto rounded-xl' />
        <div className="selectPhoto text-blue-400 font-bold border-2 rounded-[10px] w-[120px] text-center mt-5 p-2 m-auto">
            <button>Select Photo</button>
        </div>
        <div className="description text-center mt-5">
            <h1 className='font-bold text-[20px]'>Mike Kowalski</h1>
            <p className='text-[12px]'>Medan, Indonesia</p>
        </div>
        </div>
        <div className="menu flex justify-between text-[13px] mt-5">
            <div className="title font-bold">
                <p>Cards</p>
            </div>
            <div className="editTitle text-blue-400">
                <p>+ Add</p>
            </div>
        </div>
        <div className="miniHero bg-blue-400 p-5 rounded-[10px] mt-3 text-white shadow-lg">
            <p className='font-bold'>4441 1235 5512 5551</p>
            <div className="wrap flex justify-between text-[13px]">
            <div className="">
                <p>X brand</p>
            </div>
            <div className="sumPrice">
                <p>$ 1,440.2</p>
            </div>
            </div>
        </div>
        <div className="menuNavigation p-5">
            <div className="users flex mt-5 gap-5">
                <img src="/user.svg" alt="user" />
                <p>Profile</p>
            </div>
            <div className="star flex mt-5 gap-5">
                <img src="/star.svg" alt="star" />
                <p>My Review</p>
            </div>
            <div className="setting flex mt-5 gap-5">
                <img src="/setting.svg" alt="setting" />
                <p>Settings</p>
            </div>
            <div className="logout flex mt-5 gap-5">
                <img src="/logout.svg" alt="logout" />
                <p>Logout</p>
            </div>
        </div>
    </div>
  )
}
