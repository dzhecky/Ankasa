import Image from "next/image";
import Link from "next/link";
import V1 from "../../assets/v1.png";
import V2 from "../../assets/v2.png";
import V3 from "../../assets/v3.png";
import V4 from "../../assets/v4.png";
import V5 from "../../assets/v5.png";

export default function Register() {

  



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container flex bg-white">
        <div className="box1 bg-blue-500 w-3/5 h-screen">
          <Image src={V1} className="absolute top-[200px] left-[250px]" />
          <Image
            src={V2}
            className="absolute top-[350px] left-[300px]"
            width={200}
          />
          <Image src={V3} className="absolute top-[550px] left-[310px]" />
          <Image src={V4} className="absolute top-[390px] left-[570px]" />
          <Image src={V5} className="absolute top-[250px] left-[500px]" />
        </div>
        <div className="box2 m-auto">
          <form action="">
            <h1 className="font-bold text-[30px] mb-10">Register</h1>
            <div className="users border-b-4">
              <input
                type="text"
                placeholder="Full name"
                className="p-2 w-[300px]"
              />
            </div>
            <div className="users border-b-4">
              <input
                type="text"
                placeholder="Email"
                className="p-2 w-[300px]"
              />
            </div>
            <div className="pass border-b-4">
              <input
                type="password"
                placeholder="Password"
                className="p-2 w-[300px]"
              />
            </div>
            <div className="press bg-blue-400 rounded text-center mt-3 p-2 text-white font-bold">
              <button>Sign Up</button>
            </div>
            <label className="text-[15px]">
              <input className="mt-5" type="checkbox" /> Accept terms and condition
            </label>
            <div className="note text-center text-[12px] mt-14 border-t-2 pt-5">
              <p>Already have an account?</p>
            </div>
            <div className="press rounded border-2 border-blue-400 text-center mt-8 p-2 text-blue-400 font-bold hover:bg-blue-400 hover:text-white">
              <Link href='/pages/register'>
              <button>Sign In</button>
              
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
