'use client'

import Image from "next/image";
import Bell from "../../assets/bell.png"
import Mail from "../../assets/mail.png"
import Profile from "../../assets/profiles.png"
import plane from "../../assets/plane.png";
import search from "../../assets/search.png"
import Link from "next/link";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function NavbarProfile() {

  const router = useRouter()

  const handleLogout = () => {
    console.log('logout');
    deleteCookie('uniqId');
    deleteCookie('access_token');
    deleteCookie('name');
    deleteCookie('email');
    router.push('/login');
  };


  return (
    <main>
      <nav className="flex items-center justify-around flex-wrap bg-white p-6">
        <div className="flex items-center flex-shrink-0 text-black">
          <Image src={plane} />
          <span className="font-semibold text-xl tracking-tight">
            Ankasa
          </span>
        </div>
        <div className="search">
          <input type="text" className="bg-slate-200 p-2 pl-9 border rounded" placeholder="Where you want to go?" />
          <Image src={search} className="w-5 absolute top-9 ml-2" />
        </div>
          <div className="text-sm flex gap-10">
            <a
              href="/landingPage"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black"
            >
              Booking
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-black"
            >
              Find Ticket
            </a>
          </div>
          <div className="notif flex items-center gap-7">
            <div className="mail">
                <Image src={Mail} />
            </div>
            <div className="bell">
                <Image src={Bell} />
            </div>
            <div className="profile">
                <Image className="rounded-full" src={Profile} />
            </div>
          </div>
          <button className="text-[#414141] text-[16px] font-[700]" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </main>
  );
}
