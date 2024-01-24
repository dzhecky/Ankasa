"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const url = process.env.NEXT_PUBLIC_API_LINK;

export default function FormLogin() {
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
    <div className="box2 sm:w-[50%] mx-auto overflow-hidden w-full">
          <form onSubmit={(e) => SignIn(e)} className="mx-[140px] my-[200px]">
            <h1 className="font-bold text-[30px] mb-10">Login</h1>
            <div className="users border-b-4">
              <input type="email" placeholder="Username" onChange={(e) => setEmail(e.target.value)} className="p-3 w-full" />
            </div>
            <div className="pass border-b-4">
              <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="p-3 w-full" />
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
  );
}