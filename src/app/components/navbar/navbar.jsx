import Image from "next/image";
import plane from "../../assets/plane.png";
import search from "../../assets/search.png"
import Link from "next/link";

export default function Navbar() {
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
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Ankasa</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
          <div className="text-sm flex gap-10">
            <a
              href="#responsive-header"
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
          <div>
            <Link href='/pages/login' className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-blue-600 hover:border-transparent hover:text-black bg-blue-600 mt-4 lg:mt-0">
              Sign Up
            </Link>
          </div>
      </nav>
    </main>
  );
}
