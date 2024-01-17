'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Swal from "sweetalert2";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import V1 from "../assets/v1.png"
import V2 from "../assets/v2.png"
import V3 from "../assets/v3.png"
import V4 from "../assets/v4.png"
import V5 from "../assets/v5.png"

export default function Login() {

  const router = useRouter();
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const SignIn = async (e) => {
    e.preventDefault()
    let formInput = {
      email,
      password,
    };

    if(!formInput.email || !formInput.password){
      return Swal.fire({
        icon: "error",
        text: "Email and Password is required"
      })
    }

    Swal.fire({
      title: "Please Wait",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    })

    try {
      const res = await axios.post('https://easy-lime-seal-toga.cyclic.app/auth/login', formInput, {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        }
      })
      console.log(res?.data?.data?.access_token);
      Swal.fire({
        icon: "success",
        title: "Login Success!"
      })
      setCookie('uniqId', res?.data?.data?.uniqId, { maxAge: 60 * 60 * 24 });
      setCookie('access_token', res?.data?.data?.access_token, { maxAge: 60 * 60 * 24 });
      setCookie('name', res?.data?.data?.name, { maxAge: 60 * 60 * 24 });
      setCookie('email', res?.data?.data?.email, { maxAge: 60 * 60 * 24 });
      router.push('/profile')
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Failed!',
        text: error.response.data.message,
        icon: 'error',
      });
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container flex bg-white h-screen">
        <div className="box1 bg-blue-500 w-[600px]">
          <Image src={V1} alt="logo1" className="absolute top-[200px] left-[250px]" />
          <Image src={V2} alt="logo2" className="absolute top-[350px] left-[300px]" width={200} />
          <Image src={V3} alt="logo3" className="absolute top-[550px] left-[310px]" />
          <Image src={V4} alt="logo4" className="absolute top-[390px] left-[570px]" />
          <Image src={V5} alt="logo5" className="absolute top-[250px] left-[500px]" />
        </div>
        <div className="box2 m-auto">
          <form onSubmit={(e) => SignIn(e)}>
            <h1 className="font-bold text-[30px] mb-10">Login</h1>
            <div className="users border-b-4">
              <input type="email" placeholder="Username" onChange={(e) => setEmail(e.target.value)} className="p-3 w-[300px]" />
            </div>
            <div className="pass border-b-4">
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="p-3 w-[300px]" />
            </div>
            <div className="press bg-blue-400 rounded text-center mt-3 p-2 text-white">
              <button type="submit">Sign in</button>
            </div>
            <div className="note text-center text-[12px] mt-3">
              <p>Did you forgot your password?</p>
              <a href="" className="text-blue-400">Tap Here for Reset</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
